<template>
  <div class="!w-full !h-full">
    <Loader :loading="loading" />
    <router-view></router-view>
  </div>
</template>

<script>
import { RouterView, useRouter } from 'vue-router'
import { mapGetters, mapActions } from 'vuex';
import Loader from '@/components/Loader.vue';
export default {
  name: "App",
  components: {
    RouterView,
    Loader
  },
  data() {
    return {
      loading: false
    }
  },
  created() {
    this.updateBodyStyles(this.getMode)
    const router = useRouter()

    router.beforeEach((to, from, next) => {
      this.loading = true
      next()
    })

    router.afterEach(() => {
      this.loading = false
    })
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