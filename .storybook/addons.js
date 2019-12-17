import addons from '@storybook/addons';
import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';

import './source-addon';

setTimeout(() => {
    addons.elements.panel['storybook/actions/panel'].title = 'Events';
}, 0);
