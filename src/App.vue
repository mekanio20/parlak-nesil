<template>
  <div class="!w-full !h-full">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { RouterView } from 'vue-router'
export default {
  name: "App",
  components: {
    RouterView
  },
  computed: {
    ...mapGetters(['getMode']),
  },
}
</script>