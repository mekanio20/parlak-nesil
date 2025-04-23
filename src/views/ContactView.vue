<template>
    <div class="relative min-h-screen overflow-hidden">
        <Navbar />
        <!-- contact bg -->
        <img src="/svg/contact-bg.svg" class="w-full h-full object-cover absolute top-0 left-0 right-0 z-10">

        <div class="container py-56 relative z-20">
            <div class="flex xl:flex-row flex-col items-center justify-between">
                <div class="flex flex-col xl:items-start items-center xl:justify-between justify-center mt-10">
                    <div class="flex items-end">
                        <h1
                            class="xl:text-7xl lg:text-6xl md:text-5xl text-4xl text-center font-jetBrains leading-tight">
                            {{ $t('nav.title6') }}
                            <!-- <span class="rounded-full text-m_orange-100 animate__animated animate__bounce">.</span> -->
                        </h1>
                        <div class="mb-2 ml-2">
                            <div
                                class="rounded-full lg:w-3 lg:h-3 w-2 h-2 bg-m_orange-100 animate__animated animate__bounce">
                            </div>
                        </div>
                    </div>
                    <div class="xl:mt-44 my-10 xl:w-[515px] lg:w-[450px] md:w-[400px] w-[300px]">
                        <img class="w-full object-cover" src="/imgs/contact.webp">
                    </div>
                </div>
                <form @submit.prevent="feedBack" class="xl:w-[550px] lg:w-[450px] md:w-[400px] w-[300px]">
                    <input v-model="email"
                        class="w-full py-4 mb-8 font-rajdhani font-semibold lg:text-xl text-lg border-b border-m_gray-500 text-m_gray-600 bg-transparent outline-none"
                        type="email" :placeholder="$t('contact.title1')">
                    <input v-model="title"
                        class="w-full py-4 mb-8 font-rajdhani font-semibold lg:text-xl text-lg border-b border-m_gray-500 text-m_gray-600 bg-transparent outline-none"
                        type="text" :placeholder="$t('contact.title2')">
                    <input v-model="desc"
                        class="w-full py-4 mb-8 font-rajdhani font-semibold lg:text-xl text-lg border-b border-m_gray-500 text-m_gray-600 bg-transparent outline-none"
                        type="text" :placeholder="$t('contact.title3')">
                    <button type="submit"
                        class="w-full mt-10 px-6 py-4 bg-m_orange-100 rounded-sm text-white font-bold text-nowrap font-jetBrains hover:opacity-80 duration-500">
                        <span v-if="loading">
                            Loading...
                        </span>
                        <span v-else>
                            {{ $t('contact.title4') }}
                        </span>    
                    </button>
                </form>
            </div>
        </div>
        <div class="mt-20 relative z-50">
            <Footer />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: "Contact",
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            email: null,
            title: null,
            desc: null,
            loading: false
        }
    },
    methods: {
        async feedBack() {
            this.loading = true
            try {
                const response = await axios.post('https://parlaknesil.com/nodeapp/send-mail', {
                    gmail: this.email,
                    subject: this.title,
                    text: this.desc
                })
                console.log(response)
                if (response.status === 200) {
                    alert('Habar ugradyldy!')
                    this.email = null
                    this.title = null
                    this.desc = null
                } else {
                    alert('Habar ugradylmady!')
                }
            } catch (error) {
                console.log(error)
            } finally {
                this.loading = false
            }
        }
    }
}
</script>