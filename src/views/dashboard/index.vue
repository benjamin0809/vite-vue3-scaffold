<template>
  <div>
    <HelloWorld ref="ddd" />
  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'
  import HelloWorld from '/@components/HelloWorld.vue'

  export default defineComponent({
    name: 'Dashboard',
    components: {
      HelloWorld,
    },
  })
</script>
