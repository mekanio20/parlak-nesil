<template>
    <div class="relative min-h-screen" :class="[getMode ? 'bg-black' : 'bg-white']">
        <Navbar link="Projects" />
        <!-- top, right -->
        <img src="/icons/project-bg.png" class="w-full h-full absolute z-10 top-0 right-0">

        <div class="px-10 relative z-20">
            <div class="flex items-center justify-center pt-60 pb-40">
                <div class="flex items-end">
                    <h1 class="xl:text-7xl lg:text-6xl md:text-5xl text-4xl text-center font-jetBrains leading-tight"
                        :class="[getMode ? 'text-white' : 'text-m_blue-100']">
                        Projects
                    </h1>
                    <div class="mb-2 ml-2">
                        <div class="rounded-full lg:w-3 lg:h-3 w-2 h-2 bg-m_orange-100 animate__animated animate__bounce">
                        </div>
                    </div>
                </div>
            </div>
            <div class="lg:columns-3 sm:columns-2 columns-1 gap-4 pb-20">
                <div v-for="(item, index) in projects" :key="index" class="w-full mb-4 overflow-hidden">
                    <router-link :to="`/project/${item.id}`">
                        <img :src="item.img" class="w-full object-cover mb-3" />
                        <h3 class="font-semibold font-rajdhani lg:text-2xl sm:text-xl text-lg"
                            :class="[getMode ? 'text-white' : 'text-m_blue-100']">
                            {{ item.name }}
                        </h3>
                        <p class="font-normal font-inter text-m_orange-100 sm:text-lg text-base">{{ item.cat }}</p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { mapGetters } from 'vuex';
export default {
    name: "Project",
    data() {
        return {
            projects: [
                { id: 1, img: '/imgs/project-1.png', name: 'Freyja project', cat: 'Website' },
                { id: 2, img: '/imgs/project-2.png', name: 'Freyja project', cat: 'Website' },
                { id: 3, img: '/imgs/project-3.png', name: 'Freyja project', cat: 'Website' },
                { id: 4, img: '/imgs/project-4.png', name: 'Freyja project', cat: 'Website' },
                { id: 5, img: '/imgs/project-5.png', name: 'Freyja project', cat: 'Website' },
                { id: 6, img: '/imgs/project-1.png', name: 'Freyja project', cat: 'Website' },
                { id: 7, img: '/imgs/project-1.png', name: 'Freyja project', cat: 'Website' },
                { id: 8, img: '/imgs/project-3.png', name: 'Freyja project', cat: 'Website' },
                { id: 9, img: '/imgs/project-2.png', name: 'Freyja project', cat: 'Website' },
            ]
        }
    },
    components: {
        Navbar,
    },
    computed: {
        ...mapGetters(['getMode']),
    },
}
</script>