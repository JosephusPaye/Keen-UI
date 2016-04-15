import Vue from 'vue';
import UiIcon from '../src/UiIcon.vue';

describe('UiIcon.vue', function() {
    it('should initialize with correct data/props', function() {
        const vm = new Vue({
            template: '<div><ui-icon icon="mail" :disable-text="true" v-ref:icon></ui-icon></div>',
            components: {
                UiIcon
            }
        }).$mount();

        expect(vm.$refs.icon.icon).toBe('mail');
        expect(vm.$refs.icon.disableText).toBe(true);
    });

    it('should add icon prop as a class', function() {
        const vm = new Vue({
            template: '<div><ui-icon icon="mail" v-ref:icon></ui-icon></div>',
            components: {
                UiIcon
            }
        }).$mount();

        expect(vm.$refs.icon.$el.className).toMatch(/mail/);
    });

    it('should render icon prop as inner text', function() {
        const vm = new Vue({
            template: '<div><ui-icon icon="mail" v-ref:icon></ui-icon></div>',
            components: {
                UiIcon
            }
        }).$mount();

        expect(vm.$refs.icon.$el.textContent).toBe('mail');
    });

    it('should not render icon prop as inner text when disableText prop is true', function() {
        const vm = new Vue({
            template: '<div><ui-icon icon="mail" :disable-text="true" v-ref:icon></ui-icon></div>',
            components: {
                UiIcon
            }
        }).$mount();

        expect(vm.$refs.icon.$el.textContent).toBe('');
    });
});
