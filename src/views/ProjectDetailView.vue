<template>
    <div class="relative min-h-screen overflow-hidden" :class="[getMode ? 'bg-black' : 'bg-white']">
        <Navbar link="Project" />
        <div class="container py-40 relative z-20">
            <div class="flex lg:flex-row flex-col items-center">
                <div class="flex-1 flex flex-col space-y-6">
                    <img class="w-full lg:h-[450px] object-cover" v-lazy="`/imgs/project-6.webp`">
                    <div class="grid grid-cols-3 gap-x-6">
                        <img class="w-[250px] h-[240px] object-cover" v-lazy="`/imgs/project-1.webp`">
                        <img class="w-[250px] h-[240px] object-cover" v-lazy="`/imgs/project-2.webp`">
                        <img class="w-[250px] h-[240px] object-cover" v-lazy="`/imgs/project-3.webp`">
                    </div>
                </div>
                <div class="lg:flex-1 w-full flex phone:flex-row flex-col lg:ml-10 lg:mt-0 mt-10 phone:space-x-10">
                    <div class="phone:w-3/4 w-full flex flex-col space-y-20">
                        <div class="flex flex-col">
                            <p class="font-rajdhani font-medium xl:text-xl lg:text-lg text-base text-m_orange-100 mb-4">
                                Logo Design</p>
                            <h2 class="font-rajdhani font-medium xl:text-6xl lg:text-5xl md:text-4xl text-3xl"
                                :class="[getMode ? 'text-white' : 'text-black']">Freyja project</h2>
                        </div>
                        <div class="flex flex-col space-y-2">
                            <h4 class="font-inter font-normal lg:text-base md:text-sm text-xs text-m_gray-800">Fonts
                            </h4>
                            <h2 class="font-bodoni font-normal text-3xl"
                                :class="[getMode ? 'text-white' : 'text-black']">Bodoni</h2>
                            <p class="font-bodoni font-normal lg:text-base md:text-sm text-xs text-m_gray-900">
                                ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                            <p class="font-bodoni font-normal lg:text-base md:text-sm text-xs text-m_gray-900">
                                0123456789</p>
                        </div>
                        <div class="flex flex-col space-y-2">
                            <h2 class="font-inter font-normal lg:text-base md:text-sm text-xs"
                                :class="[getMode ? 'text-m_gray-800' : 'text-black']">Colors</h2>
                            <div class="flex items-center space-x-4">
                                <div class="flex flex-col space-y-2" v-for="item in colors" :key="item">
                                    <div :style="{ backgroundColor: `#${item}` }"
                                        class="md:w-16 md:h-16 w-10 h-10 rounded-full"></div>
                                    <p class="font-rajdhani font-medium lg:text-lg sm:text-base text-sm"
                                        :class="[getMode ? 'text-white' : 'text-black']">{{ item }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col space-y-2">
                            <h2 class="font-inter font-normal lg:text-base md:text-sm text-xs"
                                :class="[getMode ? 'text-m_gray-800' : 'text-black']">Tools</h2>
                            <div class="flex items-center space-x-4">
                                <div class="flex flex-col space-y-2" v-for="item in tools" :key="item">
                                    <div class="md:w-20 md:h-20 w-10 h-10">
                                        <img class="w-full h-full object-contain" v-lazy="item" lazy="loading">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="phone:w-1/2 w-full flex flex-col justify-end phone:space-y-40 phone:mt-0 mt-20 space-y-10">
                        <div class="flex flex-col space-y-4">
                            <h3 class="font-inter font-normal lg:text-base md:text-sm text-xs"
                                :class="[getMode ? 'text-m_gray-800' : 'text-black']">Country</h3>
                            <p class="font-rajdhani font-sembolid lg:text-2xl sm:text-xl text-lg"
                                :class="[getMode ? 'text-white' : 'text-black']">Germany</p>
                        </div>
                        <div class="flex flex-col space-y-4">
                            <h3 class="font-inter font-normal lg:text-base md:text-sm text-xs"
                                :class="[getMode ? 'text-m_gray-800' : 'text-black']">Client</h3>
                            <p class="font-rajdhani font-sembolid lg:text-2xl sm:text-xl text-lg"
                                :class="[getMode ? 'text-white' : 'text-black']">“Freyja” clothes shop</p>
                        </div>
                        <div class="flex flex-col space-y-8">
                            <h3 class="font-inter font-normal lg:text-base md:text-sm text-xs"
                                :class="[getMode ? 'text-m_gray-800' : 'text-black']">Details</h3>
                            <div class="w-fit">
                                <router-link to="/contact"
                                    class="px-8 py-3 bg-m_orange-100 rounded-full text-white font-medium text-nowrap font-rajdhani lg:text-lg sm:text-base text-sm hover:opacity-80 duration-500">Go
                                    to website</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-20">
            <Footer />
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { mapGetters } from 'vuex';
export default {
    name: "ProjectDetail",
    data() {
        return {
            colors: ['F48A73', '68433A', 'FFDAD1', '5B703E'],
            tools: ['/icons/figma.webp', '/icons/photoshop.webp', '/icons/illustrator.webp']
        }
    },
    components: {
        Navbar,
        Footer
    },
    computed: {
        ...mapGetters(['getMode']),
    },
}
</script>