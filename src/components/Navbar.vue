<template>
    <div class="w-full flex items-center justify-between px-10 py-5 fixed top-0 left-0 right-0 z-50" :class="bgColor">
        <div class="flex items-center">
            <router-link to="/" class="w-72">
                <img :src="[getMode ? '/icons/logo-white.png' : '/icons/logo.png']">
            </router-link>
        </div>
        <ul class="flex items-center space-x-5">
            <li class="relative group" v-for="item in items" :key="item.id">
                <router-link :to="item.route" class="px-2 py-2 uppercase font-jetBrains hover:text-m_gray-300 duration-300"
                    :class="[getMode ? 'text-white' : 'text-m_blue-100', link === item.name ? 'text-m_orange-100' : 'text-m_blue-100']">{{
                    item.name }}
                </router-link>
            </li>
        </ul>
        <div class="w-fit">
            <router-link to="/contact"
                class="px-6 py-2 bg-m_orange-100 rounded-full text-white font-bold text-nowrap font-jetBrains hover:opacity-80 duration-500">Contact
                us</router-link>
        </div>
    </div>
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
            isScrolled: false,
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
        handleScroll() {
            this.isScrolled = window.scrollY > 100
        }
    },
    computed: {
        ...mapGetters(['getMode']),
        bgColor() {
            if (this.getMode && this.isScrolled) return 'bg-gray-800 bg-opacity-75'
            else if (!this.getMode && this.isScrolled) return 'bg-slate-300 bg-opacity-75'
        }
    },
}
</script>