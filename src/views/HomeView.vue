<template>
    <div class="relative min-h-screen" :class="[getMode ? 'bg-black' : 'bg-white']">
        <Navbar link="Home" />
        <Background />
        <div class="lg:h-screen h-[70vh] relative z-20">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-fit sm:w-2/3 w-full px-6">
                <div class="flex items-end space-x-2 xl:w-[750px] lg:w-[600px] md:w-[500px]">
                    <h1 class="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center !leading-normal font-jetBrains animate__animated animate__fadeIn"
                        :class="[getMode ? 'text-white' : 'text-m_blue-100']">
                        Let Us Make Your Vision a Reality
                    </h1>
                    <div class="md:mb-6 mb-4">
                        <div class="rounded-full lg:w-3 lg:h-3 w-2 h-2 bg-m_orange-100 animate__animated animate__bounce"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative z-20" :class="[getMode ? 'bg-black' : 'bg-white']">
            <img class="lw-full h-full xl:object-cover object-contain xl:top-0 lg:-top-[280px] absolute -z-10" src="/icons/line.png">
            <div class="w-full flex items-center justify-center xl:pt-72 xl:pb-60 lg:pt-60 lg:pb-52 py-20">
                <div class="flex items-end">
                    <h1 class="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center font-jetBrains leading-tight"
                        :class="[getMode ? 'text-white' : 'text-m_blue-100']">
                        What We Do
                    </h1>
                    <div class="mb-2 ml-2">
                        <div class="rounded-full lg:w-3 lg:h-3 w-2 h-2 bg-m_orange-100 animate__animated animate__bounce"></div>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-center flex-wrap">
                <div class="flex items-center flex-col px-12 py-10 mr-10 mb-10 space-y-8 w-96 h-80 rounded-tl-3xl rounded-br-3xl relative"
                    :class="[getMode ? 'bg-m_amber-100' : 'bg-gray-100']" v-for="item in items" :key="item.id">
                    <img class="sm:w-14 w-12 object-cover" :src="item.icon">
                    <h3 class="font-rajdhani font-medium px-6 text-center lg:text-xl text-lg text-m_blue-100 z-10"
                        :class="[getMode ? 'text-white' : 'text-m_blue-100']">{{ item.title }}</h3>
                    <p class="font-inter font-normal text-center lg:text-base text-sm z-10"
                        :class="[getMode ? 'text-white' : 'text-m_gray-200']">{{ item.subtitle }}</p>
                    <div class="absolute left-0 bottom-0 overflow-hidden">
                        <img v-if="!getMode" src="/icons/blog-icon.png">
                        <img v-else="getMode" src="/svg/blog-bg.svg">
                    </div>
                </div>
            </div>
        </div>
        <div class="fixed lg:right-10 right-4 bottom-10 z-50 cursor-pointer" @click="changeMode">
            <img class="lg:w-16 w-14" src="/icons/mode.png">
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Background from '@/components/Background.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "Home",
    components: {
        Navbar,
        Background,
    },
    data() {
        return {
            items: [
                { id: 4, icon: '/svg/cpu.svg', title: 'Full range of hardware solutions', subtitle: 'Servers / Networking equipment / Computers' },
                { id: 1, icon: '/svg/komp.svg', title: 'Development of websites of any complexity', subtitle: 'Business card sites / E-commerce / LMS / CRM' },
                { id: 2, icon: '/svg/phone.svg', title: 'Mobile application development', subtitle: 'Android & IOS' },
                { id: 3, icon: '/svg/pen.svg', title: 'UI / UX design of applications', subtitle: 'Websites and mobile applications' },
                { id: 5, icon: '/svg/phone.svg', title: 'Mobile application development', subtitle: 'Android & IOS' },
            ]
        }
    },
    methods: {
        ...mapActions(['changeMode']),
    },
    computed: {
        ...mapGetters(['getMode']),
    }
}
</script>

<style>
.animate__animated.animate__fadeIn {
    --animate-duration: 2s;
}
</style>