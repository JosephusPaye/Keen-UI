import { configure } from '@storybook/vue';

// CSS reset expected by Keen UI
import './reset.css';

// Load all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
