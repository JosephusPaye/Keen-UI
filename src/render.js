import { h } from 'vue';

const UiRender = props => {
    return h('div', { class: 'ui-render' }, props.nodes);
};

UiRender.props = ['nodes'];

export default UiRender;
