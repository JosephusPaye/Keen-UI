<template>
    <div class="keen-docs-brand">
        <span class="keen-docs-brand__title">Keen UI</span>

        <a
            class="keen-docs-brand__version"
            rel="noopener"
            target="_blank"
            title="View release notes"

            :href="versionUrl"
        >v{{ version }}</a>

        <a
            class="keen-docs-brand__button"
            rel="noopener"
            target="_blank"
            title="View on Github"

            :href="repoUrl"
        >
            <ui-icon>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M8 .198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.47 7.59.4.075.548-.173.548-.384 0-.19-.008-.82-.01-1.49-2.227.485-2.696-.943-2.696-.943-.364-.924-.888-1.17-.888-1.17-.726-.497.055-.486.055-.486.802.056 1.225.824 1.225.824.714 1.223 1.872.87 2.328.665.072-.517.28-.87.508-1.07-1.776-.202-3.644-.888-3.644-3.954 0-.874.313-1.588.824-2.148-.083-.202-.357-1.015.077-2.117 0 0 .672-.215 2.2.82.64-.177 1.323-.266 2.003-.27.68.004 1.365.093 2.004.27 1.527-1.035 2.198-.82 2.198-.82.435 1.102.162 1.916.08 2.117.512.56.822 1.274.822 2.147 0 3.072-1.872 3.748-3.653 3.946.288.248.544.735.544 1.48 0 1.07-.01 1.933-.01 2.196 0 .213.145.462.55.384 3.178-1.06 5.467-4.057 5.467-7.59 0-4.418-3.58-8-8-8z"/></svg>
            </ui-icon>
        </a>
    </div>
</template>

<script>
import UiIcon from 'src/UiIcon.vue';

export default {
    name: 'Brand',

    components: {
        UiIcon
    },

    props: {
        version: String,
        versionUrl: String,
        repoUrl: String
    }
};
</script>

<style lang="scss">
@import './styles/imports.scss';

.keen-docs-brand {
    background-color: $toolbar-color;
    font-size: 1.5rem;
    height: rem(62px);
    padding: rem(16px);
    width: 100%;
    color: white;
}

.keen-docs-brand__version {
    color: white;
    display: inline-block;
    font-size: 0.9rem;
    opacity: 0.7;
    vertical-align: super;

    &:hover,
    &:focus {
        opacity: 1;
    }
}

.keen-docs-brand__button {
    color: white;
    float: right;
    line-height: 1;
    opacity: 0.8;

    &:hover,
    &:focus {
        opacity: 1;
    }
}
</style>
