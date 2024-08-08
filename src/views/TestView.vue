<template>
  <div class="min-h-screen bg-black text-white flex flex-col items-center justify-center">
    <div v-for="(item, index) in items" :key="index" class="w-full max-w-4xl mb-4">
      <div
        @click="toggleExpand(index)"
        class="flex flex-col p-4 border border-gray-700 cursor-pointer"
      >
        <div class="flex justify-between items-start">
          <div class="text-[350px] leading-none">{{ String(index + 1).padStart(2, '0') }}</div>
          <div class="flex-1 ml-4">
            <h2 class="text-xl font-bold">{{ item.title }}</h2>
            <transition name="expand">
              <p v-show="item.expanded" class="mt-2">{{ item.description }}</p>
            </transition>
          </div>
          <button class="ml-4 text-2xl focus:outline-none">
            {{ item.expanded ? '-' : '+' }}
          </button>
        </div>
        <transition name="half-expand">
          <div v-show="!item.expanded" class="overflow-hidden mt-2">
            <p class="text-clip max-h-12">{{ item.description }}</p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const items = ref([
      {
        title: 'Hardware',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat necessitatibus ...',
        expanded: false,
      },
      {
        title: 'Networking',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat necessitatibus ...',
        expanded: false,
      },
      {
        title: 'Front-End Developer',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat necessitatibus ...',
        expanded: false,
      },
      {
        title: 'Back-End Developer',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat necessitatibus ...',
        expanded: false,
      },
    ]);

    const toggleExpand = (index) => {
      items.value.forEach((item, i) => {
        if (i === index) {
          item.expanded = !item.expanded;
        } else {
          item.expanded = false;
        }
      });
    };

    return {
      items,
      toggleExpand,
    };
  },
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.expand-enter-active,
.expand-leave-active,
.half-expand-enter-active,
.half-expand-leave-active {
  transition: max-height 0.4s ease;
}
.expand-enter-from,
.expand-leave-to,
.half-expand-enter-from,
.half-expand-leave-to {
  max-height: 0;
}
.expand-enter-to,
.expand-leave-from {
  max-height: 500px; /* Adjust based on your content's height */
}
.half-expand-enter-to,
.half-expand-leave-from {
  max-height: 48px; /* Adjust to half of your content's height */
}
</style>
