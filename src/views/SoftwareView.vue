<template>
    <div class="relative min-h-screen">
        <Navbar link="Software" />
        <!-- top, right -->
        <img src="/svg/hardware-bg-1.svg" class="w-full h-full absolute top-0 right-0 object-cover z-10">

        <div class="container pt-60 relative z-20">
            <div class="flex md:flex-row flex-col justify-between">
                <div class="flex-1 relative">
                    <!-- top, left -->
                    <img src="/svg/hardware-bg-2.svg"
                        class="absolute -top-[275px] -left-[135px] object-cover hidden lg:block">
                    <div class="flex mb-6 items-end">
                        <h1 class="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center font-jetBrains leading-tight"
                            v-scroll-reveal="{ origin: 'left', distance: '50px', duration: 1000 }">
                            {{ $t('nav.title4') }}
                        </h1>
                        <div class="mb-2 ml-2">
                            <div
                                class="rounded-full lg:w-3 lg:h-3 w-2 h-2 bg-m_orange-100 animate__animated animate__bounce">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-1 flex flex-col space-y-10">
                    <p class="font-inter font-normal lg:text-lg sm:text-base text-sm text-m_gray-300"
                        v-scroll-reveal="{ origin: 'right', distance: '50px', duration: 1000 }">
                        {{ $t('software.desc1') }}
                        <br><br>
                        {{ $t('software.desc2') }}
                        <br><br>
                        {{ $t('software.desc3') }}
                        <br><br>
                        {{ $t('software.desc4') }}
                    </p>
                    <div class="flex items-center flex-wrap">
                        <p class="font-jetBrains font-normal lg:px-10 lg:py-3 px-6 py-2 mr-4 mb-4 lg:text-sm text-xs bg-m_amber-100 text-white"
                            v-for="item in items" :key="item.id"
                            v-scroll-reveal="{ origin: 'right', distance: '50px', duration: 1000, delay: item.delay }">
                            {{ item.name }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col mt-52">
                <div class="flex flex-row items-center border-t-2 border-t-m_gray-500 py-10" v-for="(item, index) in all_software"
                    :key="item.id">
                    <div class="w-full sm:mr-10 flex flex-col space-y-8">
                        <div class="flex flex-row"
                            v-scroll-reveal="{ origin: 'left', distance: '50px', duration: 1000, delay: 100 }">
                            <p class="font-inter font-normal lg:text-base sm:text-sm text-xs text-m_orange-100"
                                v-for="i in item.cats" :key="i">{{ i }}</p>
                        </div>
                        <h3 class="font-rajdhani font-medium lg:text-4xl md:text-3xl text-2xl"
                            v-scroll-reveal="{ origin: 'left', distance: '50px', duration: 1000, delay: 200 }">
                            {{ item.name }}</h3>
                        <p class="font-inter font-normal lg:text-lg sm:text-base text-sm text-m_gray-300"
                            v-scroll-reveal="{ origin: 'left', distance: '50px', duration: 1000, delay: 300 }">{{
        item.desc }}</p>
                    </div>
                    <div class="w-[580px] h-80 hidden md:block"
                        v-scroll-reveal="{ origin: 'right', distance: '50px', duration: 1000 }">
                        <img class="w-full h-full object-cover" v-lazy="all_software_imgs[index]" lazy="loading">
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
import { software } from '@/data/index';
export default {
    name: "Software",
    data() {
        return {
            items: [
                { id: 1, name: 'Python', delay: 100 },
                { id: 2, name: 'JavaScript', delay: 200 },
                { id: 3, name: 'SQL', delay: 300 },
                { id: 4, name: 'Vue.js', delay: 400 },
                { id: 5, name: 'Django', delay: 500 },
                { id: 6, name: 'React', delay: 600 },
                { id: 7, name: 'Flutter', delay: 700 },
                { id: 8, name: 'Sass/SCSS', delay: 800 },
                { id: 9, name: 'Tailwind CSS', delay: 900 },
                { id: 10, name: 'NGINX', delay: 1000 },
                { id: 11, name: 'Swift', delay: 1100 },
                { id: 12, name: 'Java', delay: 1200 },
            ],
            all_software: null,
            all_software_imgs: null
        }
    },
    components: {
        Navbar,
        Footer
    },
    created() {
        this.all_software = software[this.$i18n.locale]
        this.all_software_imgs = software.imgs
    },
    watch: {
        '$i18n.locale'(newLocale, _) {
            this.all_software = software[newLocale]
        },
    },
}
</script>