<template>
    <div id="app" class="keen-docs">
        <sidebar class="is-desktop"></sidebar>

        <transition name="transition-fade">
            <div
                class="keen-docs-mobile-sidebar__backdrop"
                @click="showSidebar = false"
                v-show="showSidebar"
            ></div>
        </transition>

        <transition name="transition-slide">
            <sidebar class="is-mobile" v-show="showSidebar"></sidebar>
        </transition>

        <section class="keen-docs-content">
            <div class="keen-docs-content__toolbar">
                <div class="keen-docs-content__toolbar-content">
                    <ui-icon-button
                        class="keen-docs-content__toolbar-menu-button"
                        color="white"
                        icon="menu"
                        type="clear"

                        @click="showSidebar = true"
                    ></ui-icon-button>

                    <h1 class="keen-docs-content__toolbar-title">{{ $route.meta.title }}</h1>

                    <a
                        class="keen-docs-content__toolbar-action"
                        rel="noopener"
                        target="_blank"

                        :href="'https://github.com/JosephusPaye/Keen-UI/blob/master/' + $route.meta.sourceUrl"

                        v-if="$route.meta.sourceUrl"
                    >View Source</a>
                </div>
            </div>

            <div class="keen-docs-content__page-content" ref="pageContent">
                <router-view></router-view>
            </div>
        </section>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import UiIconButton from 'src/UiIconButton.vue';

export default {
    data() {
        return {
            showSidebar: false
        };
    },

    watch: {
        '$route'() {
            this.$nextTick(() => {
                window.Prism.highlightAll();
                this.$refs.pageContent.scrollTop = 0;
                this.showSidebar = false;
            });
        }
    },

    components: {
        Sidebar,
        UiIconButton
    }
};
</script>

<style lang="scss">
@import './styles/index.scss';
</style>
