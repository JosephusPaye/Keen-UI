<template>
    <div id="app">
        <navbar v-model="sidebar"></navbar>
        <div class="page">
            <ui-toolbar
                :title="'Keen UI-'+activeModule" class="page-toolbar"
                text-color="black" @nav-icon-clicked="toggleSidebar"
            ></ui-toolbar>
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>


<script>
import Navbar from './components/Navbar.vue'
import UiToolbar from '../src/UiToolbar.vue'


export default {
    data() {
        return {
            sidebar: false,
            activeModule: '',
        };
    },

    methods: {
        toggleSidebar() {
            this.sidebar = !this.sidebar
        }
    },

    components: {
        UiToolbar,
        Navbar
    },

    beforeUpdate() {
        this.activeModule = this.$route.meta
    }
};
</script>

<style lang="stylus">
@import './styles/app'
</style>
