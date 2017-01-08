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
                    <ui-icon
                        class="keen-docs-content__toolbar-menu-button"
                        @click.native="showSidebar = true"
                    >menu</ui-icon>

                    <h1 class="keen-docs-content__toolbar-title">{{ $route.meta.title }}</h1>

                    <a
                        class="keen-docs-content__toolbar-action"
                        rel="noopener"
                        target="_blank"

                        :href="$route.meta.sourceUrl"

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
import UiIcon from 'src/UiIcon.vue';
import Sidebar from './Sidebar.vue';

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
        UiIcon,
        Sidebar
    }
};
</script>

<style lang="sass">
@import './styles/index.scss';
</style>
