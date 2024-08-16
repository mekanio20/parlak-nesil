<template>
    <div class="relative min-h-screen overflow-hidden" :class="[getMode ? 'bg-black' : 'bg-white']">
        <Navbar link="About us" />

        <!-- bg icon -->
        <img src="/icons/about-us-bg-1.png" class="w-full h-full object-cover absolute top-0 left-0 right-0 z-10">
        <!-- Parlak nesil icon -->
        <img v-if="getMode" src="/icons/parlak-nesil-1.png" class="absolute top-52 right-0 z-10">
        <img v-if="!getMode" src="/icons/parlak-nesil-2.png" class="absolute top-52 right-0 z-10">
        <!-- shadow-1 -->
        <img src="/icons/shadow.png" class="absolute top-0 z-10">
        <!-- shadow-2 -->
        <img src="/icons/shadow.png" class="absolute top-[1300px] -left-[600px] z-10">
        <!-- shadow-3 -->
        <img src="/icons/shadow.png" class="absolute top-[2000px] -right-[700px] z-10">
        <!-- shadow-4 -->
        <img src="/icons/shadow.png" class="absolute top-[3500px] -right-[700px] z-10">
        <!-- shadow-5 -->
        <img src="/icons/shadow.png" class="absolute -bottom-[500px] -left-[600px] z-10">

        <div class="container py-56 relative z-20">
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
                <img src="/icons/parlak-nesil.png" class="object-cover lg:w-52 sm:w-40 w-32">
            </div>

            <div class="flex flex-col items-center">
                <h4 class="my-28 font-rajdhani font-semibold lg:text-4xl md:text-3xl text-2xl uppercase"
                    :class="[getMode ? 'text-white' : 'text-black']"
                    v-scroll-reveal="{ origin: 'bottom', distance: '50px', duration: 1000 }">Our team</h4>

                <div class="w-full flex flex-row items-start justify-between border-m_gray-500 border-t px-4 py-4 overflow-hidden"
                    v-for="(item, index) in teams" :key="item.id"
                    :class="activeIndex === index ? 'duration-500 h-fit' : 'duration-500 h-52'">
                    <div class="leading-none font-rajdhani font-medium lg:text-[350px] md:text-[300px] text-[200px]"
                        :class="[getMode ? 'text-white' : 'text-m_blue-100']"
                        v-scroll-reveal="{ origin: 'left', distance: '50px', duration: 1000 }">0{{ item.id }}</div>
                    <div class="flex flex-col space-y-4 mt-3 w-[450px] duration-500"
                        :class="activeIndex === index ? 'pt-10' : ' pt-24'"
                        v-scroll-reveal="{ origin: 'top', distance: '50px', duration: 1000 }">
                        <h3 class="font-rajdhani font-semibold lg:text-4xl md:text-3xl text-2xl uppercase mb-8"
                            :class="[getMode ? 'text-white' : 'text-m_blue-100']">{{ item.name }}</h3>
                        <p class="font-inter font-normal lg:text-lg sm:text-base text-sm text-m_gray-300">
                            {{ item.desc }}
                        </p>
                    </div>
                    <div class="mt-10" v-scroll-reveal="{ origin: 'right', distance: '50px', duration: 1000 }">
                        <button class="rounded-full flex items-center justify-center px-6 py-4 border-m_gray-500 border"
                            @click="toggleAccordion(index)">
                            <span class="text-xl text-m_gray-500">{{ activeIndex === index ? '-' : '+' }}</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="mt-20 flex items-center space-x-6">
                <div class="flex-1">
                    <img class="object-cover" v-lazy="'/imgs/team-1.png'" lazy="loading"
                        v-scroll-reveal="{ origin: 'left', distance: '100px', duration: 1000 }">
                </div>
                <div class="flex-1 flex flex-col space-y-6">
                    <img class="object-cover" v-lazy="'/imgs/team-2.png'" lazy="loading"
                        v-scroll-reveal="{ origin: 'right', distance: '50px', duration: 1000 }">
                    <img class="object-cover" v-lazy="'/imgs/team-3.png'" lazy="loading"
                        v-scroll-reveal="{ origin: 'right', distance: '50px', duration: 1000 }">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { mapGetters } from 'vuex';
export default {
    name: "About",
    data() {
        return {
            activeIndex: 0,
            teams: [
                { id: 1, name: 'Hardware', desc: 'We handle everything related to hardware, from system design and component sourcing to assembly and testing. Our expertise includes circuit board design, prototyping, hardware integration, and ensuring compatibility with various software and networking environments. Whether it\'s building custom hardware solutions or optimizing existing systems, we cover it all.' },
                { id: 2, name: 'Networking', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe consequuntur? Dolorum, explicabo tenetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe.' },
                { id: 3, name: 'Front-end developer', desc: 'Our frontend development services focus on creating visually stunning and highly interactive user interfaces. We specialize in building responsive and intuitive designs that provide a seamless experience across all devices. Using the latest frameworks and technologies, we ensure that your application not only looks great but also performs flawlessly. From wireframes and mockups to full-scale development, we bring your vision to life with precision. Our team prioritizes user experience, accessibility, and performance, ensuring that your frontend is as functional as it is beautiful.' },
                { id: 4, name: 'Back-end developer', desc: 'At our company, we specialize in all aspects of backend development. We design and build robust server-side applications that power the functionality of web and mobile apps. Our team handles everything from server management and database design to API development and integration. By leveraging the latest technologies and best practices, we ensure that our backend solutions are efficient, scalable, and secure.' },
            ]
        }
    },
    components: {
        Navbar
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