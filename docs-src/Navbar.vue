<template>
    <nav class="keen-docs-navbar">
        <brand
            class="keen-docs-navbar__left"

            :repo-url="repoUrl"
            :version-url="versionUrl"
            :version="version"
        ></brand>

        <div class="keen-docs-navbar__right">
            <div class="keen-docs-navbar__right-container">
                <ui-icon-button
                    class="keen-docs-navbar__menu-button"
                    color="white"
                    type="clear"

                    @click="$emit('toggle-sidebar')"
                >
                    <ui-icon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6h18v2.016H3V6zm0 6.984v-1.97h18v1.97H3zM3 18v-2.016h18V18H3z"/></svg>
                    </ui-icon>
                </ui-icon-button>

                <h1 class="keen-docs-navbar__title">{{ title }}</h1>

                <a
                    class="keen-docs-navbar__action"
                    rel="noopener"
                    target="_blank"

                    :href="sourceUrl"

                    v-if="sourceUrl"
                >View Source</a>
            </div>
        </div>
    </nav>
</template>

<script>
import Brand from './Brand.vue';
import UiIcon from 'src/UiIcon.vue';
import UiIconButton from 'src/UiIconButton.vue';

export default {
    components: {
        Brand,
        UiIcon,
        UiIconButton
    },

    props: {
        version: String,
        versionUrl: String,
        repoUrl: String,
        title: String,
        sourceUrl: String
    }
};
</script>

<style lang="scss">
@import './styles/imports.scss';

.keen-docs-navbar {
    height: rem(62px);
    background-color: $toolbar-color;
    color: white;
    width: 100%;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    z-index: $z-index-toolbar;
    position: fixed;
}

.keen-docs-navbar__left {
    flex-shrink: 0;
    width: rem($sidebar-width)!important;

    @media screen and (max-width: $mobile-breakpoint) {
        display: none;
    }
}

.keen-docs-navbar__right {
    display: flex;
    align-items: center;
    flex-grow: 1;
}

.keen-docs-navbar__right-container {
    margin: 0 auto;
    width: 100%;
    max-width: rem(1092px);
    padding-left: rem(32px);
    padding-right: rem(32px);
    display: flex;
    align-items: center;

    @media screen and (max-width: $mobile-breakpoint) {
        padding-left: rem(24px);
        padding-right: rem(24px);
    }
}

.ui-icon-button.keen-docs-navbar__menu-button {
    margin-right: rem(16px);
    cursor: pointer;
    display: none;

    @media screen and (max-width: $mobile-breakpoint) {
        display: flex;
    }
}

.keen-docs-navbar__title {
    margin: 0;
    flex-grow: 1;
    font-weight: normal;
    font-size: 1.3rem;
}

.keen-docs-navbar__action {
    margin-left: auto;
    font-size: 0.9rem;
    color: white;
}
</style>
