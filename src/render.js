export default {
    name: 'render',

    functional: true,

    props: ['nodes'],

    render(createElement, context) {
        return createElement('div', context.props.nodes);
    }
};
