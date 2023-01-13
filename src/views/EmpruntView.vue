<template>
  <ObjectTable />
</template>

<script lang="ts">
import ObjectTable from "../components/ObjectTable.vue";

export default {
  components: {
    ObjectTable,
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
