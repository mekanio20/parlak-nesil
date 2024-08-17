<template>
    <div class="relative min-h-screen">
        <Navbar link="Projects" />
        <!-- top, right -->
        <img src="/svg/project-bg.svg" class="w-full h-full absolute z-10 top-0 right-0">

        <div class="container relative z-20">
            <div class="flex items-center justify-center pt-60 pb-40">
                <div class="flex items-end">
                    <h1 class="xl:text-7xl lg:text-6xl md:text-5xl text-4xl text-center font-jetBrains leading-tight">
                        Projects
                    </h1>
                    <div class="mb-2 ml-2">
                        <div
                            class="rounded-full lg:w-3 lg:h-3 w-2 h-2 bg-m_orange-100 animate__animated animate__bounce">
                        </div>
                    </div>
                </div>
            </div>
            <div class="lg:columns-3 sm:columns-2 columns-1 gap-8 pb-20">
                <div v-for="(item, index) in projects" :key="index"
                    v-scroll-reveal="{ origin: 'top', distance: '100px', duration: 1000 }"
                    class="w-full mb-10 overflow-hidden">
                    <router-link :to="`/project/${item.id}`">
                        <img class="w-full object-cover mb-3" v-lazy="item.img" lazy="loading" />
                        <h3 class="font-semibold font-rajdhani lg:text-2xl sm:text-xl text-lg">
                            {{ item.name }}
                        </h3>
                        <p class="font-normal font-inter text-m_orange-100 sm:text-lg text-base">{{ item.cat }}</p>
                    </router-link>
                </div>
            </div>
            <div class="py-10">
                <div class="flex space-x-4 justify-center items-center">
                    <!-- Previous Button -->
                    <button @click="goToPreviousPage" :disabled="currentPage === 1"
                        class="w-12 h-12 border border-white rounded-lg flex justify-center items-center transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.22 6.71985C0.0793075 6.57934 0.000175052 6.3887 0 6.18985V5.80985C0.00230401 5.61144 0.081116 5.42157 0.22 5.27985L5.36 0.149852C5.45388 0.055196 5.58168 0.00195312 5.715 0.00195312C5.84832 0.00195312 5.97612 0.055196 6.07 0.149852L6.78 0.859852C6.87406 0.952016 6.92707 1.07816 6.92707 1.20985C6.92707 1.34154 6.87406 1.46769 6.78 1.55985L2.33 5.99985L6.78 10.4399C6.87466 10.5337 6.9279 10.6615 6.9279 10.7949C6.9279 10.9282 6.87466 11.056 6.78 11.1499L6.07 11.8499C5.97612 11.9445 5.84832 11.9978 5.715 11.9978C5.58168 11.9978 5.45388 11.9445 5.36 11.8499L0.22 6.71985Z"
                                fill="white" />
                        </svg>
                    </button>

                    <!-- Page Numbers -->
                    <button v-for="page in totalPages" :key="page" @click="goToPage(page)" :class="[
                        'w-12 h-12 border border-orange-500 rounded-lg flex justify-center items-center transition-all',
                        page === currentPage ? 'bg-orange-500 text-white' : 'text-orange-500']">
                        {{ page }}
                    </button>

                    <!-- Next Button -->
                    <button @click="goToNextPage" :disabled="currentPage === totalPages"
                        class="w-12 h-12 border border-white rounded-lg flex justify-center items-center transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.78 6.71985C6.92069 6.57934 6.99982 6.3887 7 6.18985V5.80985C6.9977 5.61144 6.91888 5.42157 6.78 5.27985L1.64 0.149852C1.54612 0.055196 1.41832 0.00195312 1.285 0.00195312C1.15168 0.00195312 1.02388 0.055196 0.93 0.149852L0.22 0.859852C0.125936 0.952016 0.0729284 1.07816 0.0729284 1.20985C0.0729284 1.34154 0.125936 1.46769 0.22 1.55985L4.67 5.99985L0.22 10.4399C0.125343 10.5337 0.0721006 10.6615 0.0721006 10.7949C0.0721006 10.9282 0.125343 11.056 0.22 11.1499L0.93 11.8499C1.02388 11.9445 1.15168 11.9978 1.285 11.9978C1.41832 11.9978 1.54612 11.9445 1.64 11.8499L6.78 6.71985Z"
                                fill="white" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
    name: "Project",
    data() {
        return {
            currentPage: 1,
            totalPages: 3,
            projects: [
                { id: 1, img: '/imgs/project-1.webp', name: 'Broker', cat: 'Mobile application & UI/UX Design' },
                { id: 2, img: '/imgs/project-2.webp', name: 'Türkmen Çyragy', cat: 'Logo Design' },
                { id: 3, img: '/imgs/project-3.webp', name: '0 -> 100', cat: 'Website & Mobile application & UI/UX Design' },
                { id: 4, img: '/imgs/project-4.webp', name: 'Freyja', cat: 'Logo Design' },
                { id: 5, img: '/imgs/project-5.webp', name: 'Töwerek', cat: 'Website & UI/UX Design' },
                { id: 6, img: '/imgs/project-6.webp', name: 'Quickpick', cat: 'Mobile application & UI/UX Design' },
                { id: 7, img: '/imgs/project-7.webp', name: 'MIM', cat: 'Website & UI/UX Design' },
                { id: 8, img: '/imgs/project-8.webp', name: 'Ajaýyp Gurluşyk', cat: 'Website & UI/UX Design' },
                { id: 9, img: '/imgs/project-9.webp', name: 'Sagdyn Diýar', cat: 'Mobile application & UI/UX Design' },
                { id: 10, img: '/imgs/project-10.webp', name: 'Optowoy app', cat: 'Mobile application & UI/UX Design' },
                { id: 11, img: '/imgs/project-11.webp', name: 'Türkmen ojagy', cat: 'Logo Design' },
                { id: 12, img: '/imgs/project-12.webp', name: 'Baulord', cat: 'Website & UI/UX Design' },
                { id: 13, img: '/imgs/project-13.webp', name: 'Metall Market', cat: 'Website & UI/UX Design' },
                { id: 14, img: '/imgs/project-14.webp', name: 'Yoda', cat: 'UI/UX Design' },
                { id: 15, img: '/imgs/project-15.webp', name: 'Türkmen Syýahat', cat: 'Website & UI/UX Design' },
                { id: 16, img: '/imgs/project-16.webp', name: 'Täze Senagat', cat: 'Website & UI/UX Design' },
                { id: 17, img: '/imgs/project-17.webp', name: 'Abadan haly', cat: 'Website & UI/UX Design' },
                { id: 18, img: '/imgs/project-18.webp', name: 'Türkmen täjirçilik', cat: 'Website & UI/UX Design' },
            ]
        }
    },
    components: {
        Navbar
    },
    methods: {
        goToPage(page) {
            this.currentPage = page;
        },
        goToPreviousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        goToNextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
    },
}
</script>