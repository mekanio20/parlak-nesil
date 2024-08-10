<template>
    <div class="relative min-h-screen overflow-hidden" :class="[getMode ? 'bg-black' : 'bg-white']">
        <Navbar link="Project" />
        <div class="px-10 py-40 relative z-20">
            <div class="flex items-center">
                <div class="flex-1 flex flex-col space-y-6">
                    <img class="w-full object-cover" src="/imgs/project-6.png">
                    <div class="grid grid-cols-3 gap-x-6">
                        <img class="w-[250px] h-[240px] object-cover" src="/imgs/project-1.png">
                        <img class="w-[250px] h-[240px] object-cover" src="/imgs/project-2.png">
                        <img class="w-[250px] h-[240px] object-cover" src="/imgs/project-3.png">
                    </div>
                </div>
                <div class="flex-1 flex flex-row ml-10 space-x-10">
                    <div class="w-3/4 flex flex-col space-y-20">
                        <div class="flex flex-col">
                            <p class="font-rajdhani font-medium text-xl text-m_orange-100 mb-4">Logo Design</p>
                            <h2 class="font-rajdhani font-medium text-6xl" :class="[getMode ? 'text-white' : 'text-black']">Freyja project</h2>
                        </div>
                        <div class="flex flex-col space-y-2">
                            <h4 class="font-inter font-normal text-base text-m_gray-800">Fonts</h4>
                            <h2 class="font-bodoni font-normal text-3xl"
                                :class="[getMode ? 'text-white' : 'text-black']">Bodoni</h2>
                            <p class="font-bodoni font-normal text-base text-m_gray-900">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                            <p class="font-bodoni font-normal text-base text-m_gray-900">0123456789</p>
                        </div>
                        <div class="flex flex-col space-y-2">
                            <h2 class="font-inter font-normal text-base"
                                :class="[getMode ? 'text-m_gray-800' : 'text-black']">Colors</h2>
                            <div class="flex items-center space-x-4">
                                <div class="flex flex-col space-y-2" v-for="item in colors" :key="item">
                                    <div :style="{ backgroundColor: `#${item}` }" class="w-16 h-16 rounded-full"></div>
                                    <p class=" font-rajdhani font-medium text-lg"
                                        :class="[getMode ? 'text-white' : 'text-black']">{{ item }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col space-y-2">
                            <h2 class="font-inter font-normal text-base"
                                :class="[getMode ? 'text-m_gray-800' : 'text-black']">Tools</h2>
                            <div class="flex items-center space-x-4">
                                <div class="flex flex-col space-y-2" v-for="item in tools" :key="item">
                                    <div class="w-20 h-20">
                                        <img class="w-full h-full object-contain" :src="item">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2 flex flex-col justify-end space-y-40">
                        <div class="flex flex-col space-y-4">
                            <h3 class="font-inter font-normal text-base"
                                :class="[getMode ? 'text-m_gray-800' : 'text-black']">Country</h3>
                            <p class="font-rajdhani font-sembolid text-2xl"
                                :class="[getMode ? 'text-white' : 'text-black']">Germany</p>
                        </div>
                        <div class="flex flex-col space-y-4">
                            <h3 class="font-inter font-normal text-base"
                                :class="[getMode ? 'text-m_gray-800' : 'text-black']">Client</h3>
                            <p class="font-rajdhani font-sembolid text-2xl"
                                :class="[getMode ? 'text-white' : 'text-black']">“Freyja” clothes shop</p>
                        </div>
                        <div class="flex flex-col space-y-8">
                            <h3 class="font-inter font-normal text-base"
                                :class="[getMode ? 'text-m_gray-800' : 'text-black']">Details</h3>
                            <div class="w-fit">
                                <router-link to="/contact"
                                    class="px-8 py-3 bg-m_orange-100 rounded-full text-white font-medium text-nowrap font-rajdhani text-lg hover:opacity-80 duration-500">Go to website</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { mapGetters } from 'vuex';
export default {
    name: "ProjectDetail",
    data() {
        return {
            colors: ['F48A73', '68433A', 'FFDAD1', '5B703E'],
            tools: ['/icons/figma.png', '/icons/photoshop.png', '/icons/illustrator.png']
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