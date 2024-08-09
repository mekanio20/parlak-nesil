<template>
    <div class="relative min-h-screen" :class="[getMode ? 'bg-black' : 'bg-white']">
        <Navbar link="Home" />
        <Background />
        <div class="h-screen relative z-20">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div class="flex items-end space-x-2">
                    <h1 class="text-7xl text-center font-jetBrains leading-tight animate__animated animate__fadeIn"
                        :class="[getMode ? 'text-white' : 'text-m_blue-100']">
                        Let Us Make Your Vision a Reality
                    </h1>
                    <div class="rounded-full w-6 h-3 mb-4 bg-m_orange-100 animate__animated animate__bounce"
                        v-show="vote"></div>
                </div>
            </div>
        </div>
        <div class="relative z-20" :class="[getMode ? 'bg-black' : 'bg-white']">
            <img class="w-full h-full absolute -z-10" src="/icons/line.png">
            <div class="w-full flex items-center justify-center pt-72 pb-60">
                <div class="flex items-end">
                    <h1 class="text-7xl text-center font-jetBrains leading-tight"
                        :class="[getMode ? 'text-white' : 'text-m_blue-100']">
                        What We Do
                    </h1>
                    <div class="rounded-full w-3 h-3 mb-4 bg-m_orange-100 animate__animated animate__bounce"></div>
                </div>
            </div>
            <div class="flex items-center justify-center flex-wrap">
                <div class="flex items-center flex-col px-12 py-10 mr-10 mb-10 space-y-8 w-96 h-80 rounded-tl-3xl rounded-br-3xl relative"
                    :class="[getMode ? 'bg-m_amber-100' : 'bg-gray-100']" v-for="item in items" :key="item.id">
                    <img :src="item.icon">
                    <h3 class="font-rajdhani font-medium px-6 text-center text-xl text-m_blue-100 z-10"
                        :class="[getMode ? 'text-white' : 'text-m_blue-100']">{{ item.title }}</h3>
                    <p class="font-inter font-normal text-center text-base z-10"
                        :class="[getMode ? 'text-white' : 'text-m_gray-200']">{{ item.subtitle }}</p>
                    <div class="absolute left-0 bottom-0 overflow-hidden">
                        <img v-if="!getMode" src="/icons/blog-icon.png">
                        <img v-else="getMode" src="/svg/blog-bg.svg">
                    </div>
                </div>
            </div>
        </div>
        <div class="fixed right-10 bottom-10 z-50 cursor-pointer" @click="changeMode">
            <img class="w-16" src="/icons/mode.png">
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
    mounted() {
        setTimeout(() => {
            this.vote = true
        }, 500)
    },
    data() {
        return {
            vote: false,
            items: [
                { id: 1, icon: '/icons/komp.png', title: 'Development of websites of any complexity', subtitle: 'Business card sites / E-commerce / LMS / CRM' },
                { id: 2, icon: '/icons/phone.png', title: 'Mobile application development', subtitle: 'Android & IOS' },
                { id: 3, icon: '/icons/pen.png', title: 'UI / UX design of applications', subtitle: 'Websites and mobile applications' },
                { id: 4, icon: '/icons/cpu.png', title: 'Full range of hardware solutions', subtitle: 'Servers / Networking equipment / Computers' },
                { id: 5, icon: '/icons/phone.png', title: 'Mobile application development', subtitle: 'Android & IOS' },
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