import { configure } from '@storybook/vue';

// CSS reset expected by Keen UI
import './reset.css';

// Bootstrap modality
import '../src/bootstrap';

// Load all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
