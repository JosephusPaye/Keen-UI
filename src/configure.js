import merge from 'deepmerge';

export default function configure(Component, props) {
    Object.keys(props).forEach(propName => {
        if (Component.props[propName] === undefined) {
            return;
        }

        const defaultValue = Component.props[propName].default;

        if (typeof defaultValue === 'object') {
            Component.props[propName].default = merge(defaultValue, props[propName]);
            return;
        }

        Component.props[propName].default = props[propName];
    });
}
