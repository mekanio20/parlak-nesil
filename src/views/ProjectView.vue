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
            <div class="lg:columns-3 sm:columns-2 columns-1 gap-8 pb-20">
                <div v-for="(item, index) in all_projects" :key="index"
                    v-scroll-reveal="{ origin: 'top', distance: '100px', duration: 1000 }"
                    class="w-full mb-10 overflow-hidden">
                    <router-link :to="`/project/${item.id}`">
                        <img class="w-full object-cover mb-3" :src="`/imgs/${item?.images[0]}`" />
                        <h3 class="font-semibold font-rajdhani lg:text-2xl sm:text-xl text-lg">
                            {{ item.name }}
                        </h3>
                        <p class="font-normal font-inter text-m_orange-100 sm:text-lg text-base">{{ item.cat }}</p>
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
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { projects } from '@/data/index';
export default {
    name: "Project",
    async created() {
        this.all_projects = projects[this.$i18n.locale]
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