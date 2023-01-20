<template>
    <div id="app" class="keen-docs">
        <docs-navbar
            :repo-url="repoUrl"
            :source-url="pageSourceUrl"
            :title="pageTitle"
            :version="version"
            :version-url="versionUrl"

            @toggle-sidebar="sidebarOpen = !sidebarOpen"
        ></docs-navbar>

        <transition name="transition-fade">
            <div
                v-show="showSidebar"
                class="keen-docs-mobile-sidebar__backdrop"
                @click="sidebarOpen = false"
            ></div>
        </transition>

        <section class="keen-docs-content">
            <transition name="transition-slide">
                <docs-sidebar
                    v-show="showSidebar"
                    :version="version"
                    :version-url="versionUrl"
                    :repo-url="repoUrl"
                ></docs-sidebar>
            </transition>

            <div ref="pageContent" class="keen-docs-content__page-content">
                <router-view></router-view>
            </div>
        </section>
    </div>
</template>

<script>
import DocsNavbar from './DocsNavbar.vue';
import DocsSidebar from './DocsSidebar.vue';

export default {
    components: {
        DocsNavbar,
        DocsSidebar,
    },

    data() {
        return {
            isMobile: false,
            sidebarOpen: false,
            version: '1.4.0',
            repoUrl: 'https://github.com/JosephusPaye/Keen-UI',
            description: 'Keen UI is a Vue.js UI library with a simple API, inspired by Google\'s Material Design.',
            mobileMediaQuery: null
        };
    },

    computed: {
        pageTitle() {
            return this.$route.meta.title;
        },

        pageSourceUrl() {
            return this.$route.meta.sourceUrl ?
                'https://github.com/JosephusPaye/Keen-UI/blob/master/' + this.$route.meta.sourceUrl :
                undefined;
        },

        documentTitle() {
            return this.$route.meta.title + ' | ' + this.description;
        },

        showSidebar() {
            return this.isMobile ? this.sidebarOpen : true;
        },

        versionUrl() {
            return `https://github.com/JosephusPaye/Keen-UI/releases/tag/v${this.version}`;
        }
    },

    watch: {
        '$route'() {
            document.title = this.documentTitle;

            this.$nextTick(() => {
                window.scrollTo(0, 0);
                this.sidebarOpen = false;
            });
        }
    },

    mounted() {
        document.title = this.documentTitle;

        this.mobileMediaQuery = window.matchMedia('screen and (max-width: 768px)');
        this.mobileMediaQuery.addListener(this.onResize);

        this.onResize(this.mobileMediaQuery);
    },

    beforeUnmount() {
        if (this.mobileMediaQuery) {
            this.mobileMediaQuery.removeListener(this.onResize);
        }
    },

    methods: {
        onResize(mediaQuery) {
            this.isMobile = mediaQuery.matches;
        }
    }
};
</script>

<style lang="scss">
@import './styles/index.scss';
</style>
