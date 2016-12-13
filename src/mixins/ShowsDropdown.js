import Drop from '../lib/tether-drop'
import classlist from '../helpers/classlist'
import EventBus from '../helpers/event-bus'
import typeCheck from '../helpers/type-check'
import ReceivesTargetedEvent from './ReceivesTargetedEvent'

export default {
    props: {
        id: String,
        trigger: {
            type: String
        },
        containFocus: {
            type: Boolean,
            default: true
        },
        dropdownPosition: {
            type: String,
            default: 'bottom left'
        },
        openOn: {
            type: String,
            default: 'click' // 'click', 'hover', 'focus', 'always'
        }
    },

    data() {
        return {
            drop: null,
            lastFocussedElement: null
        };
    },

    beforeDestroy() {
        if (this.drop) {
            this.drop.remove();
            this.drop.destroy();
        }
    },

    mounted() {
        if (this.trigger) {
            this.initializeDropdown();
        }
        EventBus.$on('ui-dropdown::open', (id) => {
            // Abort if event isn't meant for this component
            if (!this.eventTargetsComponent(id)) {
                return
            }
            this.openDropdown()
        })

        EventBus.$on('ui-dropdown::close', (id) => {
            // Abort if event isn't meant for this component
            if (!this.eventTargetsComponent(id)) {
                return
            }
            this.closeDropdown()
        })

        EventBus.$on('ui-dropdown::toggle', (id) => {
            // Abort if event isn't meant for this component
            if (!this.eventTargetsComponent(id)) {
                return
            }
            this.toggleDropdown()
        })
    },

    methods: {
        initializeDropdown() {
            let _t = this.$parent.$refs[this.trigger]

            this._trigger = typeCheck(_t) === 'array' ? _t[0] : _t
            this.drop = new Drop({
                target: this._trigger,
                content: this.$refs.dropdown,
                position: this.dropdownPosition,
                constrainToWindow: true,
                openOn: this.openOn
            });

            // TO FIX: Hacky workaround for Tether not positioning
            // correctly for positions other than 'bottom left'
            if (this.dropdownPosition !== 'bottom left') {
                this.drop.open();
                this.drop.close();
                this.drop.open();
                this.drop.close();
            }

            this.drop.on('open', this.positionDrop);
            this.drop.on('open', this.dropdownOpened);
            this.drop.on('close', this.dropdownClosed);
        },

        openDropdown() {
            if (this.drop) {
                this.drop.open();
            }
        },

        /**
         * Ensures drop is horizontally within viewport (vertical is already solved by drop.js).
         * https://github.com/HubSpot/drop/issues/16
         */
        positionDrop() {
            const drop = this.drop;
            const windowWidth = window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth;

            let dropWidth = drop.drop.getBoundingClientRect().width;
            let left = drop.target.getBoundingClientRect().left;
            let availableSpace = windowWidth - left;

            if (dropWidth > availableSpace) {
                let direction = dropWidth > availableSpace ? 'right' : 'left';

                drop.tether.attachment.left = direction;
                drop.tether.targetAttachment.left = direction;

                drop.position();
            }
        },

        closeDropdown() {
            if (this.drop) {
                this.drop.close();
            }
        },

        toggleDropdown(e) {
            if (this.drop) {
                this.drop.toggle(e);
            }
        },

        dropdownOpened() {
            classlist.add(this._trigger, 'dropdown-open');

            this.lastFocussedElement = document.activeElement;
            this.$refs.dropdown.focus();
            this.$emit('dropdown-opened');
        },

        dropdownClosed() {
            classlist.remove(this._trigger, 'dropdown-open');

            if (this.lastFocussedElement) {
                this.lastFocussedElement.focus();
            }

            this.$emit('dropdown-closed');
        }
    },

    mixins: [
        ReceivesTargetedEvent
    ]
};
