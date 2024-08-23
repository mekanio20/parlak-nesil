<template>
    <!-- <div class="w-full bg-black flex items-start">
        <div class="flex flex-2 items-start flex-col">
            <router-link to="/" class="xl:w-60 sm:w-52 w-44">
                <img class="w-full object-cover" src="/icons/logo-white.webp">
            </router-link>
            <div class="w-[320px] mt-16">
                <div class="w-full flex flex-wrap">
                    <router-link class="flex flex-row mr-5" v-for="item in items" :key="item.id" :to="item.route">
                        <p class="font-rajdhani font-medium text-lg text-m_gray-1000 mr-3">{{ item.name }}</p>
                        <p class=" text-m_gray-1100">/</p>
                    </router-link>
                </div>
            </div>
            <router-link to="#top" class="mt-40 cursor-pointer">
                <img src="/svg/to-top.svg">
            </router-link>
        </div>
        <div class="flex-1">

        </div>
        <div class="flex-1">

        </div>
    </div> -->
    <div class="py-10 border-t border-m_gray-500">
        <div class="container flex md:flex-row flex-col md:space-y-0 space-y-10 items-center justify-between">
            <div class="flex flex-col items-center">
                <p class="md:mb-4 mb-2 font-rajdhani font-medium lg:text-xl text-lg text-m_gray-600 uppercase">Call</p>
                <p class="font-rajdhani font-medium lg:text-2xl sm:text-xl text-lg text-m_gray-700">+993 62 410579</p>
            </div>
            <div class="flex flex-col items-center">
                <p class="md:mb-4 mb-2 font-rajdhani font-medium lg:text-xl text-lg text-m_gray-600 uppercase">Our
                    Address</p>
                <p class="font-rajdhani font-medium lg:text-2xl sm:text-xl text-lg text-m_gray-700">Aşgabat ş. Bitarap
                    Türkmenistan
                    şaýoly, 163</p>
            </div>
            <div class="flex flex-col items-center">
                <p class="md:mb-4 mb-2 font-rajdhani font-medium lg:text-xl text-lg text-m_gray-600 uppercase">Send An
                    Email</p>
                <p class="font-rajdhani font-medium lg:text-2xl sm:text-xl text-lg text-m_gray-700">
                    parlaknesil@gmail.com</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {
            items: [
                { id: 1, route: '/', name: 'Home' },
                { id: 2, route: '/about', name: 'About us' },
                { id: 3, route: '/hardware', name: 'Hardware' },
                { id: 4, route: '/software', name: 'Software' },
                { id: 5, route: '/projects', name: 'Projects' },
                { id: 5, route: '/contact', name: 'Contact Us' },
            ]
        }
    }
}
</script>