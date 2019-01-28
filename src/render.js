export default {
    name: 'render',

    functional: true,

    props: ['nodes'],

    render(createElement, context) {
        return createElement('div', { class: 'ui-render' }, context.props.nodes);
    }
};
