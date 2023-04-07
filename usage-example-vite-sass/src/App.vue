<script setup>
import UsesDefaultExport from './components/UsesDefaultExport.vue';
import UsesNamedExport from './components/UsesNamedExport.vue';
import UsesSrcExport from './components/UsesSrcExport.vue';
</script>

<template>
  <div>
    <p>The following should be Keen UI buttons styled with our custom colors (purple and pink) if Sass customization is working:</p>
    <br />
    <UsesDefaultExport />
    <br />
    <UsesNamedExport />
    <br />
    <UsesSrcExport />
  </div>
</template>
