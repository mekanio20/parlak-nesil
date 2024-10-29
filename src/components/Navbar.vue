<template>
    <div class="w-full py-5 fixed top-0 left-0 right-0 z-50" :class="[getMode ? 'bg-black' : 'bg-white']">
        <div class="container flex items-center justify-between">
            <div class="flex items-center">
                <router-link to="/" class="xl:w-60 sm:w-52 w-44">
                    <img :src="[getMode ? '/icons/logo-white.webp' : '/icons/logo.webp']">
                </router-link>
            </div>
            <ul class="lg:flex hidden items-center xl:space-x-5 space-x-2">
                <li class="relative group" v-for="item in items" :key="item.id">
                    <router-link :to="item.route"
                        class="px-2 py-2 xl:text-lg text-base uppercase font-rajdhani font-medium hover:text-m_gray-300 duration-300"
                        :class="[getMode ? 'text-white' : 'text-m_blue-100', link === item.name ? 'text-m_orange-100' : 'text-m_blue-100']">
                        {{ $t(`nav.title${item.id}`) }}
                    </router-link>
                </li>
            </ul>
            <div class="flex items-center space-x-8">
                <div class="cursor-pointer relative">
                    <svg @click="openLang" width="28" height="28" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.4987 33.5423C26.3581 33.5423 33.5404 26.36 33.5404 17.5007C33.5404 8.64128 26.3581 1.45898 17.4987 1.45898M17.4987 33.5423C8.63932 33.5423 1.45703 26.36 1.45703 17.5007C1.45703 8.64128 8.63932 1.45898 17.4987 1.45898M17.4987 33.5423C21.8737 33.5423 23.332 26.2507 23.332 17.5007C23.332 8.75065 21.8737 1.45898 17.4987 1.45898M17.4987 33.5423C13.1237 33.5423 11.6654 26.2507 11.6654 17.5007C11.6654 8.75065 13.1237 1.45898 17.4987 1.45898M2.91536 23.334H32.082M2.91536 11.6673H32.082" stroke="white" stroke-width="2.4"/>
                    </svg>
                    <div v-show="isLang" class="absolute top-12 -left-5 bg-m_amber-100 py-2">
                        <div class="font-rajdhani font-medium py-2 px-6 text-xl hover:text-m_orange-100 duration-300" v-for="item in langs" :key="item" @click="updateLang(item)" :class="[this.$i18n.locale == item ? 'text-m_orange-100' : 'text-white']">
                            {{ item }}
                        </div>
                    </div>
                </div>
                <router-link to="/contact"
                    class="px-6 py-2 bg-m_orange-100 rounded-full text-white font-bold text-nowrap xl:text-base text-sm font-jetBrains hover:opacity-80 duration-500 hidden sm:block select-none">{{ $t('nav.title6') }}</router-link>
                <div class="w-10 h-10 mt-3 cursor-pointer lg:hidden">
                    <svg @click="openBurger" :class="{ 'x-shape': isOpen }" width="100%" height="100%" viewBox="0 0 22 25"
                        fill="none" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
                        <path :d="def_ust_cizgi" stroke="white" stroke-width="1" stroke-linecap="round"
                            class="line top" />
                        <path :d="def_alt_cizgi" stroke="white" stroke-width="1" stroke-linecap="round"
                            class="line bottom" />
                        <path d="M1 7.5H21" stroke="white" stroke-width="1" stroke-linecap="round" class="line middle" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <div v-if="isOpen"
        class="select-none w-full h-screen pt-10 pb-8 fixed left-0 right-0 z-50 overflow-hidden duration-200 sm:mt-[76px] mt-[71.5px]"
        :class="[getMode ? 'bg-black' : 'bg-white']">
        <img src="/svg/navbar-mobile.svg" class="w-full h-full object-cover absolute top-0 bottom-0 left-0 right-0 -z-10">
        <div class="relative">
            <div class="flex flex-col space-y-10 items-center">
                <div class="relative group" v-for="item in items" :key="item.id">
                    <router-link :to="item.route"
                        class="px-2 py-2 xl:text-lg text-base uppercase font-jetBrains hover:text-m_gray-300 duration-300 text-white">
                        {{ $t(`nav.title${item.id}`) }}
                    </router-link>
                </div>
                <div class="relative group block sm:hidden">
                    <router-link to="/contact"
                        class="px-2 py-2 xl:text-lg text-base uppercase font-jetBrains hover:text-m_gray-300 duration-300 text-white">
                        {{ $t('nav.title6') }}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "Navbar",
    data() {
        return {
            isOpen: false,
            isLang: false,
            ust_duz_cizgi: 'M1 1H21',
            alt_duz_cizgi: 'M21 14H1',
            gec_ust_cizgi: 'M1 1H4.75M21 1H9.75',
            gec_alt_cizgi: 'M21 14H17.25M1 14H12.25',
            def_ust_cizgi: 'M1 1H4.75M21 1H9.75',
            def_alt_cizgi: 'M21 14H17.25M1 14H12.25',
            locale: localStorage.getItem('lang') || 'EN',
            langs: ['TM', 'EN' ,'RU'],
            items: [
                { id: 1, name: 'Home', route: '/' },
                { id: 2, name: 'About us', route: '/about' },
                { id: 3, name: 'Hardware', route: '/hardware' },
                { id: 4, name: 'Software', route: '/software' },
                { id: 5, name: 'Projects', route: '/projects' },
            ]
        }
    },
    props: {
        link: {
            type: String
        }
    },
    methods: {
        openLang() {
            this.isLang = !this.isLang
        },
        openBurger() {
            this.isOpen = !this.isOpen
            if (this.isOpen) {
                this.def_ust_cizgi = this.ust_duz_cizgi
                this.def_alt_cizgi = this.alt_duz_cizgi
            } else {
                this.def_ust_cizgi = this.gec_ust_cizgi
                this.def_alt_cizgi = this.gec_alt_cizgi
            }
        },
        updateLang(lang) {
            localStorage.setItem('lang', lang)
            this.locale = lang
            this.isLang = !this.isLang
            this.$i18n.locale = lang
        },
    },
    computed: {
        ...mapGetters(['getMode'])
    },
}
</script>

<style scoped>
.line {
    transition: all 0.5s ease;
}

.x-shape .top {
    transform: rotate(45deg) translate(6px, -5px);
}

.x-shape .bottom {
    transform: rotate(-45deg) translate(-7px, 3px);
}

.x-shape .middle {
    opacity: 0;
}
</style>