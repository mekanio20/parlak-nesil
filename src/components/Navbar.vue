<template>
    <div class="w-full py-5 fixed top-0 left-0 right-0 z-50" :class="[getMode ? 'bg-black' : 'bg-white']">
        <div class="container flex items-center justify-between">
            <div class="flex items-center">
                <router-link to="/" class="xl:w-72 sm:w-60 w-52">
                    <img :src="[getMode ? '/icons/logo-white.png' : '/icons/logo.png']">
                </router-link>
            </div>
            <ul class="lg:flex hidden items-center xl:space-x-5 space-x-2">
                <li class="relative group" v-for="item in items" :key="item.id">
                    <router-link :to="item.route"
                        class="px-2 py-2 xl:text-lg text-base uppercase font-rajdhani font-semibold hover:text-m_gray-300 duration-300"
                        :class="[getMode ? 'text-white' : 'text-m_blue-100', link === item.name ? 'text-m_orange-100' : 'text-m_blue-100']">{{
        item.name }}
                    </router-link>
                </li>
            </ul>
            <div class="flex items-center space-x-8">
                <router-link to="/contact"
                    class="px-6 py-2 bg-m_orange-100 rounded-full text-white font-bold text-nowrap xl:text-base text-sm font-jetBrains hover:opacity-80 duration-500 hidden sm:block">Contact
                    us</router-link>
                <div class="w-10 h-10 mt-3 cursor-pointer lg:hidden">
                    <svg @click="openBurger" :class="{ 'x-shape': isOpen }" width="100%" height="100%" viewBox="0 0 22 25"
                        fill="none" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
                        <path :d="def_ust_cizgi" stroke="white" stroke-width="1.5" stroke-linecap="round"
                            class="line top" />
                        <path :d="def_alt_cizgi" stroke="white" stroke-width="1.5" stroke-linecap="round"
                            class="line bottom" />
                        <path d="M1 7.5H21" stroke="white" stroke-width="1.5" stroke-linecap="round" class="line middle" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <div v-if="isOpen"
        class="select-none w-full h-screen pt-10 pb-8 fixed left-0 right-0 z-50 overflow-hidden duration-200 sm:mt-[76px] mt-[71.5px]"
        :class="[getMode ? 'bg-black' : 'bg-white']">
        <div class="relative">

            <img src="/svg/navbar-mobile.svg" class="w-full h-full object-cover absolute top-0 left-0 right-0 -z-10">

            <div class="flex flex-col space-y-10 items-center">
                <div class="relative group" v-for="item in items" :key="item.id">
                    <router-link :to="item.route"
                        class="px-2 py-2 xl:text-lg text-base uppercase font-jetBrains hover:text-m_gray-300 duration-300"
                        :class="[getMode ? 'text-white' : 'text-m_blue-100', link === item.name ? 'text-m_orange-100' : 'text-m_blue-100']">
                        {{ item.name }}
                    </router-link>
                </div>
                <div class="relative group block sm:hidden">
                    <router-link to="/contact"
                        class="px-2 py-2 xl:text-lg text-base uppercase font-jetBrains hover:text-m_gray-300 duration-300"
                        :class="[getMode ? 'text-m_orange-100' : 'text-m_blue-100']">
                        Contact
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
            ust_duz_cizgi: 'M1 1H21',
            alt_duz_cizgi: 'M21 14H1',
            gec_ust_cizgi: 'M1 1H4.75M21 1H9.75',
            gec_alt_cizgi: 'M21 14H17.25M1 14H12.25',
            def_ust_cizgi: 'M1 1H4.75M21 1H9.75',
            def_alt_cizgi: 'M21 14H17.25M1 14H12.25',
            items: [
                { id: 1, route: '/', name: 'Home' },
                { id: 2, route: '/about', name: 'About us' },
                { id: 3, route: '/hardware', name: 'Hardware' },
                { id: 4, route: '/software', name: 'Software' },
                { id: 5, route: '/projects', name: 'Projects' },
            ]
        }
    },
    props: {
        link: {
            type: String
        }
    },
    methods: {
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