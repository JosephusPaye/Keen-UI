<template>
    <div id="app" class="keen-docs">
        <aside class="keen-docs-sidebar is-desktop">
            <div class="keen-docs-sidebar__header">
                <span>Keen UI</span>
                <a href="#" title="View release notes" class="version">v1.0.0</a>
            </div>

            <div class="keen-docs-sidebar__scrollable">
                <div class="keen-docs-sidebar__description">
                    <p>A lightweight collection of essential UI components written with Vue and inspired by Material Design.</p>

                    <p>Created by <a href="https://twitter.com/JosephusPaye">Josephus Paye II</a>.</p>
                </div>

                <ul class="keen-docs-sidebar__menu">
                    <li class="keen-docs-sidebar__menu-section" v-for="section in menu">
                        <div class="keen-docs-sidebar__menu-section-header">{{ section.title }}</div>

                        <ul class="keen-docs-sidebar__menu-section-links">
                            <li v-for="item in section.menu">
                                <router-link
                                    :to="item.path" class="keen-docs-sidebar__menu-item" exact
                                >
                                    {{ item.title }}
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>

        <transition name="transition-fade">
            <div
                class="keen-docs-mobile-sidebar__backdrop"
                @click="showSidebar = false"
                v-show="showSidebar"
            ></div>
        </transition>

        <transition name="transition-slide">
            <aside class="keen-docs-sidebar is-mobile" v-show="showSidebar">
                <div class="keen-docs-sidebar__header">
                    <span>Keen UI</span>
                    <a href="#" title="View release notes" class="version">v1.0.0</a>
                </div>

                <div class="keen-docs-sidebar__scrollable">
                    <div class="keen-docs-sidebar__description">
                        <p>A lightweight collection of essential UI components written with Vue and inspired by Material Design.</p>

                        <p>Created by <a href="https://twitter.com/JosephusPaye">Josephus Paye II</a>.</p>
                    </div>

                    <ul class="keen-docs-sidebar__menu">
                        <li class="keen-docs-sidebar__menu-section" v-for="section in menu">
                            <div class="keen-docs-sidebar__menu-section-header">{{ section.title }}</div>

                            <ul class="keen-docs-sidebar__menu-section-links">
                                <li v-for="item in section.menu">
                                    <router-link
                                        :to="item.path" class="keen-docs-sidebar__menu-item" exact
                                    >
                                        {{ item.title }}
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </aside>
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
                        target="_blank"
                        rel="noopener"
                        class="keen-docs-content__toolbar-action"
                        :href="$route.meta.sourceUrl"
                        v-if="$route.meta.sourceUrl"
                    >View source</a>
                </div>
            </div>

            <div class="keen-docs-content__page-content" ref="pageContent">
                <router-view></router-view>
            </div>
        </section>
    </div>
</template>

<script>
import Routes from './routes.js';
import UiIcon from 'src/UiIcon.vue';

export default {
    data() {
        return {
            menu: Routes.menu,
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
        UiIcon
    }
};
</script>

<style lang="sass">
@import './styles/index.scss';
</style>
