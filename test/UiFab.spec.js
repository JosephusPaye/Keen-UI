import Vue from 'vue';
import UiFab from '../src/UiFab.vue';

describe('UiFab.vue', function() {
    it('should initialize with correct data/props', function() {
        const vm = new Vue({
            template: '<div><ui-fab icon="add" v-ref:fab></ui-fab></div>',
            components: {
                UiFab
            }
        }).$mount();

        expect(vm.$refs.fab.icon).toBe('add');
        expect(vm.$refs.fab.type).toBe('ui-fab-normal');
        expect(vm.$refs.fab.color).toBe('color-default');
        expect(vm.$refs.fab.disabled).toBe(false);
        expect(vm.$refs.fab.tooltip).toBe(undefined);
    });
});
