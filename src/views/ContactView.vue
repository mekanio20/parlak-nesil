<template>
    <div class="relative min-h-screen overflow-hidden" :class="[getMode ? 'bg-black' : 'bg-white']">
        <Navbar />
        <!-- contact bg -->
        <img src="/icons/contact-bg.png" class="w-full h-full  absolute top-0 left-0 right-0 z-10">

        <div class="container py-56 relative z-20">
            <div class="flex items-center justify-between">
                <div class="flex flex-col items-start justify-between">
                    <div class="flex items-end">
                        <h1 class="w-fit text-7xl text-center font-jetBrains leading-tight"
                            :class="[getMode ? 'text-white' : 'text-m_blue-100']">
                            Contac us
                        </h1>
                        <div class="rounded-full w-3 h-3 mb-4 bg-m_orange-100 animate__animated animate__bounce"></div>
                    </div>
                    <div class="mt-44 w-[515px]">
                        <img class="w-full object-cover" src="/imgs/contact.png">
                    </div>
                </div>
                <div class="w-[550px]">
                    <input class="w-full py-4 mb-8 font-rajdhani font-semibold text-xl border-b border-m_gray-500 text-m_gray-600 bg-transparent outline-none" type="text" placeholder="Your Name">
                    <input class="w-full py-4 mb-8 font-rajdhani font-semibold text-xl border-b border-m_gray-500 text-m_gray-600 bg-transparent outline-none" type="email" placeholder="Your Email">
                    <input class="w-full py-4 mb-8 font-rajdhani font-semibold text-xl border-b border-m_gray-500 text-m_gray-600 bg-transparent outline-none" type="text" placeholder="Share your thoughts">
                    <button class="w-full mt-10 px-6 py-4 bg-m_orange-100 rounded-sm text-white font-bold text-nowrap font-jetBrains hover:opacity-80 duration-500">Share your feedback</button>
                </div>
            </div>
        </div>
        <div class="py-10 border-t border-m_gray-500">
            <div class="container flex items-center justify-between">
                <div class="flex flex-col items-center">
                    <p class="mb-4 font-rajdhani font-medium text-xl text-m_gray-600 uppercase">Call</p>
                    <p class="font-rajdhani font-medium text-2xl text-m_gray-700">+993 62 410579</p>
                </div>
                <div class="flex flex-col items-center">
                    <p class="mb-4 font-rajdhani font-medium text-xl text-m_gray-600 uppercase">Our Adddress</p>
                    <p class="font-rajdhani font-medium text-2xl text-m_gray-700">Aşgabat ş. Bitarap Türkmenistan şaýoly, 163</p>
                </div>
                <div class="flex flex-col items-center">
                    <p class="mb-4 font-rajdhani font-medium text-xl text-m_gray-600 uppercase">Send An Email</p>
                    <p class="font-rajdhani font-medium text-2xl text-m_gray-700">parlaknesil@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { mapGetters } from 'vuex';
export default {
    name: "Contact",
    components: {
        Navbar,
    },
    computed: {
        ...mapGetters(['getMode']),
    },
}
</script>