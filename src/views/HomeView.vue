<template>
    <div id="top" class="relative min-h-screen" :class="[getMode ? 'bg-black' : 'bg-white']">
        <Navbar link="Home" />
        <Background />
        <div class="absolute top-0 left-0 right-0">
            <div class="lg:h-screen h-[70vh] relative z-20">
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-fit sm:w-[420px] w-[370px] px-6">
                    <div class="flex items-end space-x-2 xl:w-[750px] lg:w-[600px] md:w-[500px]">
                        <h1 class="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center !leading-normal font-jetBrains select-none animate__animated animate__fadeIn"
                            :class="[getMode ? 'text-white' : 'text-m_blue-100']">
                            Let Us Make Your Vision a Reality
                        </h1>
                        <div class="md:mb-6 mb-4">
                            <div class="rounded-full lg:w-3 lg:h-3 w-2 h-2 bg-m_orange-100 animate__animated animate__bounce"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full tv:min-h-[2400px] relative z-20 custom-shadow" :class="[getMode ? 'bg-black' : 'bg-white']">
                <div class="w-full h-fit absolute -z-10">
                    <SvgAnimation />
                </div>
                <div class="w-full h-full container flex items-center justify-center xl:pt-72 xl:pb-60 lg:pt-60 lg:pb-52 py-20">
                    <div class="flex items-end">
                        <h1 class="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center font-jetBrains leading-tight"
                            :class="[getMode ? 'text-white' : 'text-m_blue-100']" v-scroll-reveal="{ origin: 'top', distance: '50px', duration: 1000 }">
                            What We Do
                        </h1>
                        <div class="mb-2 ml-2">
                            <div class="rounded-full lg:w-3 lg:h-3 w-2 h-2 bg-m_orange-100 animate__animated animate__bounce"></div>
                        </div>
                    </div>
                </div>
                <div class="sm:container px-4 flex items-center justify-center flex-wrap overflow-hidden">
                    <div class="flex items-center flex-col sm:px-12 px-8 sm:py-10 py-6 lg:mr-6 mr-8 mb-8 sm:space-y-8 space-y-4 sm:w-96 w-80 lg:h-80 rounded-tl-3xl rounded-br-3xl relative"
                        :class="[getMode ? 'bg-m_amber-100' : 'bg-gray-100']" v-for="item in items" :key="item.id" v-scroll-reveal="{ origin: item.animate, distance: '50px', duration: 1000 }">
                        <img class="sm:w-14 w-12 object-cover" :src="item.icon">
                        <h3 class="font-rajdhani font-medium px-6 text-center lg:text-xl text-lg text-m_blue-100 z-10"
                            :class="[getMode ? 'text-white' : 'text-m_blue-100']">{{ item.title }}</h3>
                        <p class="font-inter font-normal text-center lg:text-base text-sm z-10"
                            :class="[getMode ? 'text-white' : 'text-m_gray-200']">{{ item.subtitle }}</p>
                        <div class="absolute left-0 bottom-0 overflow-hidden">
                            <img v-if="!getMode" src="/svg/blog-icon.svg">
                            <img v-else="getMode" src="/svg/blog-bg.svg">
                        </div>
                    </div>
                </div>
                <div class="mt-20">
                    <Footer />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Background from '@/components/Background.vue';
import SvgAnimation from '@/components/SvgAnimation.vue';
import Footer from '@/components/Footer.vue';
import { mapGetters } from 'vuex';
export default {
    name: "Home",
    components: {
        Navbar,
        Background,
        SvgAnimation,
        Footer
    },
    data() {
        return {
            items: [
                { id: 1, icon: '/svg/cpu.svg', title: 'Full range of hardware solutions', subtitle: 'Servers / Networking equipment / Computers', animate: 'left' },
                { id: 2, icon: '/svg/komp.svg', title: 'Development of websites of any complexity', subtitle: 'Business card sites / E-commerce / LMS / CRM', animate: 'top' },
                { id: 3, icon: '/svg/phone.svg', title: 'Mobile application development', subtitle: 'Android & IOS', animate: 'right' },
                { id: 4, icon: '/svg/pen.svg', title: 'UI / UX design of applications', subtitle: 'Websites and mobile applications', animate: 'left' },
                { id: 5, icon: '/svg/mobile.svg', title: 'Motion design', subtitle: 'Motion Graphics / Logo Animation / UI/UX Animation / 3D Animation', animate: 'right' },
            ]
        }
    },
    computed: {
        ...mapGetters(['getMode']),
    }
}
</script>

<style>
.custom-shadow {
    box-shadow: 0 -50px 40px 5px #000;
}
</style>