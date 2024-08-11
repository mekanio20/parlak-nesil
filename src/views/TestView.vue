<template>
  <div class="container mx-auto p-4">
    <h1 class="text-center text-3xl font-bold mb-6">Our Team</h1>
    <div v-for="(item, index) in items" :key="index" class="border-b">
      <div
        class="flex justify-between items-center py-4 cursor-pointer"
        @click="toggle(index)"
      >
        <div class="text-6xl font-bold">{{ index + 1 }}</div>
        <div class="flex-1 text-xl font-semibold">{{ item.title }}</div>
        <div class="text-2xl">{{ activeIndex === index ? '-' : '+' }}</div>
      </div>
      <div v-if="activeIndex === index" class="pb-4">
        <p class="text-gray-600">{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: null,
      items: [
        {
          title: "HARDWARE",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },
        {
          title: "NETWORKING",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },
        {
          title: "FRONT-END DEVELOPER",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },
        {
          title: "BACK-END DEVELOPER",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },
      ],
    };
  },
  methods: {
    toggle(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
