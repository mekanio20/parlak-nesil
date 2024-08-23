<template>
    <div class="relative min-h-screen overflow-hidden" :class="[getMode ? 'bg-black' : 'bg-white']">
        <Navbar link="About us" />

        <!-- bg icon -->
        <img src="/svg/about-us-bg-1.svg" class="w-full h-full object-cover absolute top-0 left-0 right-0 z-10">
        <!-- Parlak nesil icon -->
        <img v-if="getMode" src="/icons/parlak-nesil-1.webp" class="absolute top-52 right-0 z-10">
        <img v-if="!getMode" src="/icons/parlak-nesil-2.webp" class="absolute top-52 right-0 z-10">
        <!-- shadow-1 -->
        <img src="/svg/shadow.svg" class="absolute top-0 z-10">
        <!-- shadow-2 -->
        <img src="/svg/shadow.svg" class="absolute top-[1300px] -left-[600px] z-10">
        <!-- shadow-3 -->
        <img src="/svg/shadow.svg" class="absolute top-[2000px] -right-[700px] z-10">
        <!-- shadow-4 -->
        <img src="/svg/shadow.svg" class="absolute top-[3500px] -right-[700px] z-10">
        <!-- shadow-5 -->
        <img src="/svg/shadow.svg" class="absolute -bottom-[500px] -left-[600px] z-10">

        <div class="container sm:py-56 pt-52 relative z-20">
            <div class="flex flex-col items-start space-y-6">
                <h3 class="font-rajdhani font-medium lg:text-2xl sm:text-xl text-lg text-m_orange-100 uppercase"
                    v-scroll-reveal="{ origin: 'left', distance: '50px', duration: 1000 }">About us</h3>
                <h2 class="font-rajdhani xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-bold stroke-text uppercase"
                    :class="[getMode ? 'stroke-text' : 'stroke-text-black']"
                    v-scroll-reveal="{ origin: 'left', distance: '50px', duration: 1000 }">
                    We make your
                </h2>
                <div class="flex items-end">
                    <h1 class="font-rajdhani font-bold xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl uppercase"
                        :class="[getMode ? 'text-white' : 'text-m_blue-100']">
                        Vision a reality
                    </h1>
                    <div class="rounded-full w-3 h-3 mb-4 bg-m_orange-100 animate__animated animate__bounce"></div>
                </div>
                <p class="font-inter font-normal lg:text-lg sm:text-base text-sm text-m_gray-300 md:w-1/2 w-full"
                    v-scroll-reveal="{ origin: 'bottom', distance: '50px', duration: 1000 }">
                    Parlak Nesil is a full-spectrum IT powerhouse. We excel in crafting end-to-end solutions that span
                    hardware, software, frontend, backend, and mobile development. Our passion lies in fusing
                    cutting-edge technology with stunning UI/UX design to create digital experiences that resonate. We
                    turn your vision into reality by developing bespoke IT strategies, ensuring that every detail is
                    perfectly aligned with your goals.
                </p>
            </div>
            <div class="pt-20 flex flex-col items-center justify-center"
                v-scroll-reveal="{ origin: 'bottom', distance: '50px', duration: 1000 }">
                <img src="/svg/parlak-nesil.svg" class="object-cover lg:w-52 sm:w-40 w-32">
            </div>

            <div class="flex flex-col items-center">
                <h4 class="sm:my-28 my-16 font-rajdhani font-semibold lg:text-4xl md:text-3xl text-2xl uppercase"
                    :class="[getMode ? 'text-white' : 'text-black']"
                    v-scroll-reveal="{ origin: 'bottom', distance: '50px', duration: 1000 }">Our team</h4>
                <div class="w-full flex flex-col" v-for="(item, index) in teams" :key="item.id">
                    <div class="w-full flex flex-row items-start justify-between border-m_gray-500 border-t px-4 py-4 overflow-hidden"
                        :class="activeIndex === index ? 'duration-500 h-fit' : 'duration-500 phone:h-52'">
                        <div class="!leading-none font-rajdhani font-medium lg:text-[350px] md:text-[300px] sm:text-[200px] text-[150px]"
                            :class="[getMode ? 'text-white' : 'text-m_blue-100']"
                            v-scroll-reveal="{ origin: 'left', distance: '50px', duration: 1000 }">0{{ item.id }}</div>
                        <div class="phone:flex hidden flex-col space-y-4 mt-3 mx-4 sm:w-[450px] w-[350px] duration-500"
                            :class="activeIndex === index ? 'pt-10' : 'pt-24'"
                            v-scroll-reveal="{ origin: 'top', distance: '50px', duration: 1000 }">
                            <h3 class="font-rajdhani font-semibold lg:text-4xl md:text-3xl text-2xl uppercase sm:mb-8 mb-10"
                                :class="[getMode ? 'text-white' : 'text-m_blue-100']">{{ item.name }}</h3>
                            <p class="font-inter font-normal lg:text-lg sm:text-base text-sm text-m_gray-300">
                                {{ item.desc }}
                            </p>
                        </div>
                        <div class="mt-10" v-scroll-reveal="{ origin: 'right', distance: '50px', duration: 1000 }">
                            <button
                                class="rounded-full phone:flex hidden items-center justify-center md:px-6 md:py-4 px-4 py-2 border-m_gray-500 border"
                                @click="toggleAccordion(index)">
                                <span class="text-xl text-m_gray-500">{{ activeIndex === index ? '-' : '+' }}</span>
                            </button>
                        </div>
                    </div>
                    <div class="phone:hidden flex flex-col space-y-4 mt-3 mx-4 sm:w-[450px] w-[350px] duration-500"
                        v-scroll-reveal="{ origin: 'top', distance: '50px', duration: 1000 }">
                        <h3 class="font-rajdhani font-semibold lg:text-4xl md:text-3xl text-2xl uppercase mb-8"
                            :class="[getMode ? 'text-white' : 'text-m_blue-100']">{{ item.name }}</h3>
                        <p class="font-inter font-normal lg:text-lg sm:text-base text-sm text-m_gray-300 pb-10">
                            {{ item.desc }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- <div class="mt-20 sm:flex hidden items-center space-x-6">
                <div class="flex-1">
                    <img class="object-cover" v-lazy="'/imgs/team-1.webp'" lazy="loading"
                        v-scroll-reveal="{ origin: 'left', distance: '100px', duration: 1000 }">
                </div>
                <div class="flex-1 flex flex-col space-y-6">
                    <img class="object-cover" v-lazy="'/imgs/team-2.webp'" lazy="loading"
                        v-scroll-reveal="{ origin: 'right', distance: '50px', duration: 1000 }">
                    <img class="object-cover" v-lazy="'/imgs/team-3.webp'" lazy="loading"
                        v-scroll-reveal="{ origin: 'right', distance: '50px', duration: 1000 }">
                </div>
            </div>

            <div class="mt-20 sm:hidden flex flex-col items-center space-y-10">
                <img class="object-cover" v-lazy="'/imgs/team-1.webp'" lazy="loading"
                    v-scroll-reveal="{ origin: 'left', distance: '100px', duration: 1000 }">
                <img class="object-cover" v-lazy="'/imgs/team-2.webp'" lazy="loading"
                    v-scroll-reveal="{ origin: 'right', distance: '50px', duration: 1000 }">
                <img class="object-cover" v-lazy="'/imgs/team-3.webp'" lazy="loading"
                    v-scroll-reveal="{ origin: 'right', distance: '50px', duration: 1000 }">
            </div> -->
        </div>
        <div class="mt-20">
            <Footer />
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { mapGetters } from 'vuex';
import Footer from '@/components/Footer.vue';
export default {
    name: "About",
    data() {
        return {
            activeIndex: 0,
            teams: [
                { id: 1, name: 'Hardware', desc: 'We handle everything related to hardware, from system design and component sourcing to assembly and testing. Our expertise includes circuit board design, prototyping, hardware integration, and ensuring compatibility with various software and networking environments. Whether it\'s building custom hardware solutions or optimizing existing systems, we cover it all.' },
                { id: 2, name: 'Mobile development', desc: 'At Parlak Nesil, we specialize in creating high-quality mobile applications for both iOS and Android platforms, as well as tablet devices. Our team handles every aspect of mobile development, from concept to deployment, ensuring your app is robust, scalable, and user-friendly. Whether you need a native, cross-platform, or hybrid mobile application, we leverage the latest technologies and best practices to deliver a seamless and engaging user experience across all devices. Let us help you bring your mobile app idea to life, transforming your vision into a reality that drives business growth and customer engagement.' },
                { id: 3, name: 'Front-end developer', desc: 'Our frontend development services focus on creating visually stunning and highly interactive user interfaces. We specialize in building responsive and intuitive designs that provide a seamless experience across all devices. Using the latest frameworks and technologies, we ensure that your application not only looks great but also performs flawlessly. From wireframes and mockups to full-scale development, we bring your vision to life with precision. Our team prioritizes user experience, accessibility, and performance, ensuring that your frontend is as functional as it is beautiful.' },
                { id: 4, name: 'Back-end developer', desc: 'At our company, we specialize in all aspects of backend development. We design and build robust server-side applications that power the functionality of web and mobile apps. Our team handles everything from server management and database design to API development and integration. By leveraging the latest technologies and best practices, we ensure that our backend solutions are efficient, scalable, and secure.' },
            ]
        }
    },
    components: {
        Navbar,
        Footer
    },
    methods: {
        toggleAccordion(index) {
            this.activeIndex = this.activeIndex === index ? null : index;
        },
    },
    computed: {
        ...mapGetters(['getMode']),
    },
}
</script>