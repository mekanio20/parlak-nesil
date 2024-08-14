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
            <div class="lg:columns-3 sm:columns-2 columns-1 gap-8 pb-20">
                <div v-for="(item, index) in projects" :key="index" v-scroll-reveal="{ origin: 'top', distance: '100px', duration: 1000 }" class="w-full mb-10 overflow-hidden">
                    <router-link :to="`/project/${item.id}`">
                        <img class="w-full object-cover mb-3" v-lazy="item.img" lazy="loading" />
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
                { id: 1, img: '/imgs/project-1.webp', name: 'Broker', cat: 'Mobile application & UI/UX Design' },
                { id: 2, img: '/imgs/project-2.webp', name: 'Türkmen Çyragy', cat: 'Logo Design' },
                { id: 3, img: '/imgs/project-3.webp', name: '0 -> 100', cat: 'Website & Mobile application & UI/UX Design' },
                { id: 4, img: '/imgs/project-4.webp', name: 'Freyja', cat: 'Logo Design' },
                { id: 5, img: '/imgs/project-5.webp', name: 'FSociety', cat: 'UI/UX Design' },
                { id: 6, img: '/imgs/project-6.webp', name: 'Quickpick', cat: 'Mobile application & UI/UX Design' },
                { id: 7, img: '/imgs/project-7.webp', name: 'MIM', cat: 'Website & UI/UX Design' },
                { id: 8, img: '/imgs/project-8.webp', name: 'Ajaýyp Gurluşyk', cat: 'Website & UI/UX Design' },
                { id: 9, img: '/imgs/project-9.webp', name: 'Sagdyn Diýar', cat: 'Mobile application & UI/UX Design' },
                { id: 10, img: '/imgs/project-10.webp', name: 'Optowoy app', cat: 'Mobile application & UI/UX Design' },
                { id: 11, img: '/imgs/project-11.webp', name: 'Türkmen ojagy', cat: 'Logo Design' },
                { id: 12, img: '/imgs/project-12.webp', name: 'Baulord', cat: 'Website & UI/UX Design' },
                { id: 13, img: '/imgs/project-13.webp', name: 'Metall Market', cat: 'Website & UI/UX Design' },
                { id: 14, img: '/imgs/project-14.webp', name: 'Yoda', cat: 'UI/UX Design' },
                { id: 15, img: '/imgs/project-15.webp', name: 'Tanat', cat: 'Mobile application & UI/UX Design' },
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