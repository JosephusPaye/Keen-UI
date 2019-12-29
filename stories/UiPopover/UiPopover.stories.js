import { story } from '../story';

import PositionTop from './PositionTop.story.vue';
import PositionBottom from './PositionBottom.story.vue';
import PositionLeft from './PositionLeft.story.vue';
import PositionRight from './PositionRight.story.vue';
import AnimationFade from './AnimationFade.story.vue';
import AnimationShiftAway from './AnimationShiftAway.story.vue';
import AnimationScale from './AnimationScale.story.vue';
import AnimationNone from './AnimationNone.story.vue';
import InsideModal from './InsideModal.story.vue';
import ControlProgrammatically from './ControlProgrammatically.story.vue';

export default {
    title: 'UiPopover',
};

export const positionTop = story(PositionTop);
export const positionBottom = story(PositionBottom);
export const positionLeft = story(PositionLeft);
export const positionRight = story(PositionRight);
export const animationFade = story(AnimationFade);
export const animationScale = story(AnimationScale);
export const animationShiftAway = story(AnimationShiftAway);
export const animationNone = story(AnimationNone);
export const insideModal = story(InsideModal);
export const controlProgrammatically = story(ControlProgrammatically);
