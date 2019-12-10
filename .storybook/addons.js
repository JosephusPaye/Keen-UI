import addons from '@storybook/addons';
import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';

setTimeout(() => {
    addons.elements.panel['storybook/actions/panel'].title = 'Events';
}, 0);
