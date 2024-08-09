<template>
  <div class="!w-full !h-full">
    <router-view></router-view>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "App",
  components: {
    RouterView
  },
  mounted() {
    this.updateBodyStyles(this.getMode)
  },
  methods: {
    ...mapActions(['changeMode']),
    updateBodyStyles(isDarkMode) {
      document.documentElement.style.backgroundColor = isDarkMode ? "#000" : "#fff"
      document.body.style.backgroundColor = isDarkMode ? "#000" : "#fff"
      document.body.style.color = isDarkMode ? "#fff" : "#000"
    }
  },
  computed: {
    ...mapGetters(['getMode']),
  },
  watch: {
    getMode(newValue) {
      this.updateBodyStyles(newValue)
    }
  }
}
</script>