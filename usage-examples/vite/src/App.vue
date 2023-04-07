<script setup>
import UsesDefaultExport from './components/UsesDefaultExport.vue';
import UsesNamedExport from './components/UsesNamedExport.vue';
import UsesSrcExport from './components/UsesSrcExport.vue';
import UsesLibExport from './components/UsesLibExport.vue';
</script>

<template>
  <div>
    <p>The following should be styled Keen UI buttons if the imports are working:</p>
    <br />
    <UsesDefaultExport />
    <br />
    <UsesNamedExport />
    <br />
    <UsesSrcExport />
    <br />
    <UsesLibExport />
  </div>
</template>
