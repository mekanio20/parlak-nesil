<template>
    <div class="relative min-h-screen">
        <Navbar link="Projects" />
        <!-- top, right -->
        <img src="/svg/project-bg.svg" class="w-full h-full absolute z-10 top-0 right-0">

        <div class="container relative z-20">
            <div class="flex items-center justify-center sm:pt-60 pt-40 sm:pb-40 pb-20">
                <div class="flex items-end">
                    <h1 class="xl:text-7xl lg:text-6xl md:text-5xl text-4xl text-center font-jetBrains leading-tight">
                        {{ $t('nav.title5') }}
                    </h1>
                    <div class="mb-2 ml-2">
                        <div
                            class="rounded-full lg:w-3 lg:h-3 w-2 h-2 bg-m_orange-100 animate__animated animate__bounce">
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 pb-20">
                <div v-for="(item, index) in all_projects" :key="index"
                    v-scroll-reveal="{ origin: 'top', distance: '100px', duration: 1000 }"
                    class="w-full mb-10 overflow-hidden">
                    <router-link :to="`/project/${item.id}`">
                        <img class="w-full object-cover mb-3 rounded-md" :src="item.main_image" />
                        <h3 class="font-semibold font-rajdhani lg:text-2xl sm:text-xl text-lg">
                            {{ item.title }}
                        </h3>
                        <p class="font-normal font-inter text-m_orange-100 sm:text-lg text-base">{{ item.technologies }}</p>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="mt-20 relative z-50">
            <Footer />
        </div>
    </div>
</template>

<script>
import api from '@/api';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { projects } from '@/data/index';
export default {
    name: "Project",
    async created() {
        const { data } = await api.get('/projects/');
        this.all_projects = data
    },
    data() {
        return {
            all_projects: null
        }
    },
    components: {
        Navbar,
        Footer
    }
}
</script>