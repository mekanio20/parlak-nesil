<template>
    <nav class="">
        <div class="w-full flex items-center justify-between xl:px-10 p-5 fixed top-0 left-0 right-0 z-50">
            <div class="flex items-center">
                <router-link to="/" class="xl:w-72 sm:w-60 w-52">
                    <img :src="[getMode ? '/icons/logo-white.png' : '/icons/logo.png']">
                </router-link>
            </div>
            <ul class="lg:flex hidden items-center xl:space-x-5 space-x-2">
                <li class="relative group" v-for="item in items" :key="item.id">
                    <router-link :to="item.route"
                        class="px-2 py-2 xl:text-lg text-base uppercase font-jetBrains hover:text-m_gray-300 duration-300"
                        :class="[getMode ? 'text-white' : 'text-m_blue-100', link === item.name ? 'text-m_orange-100' : 'text-m_blue-100']">{{
                item.name }}
                    </router-link>
                </li>
            </ul>
            <div class="flex items-center space-x-8">
                <router-link to="/contact"
                    class="px-6 py-2 bg-m_orange-100 rounded-full text-white font-bold text-nowrap xl:text-base text-sm font-jetBrains hover:opacity-80 duration-500 hidden sm:block">Contact
                    us</router-link>
                <div @click="openBurger" class="cursor-pointer lg:hidden">
                    <div class="flex flex-col space-y-2">
                        <div class="h-0.5 duration-500"
                            :class="[isBurger ? 'w-6 transform translate-y-[10px] -rotate-45' : 'w-6', getMode ? 'bg-white' : 'bg-black']">
                        </div>
                        <div class="w-3 h-0.5 duration-500"
                            :class="[isBurger ? 'opacity-0' : '', getMode ? 'bg-white' : 'bg-black']"></div>
                        <div class="h-0.5 duration-500"
                            :class="[isBurger ? 'w-6 transform translate-y-[-10px] rotate-45' : 'w-4', getMode ? 'bg-white' : 'bg-black']">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isBurger" class="select-none w-full p-5 fixed left-0 right-0 z-50 overflow-hidden duration-200 sm:mt-[76px] mt-[71.5px]" :class="[getMode ? 'bg-gray-800 bg-opacity-75' : 'bg-slate-300 bg-opacity-75']">
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
                        :class="[getMode ? 'text-white' : 'text-m_blue-100']">
                        Contact
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "Navbar",
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    data() {
        return {
            isBurger: false,
            items: [
                { id: 1, route: '/', name: 'Home' },
                { id: 2, route: '/about', name: 'About us' },
                { id: 3, route: '/hardware', name: 'Hardware' },
                { id: 4, route: '/#', name: 'Software' },
                { id: 5, route: '/#', name: 'Design' },
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
            this.isBurger = !this.isBurger
        },
    },
    computed: {
        ...mapGetters(['getMode'])
    },
}
</script>