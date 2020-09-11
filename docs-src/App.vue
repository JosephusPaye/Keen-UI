<template>
    <div id="app" class="keen-docs">
        <navbar
            :repo-url="repoUrl"
            :source-url="pageSourceUrl"
            :title="pageTitle"
            :version="version"
            :version-url="versionUrl"

            @toggle-sidebar="sidebarOpen = !sidebarOpen"
        ></navbar>

        <transition name="transition-fade">
            <div
                class="keen-docs-mobile-sidebar__backdrop"
                @click="sidebarOpen = false"
                v-show="showSidebar"
            ></div>
        </transition>

        <section class="keen-docs-content">
            <transition name="transition-slide">
                <sidebar
                    :version="version"
                    :version-url="versionUrl"
                    :repo-url="repoUrl"

                    v-show="showSidebar"
                ></sidebar>
            </transition>

            <div class="keen-docs-content__page-content" ref="pageContent">
                <router-view></router-view>
            </div>
        </section>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Sidebar from './Sidebar.vue';
import UiIcon from 'src/UiIcon.vue';
import UiIconButton from 'src/UiIconButton.vue';

export default {
    components: {
        Navbar,
        Sidebar,
        UiIcon,
        UiIconButton
    },

    data() {
        return {
            isMobile: false,
            sidebarOpen: false,
            version: '1.3.1',
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

    beforeDestroy() {
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
