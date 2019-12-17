import { configure } from '@storybook/vue';

// CSS reset expected by Keen UI
import './css/reset.css';

// Utilities for use in global decorators
import './css/utilities.css';

// Bootstrap modality
import '../src/bootstrap';

// Load all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
