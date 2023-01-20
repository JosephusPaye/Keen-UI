<script setup>
import UsesDefaultExport from './components/UsesDefaultExport.vue';
// import UsesLibExport from './components/UsesLibExport.vue';
import UsesNamedExport from './components/UsesNamedExport.vue';
// import UsesSrcExport from './components/UsesSrcExport.vue';
</script>

<template>
  <div>
    <p style="color: #fff">The following should be styled Keen UI button components if this is working:</p>
    <br />
    <UsesDefaultExport />
    <!-- <br /> -->
    <!-- <UsesLibExport /> -->
    <br />
    <UsesNamedExport />
    <!-- <br /> -->
    <!-- <UsesSrcExport /> -->
  </div>
</template>
