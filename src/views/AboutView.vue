<template>
    <div class="relative min-h-screen overflow-hidden">
        <Navbar link="About us" />

        <!-- bg icon -->
        <img src="/svg/about-us-bg-1.svg" class="w-full h-full object-cover absolute top-0 left-0 right-0 z-10">
        <!-- Parlak nesil icon -->
        <img src="/icons/parlak-nesil-1.webp" class="absolute top-52 right-0 z-10">
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
                    v-scroll-reveal="{ origin: 'left', distance: '50px', duration: 1000 }">{{ $t('nav.title2') }}</h3>
                <h2 class="font-rajdhani xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-bold stroke-text uppercase"
                    v-scroll-reveal="{ origin: 'left', distance: '50px', duration: 1000 }">
                    {{ $t('about.title1') }}
                </h2>
                <div class="flex items-end">
                    <h1
                        class="font-rajdhani font-bold xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl uppercase w-fit">
                        {{ $t('about.title2') }}
                        <span class="rounded-full text-m_orange-100 animate__animated animate__bounce">.</span>
                    </h1>
                    <!-- <div class="rounded-full w-3 h-3 mb-4 bg-m_orange-100 animate__animated animate__bounce"></div> -->
                </div>
                <p class="font-inter font-normal lg:text-lg sm:text-base text-sm text-m_gray-300 md:w-1/2 w-full"
                    v-scroll-reveal="{ origin: 'bottom', distance: '50px', duration: 1000 }">
                    {{ $t('about.desc1') }}
                </p>
            </div>
            <div class="pt-20 flex flex-col items-center justify-center"
                v-scroll-reveal="{ origin: 'bottom', distance: '50px', duration: 1000 }">
                <img src="/svg/parlak-nesil.svg" class="object-cover lg:w-52 sm:w-40 w-32">
            </div>

            <div class="pt-20 flex flex-col items-center justify-center"
                v-scroll-reveal="{ origin: 'bottom', distance: '50px', duration: 1000 }">
                <h3 class="font-rajdhani font-semibold lg:text-6xl sm:text-5xl text-4xl uppercase mb-8">{{ $t('about.title3') }}</h3>
                <img src="/imgs/akmuhammed.webp" class="object-cover lg:w-80 sm:w-52 w-40">
                <p class="mt-4 font-rajdhani font-semibold text-xl">Akmuhammed Nurmuradow</p>
            </div>

            <div class="flex flex-col items-center">
                <h4 class="sm:my-28 my-16 font-rajdhani font-semibold lg:text-4xl md:text-3xl text-2xl uppercase"
                    v-scroll-reveal="{ origin: 'bottom', distance: '50px', duration: 1000 }">{{ $t('about.title4') }}</h4>
                <div class="w-full flex flex-col" v-for="(item, index) in all_teams" :key="item.id">
                    <div class="w-full flex flex-row items-start justify-between border-m_gray-500 border-t px-4 py-4 overflow-hidden"
                        :class="activeIndex === index ? 'duration-500 h-fit' : 'duration-500 phone:h-52'">
                        <div class="!leading-none font-rajdhani font-medium lg:text-[350px] md:text-[300px] sm:text-[200px] text-[150px]"
                            v-scroll-reveal="{ origin: 'left', distance: '50px', duration: 1000 }" :class="[index === 0 ? 'mr-14' : '']">0{{ item.id }}</div>
                        <div class="phone:flex hidden flex-col space-y-4 mt-3 mx-4 sm:w-[450px] w-[350px] duration-500"
                            :class="activeIndex === index ? 'pt-10' : 'pt-24'"
                            v-scroll-reveal="{ origin: 'top', distance: '50px', duration: 1000 }">
                            <h3
                                class="font-rajdhani font-semibold lg:text-4xl md:text-3xl text-2xl uppercase sm:mb-8 mb-10">
                                {{ item.name }}</h3>
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
                        <h3 class="font-rajdhani font-semibold lg:text-4xl md:text-3xl text-2xl uppercase mb-8">{{
            item.name }}</h3>
                        <p class="font-inter font-normal lg:text-lg sm:text-base text-sm text-m_gray-300 pb-10">
                            {{ item.desc }}
                        </p>
                    </div>
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
import { teams } from '@/data/index';
export default {
    name: "About",
    data() {
        return {
            activeIndex: 0,
            all_teams: null,
        }
    },
    async created() {
        this.all_teams = teams[this.$i18n.locale]
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
    watch: {
        '$i18n.locale'(newLocale, _) {
            this.all_teams = teams[newLocale]
        },
    },
}
</script>