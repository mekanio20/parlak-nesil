<template>
    <div id="top" class="relative min-h-screen">
        <Navbar link="Home" />
        <Background />
        <div class="absolute top-0 left-0 right-0">
            <div class="lg:h-screen h-[70vh] relative z-20">
                <div
                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-fit sm:w-[420px] w-[370px] px-6">
                    <div class="flex items-end space-x-2 xl:w-[750px] lg:w-[600px] md:w-[500px]">
                        <h1
                            class="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center !leading-normal font-jetBrains select-none animate__animated animate__fadeIn">
                            <span>
                                {{ $t('home.title1') }}
                            </span>
                            <span class="text-m_orange-100 animate__animated animate__bounce">.</span>
                        </h1>
                        <!-- <div class="md:mb-6 mb-4">
                            <div class="rounded-full lg:w-3 lg:h-3 w-2 h-2 bg-m_orange-100 animate__animated animate__bounce"></div>
                        </div> -->
                    </div>
                </div>
            </div>
            <div class="w-full h-full relative z-20 bg-black" style="box-shadow: 0 -50px 40px 5px #000">
                <div class="w-full h-full absolute -top-10 -z-10">
                    <SvgAnimation />
                </div>
                <div
                    class="w-full h-full container flex items-center justify-center xl:pt-96 xl:pb-60 lg:pt-60 lg:pb-52 py-20">
                    <div class="flex items-end">
                        <h1 class="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center font-jetBrains leading-tight"
                            v-scroll-reveal="{ origin: 'top', distance: '50px', duration: 1000 }">
                            {{ $t('home.title2') }}
                        </h1>
                        <div class="mb-2 ml-2">
                            <div
                                class="rounded-full lg:w-3 lg:h-3 w-2 h-2 bg-m_orange-100 animate__animated animate__bounce">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sm:container px-4 flex items-center justify-center flex-wrap overflow-hidden">
                    <div class="flex items-center flex-col sm:px-12 px-8 sm:py-10 py-6 lg:mr-6 mr-8 mb-8 sm:space-y-8 space-y-4 sm:w-96 w-80 lg:h-80 rounded-tl-3xl rounded-br-3xl bg-m_amber-100 relative"
                        v-for="item in items" :key="item.id"
                        v-scroll-reveal="{ origin: item.animate, distance: '50px', duration: 1000 }">
                        <img class="sm:w-14 w-12 object-cover" :src="item.icon">
                        <h3 class="font-rajdhani font-medium px-6 text-center lg:text-xl text-lg text-white z-10">{{
                                    $t(`home.cards.title${item.id}`) }}</h3>
                        <p class="font-inter font-normal text-center lg:text-base text-sm z-10">{{
                                    $t(`home.cards.subtitle${item.id}`) }}</p>
                        <div class="absolute left-0 bottom-0 overflow-hidden">
                            <img src="/svg/blog-bg.svg">
                        </div>
                    </div>
                </div>
                <div class="w-full px-4 flex flex-col items-center justify-center py-20">
                    <h1 class="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center font-jetBrains leading-tight"
                        v-scroll-reveal="{ origin: 'top', distance: '50px', duration: 1000 }">
                        {{ $t('home.title3') }}
                    </h1>
                    <div class="w-full pt-32 flex items-center space-x-20 overflow-x-auto">
                        <img class="sm:w-[200px] w-[100px] object-cover" src="/imgs/partner1.webp" alt="">
                        <img class="sm:w-[200px] w-[100px] object-cover" src="/imgs/partner2.webp" alt="">
                        <img class="sm:w-[200px] w-[100px] object-cover" src="/imgs/partner1.webp" alt="">
                        <img class="sm:w-[200px] w-[100px] object-cover" src="/imgs/partner2.webp" alt="">
                        <img class="sm:w-[200px] w-[100px] object-cover" src="/imgs/partner1.webp" alt="">
                        <img class="sm:w-[200px] w-[100px] object-cover" src="/imgs/partner2.webp" alt="">
                        <img class="sm:w-[200px] w-[100px] object-cover" src="/imgs/partner1.webp" alt="">
                        <img class="sm:w-[200px] w-[100px] object-cover" src="/imgs/partner2.webp" alt="">
                    </div>
                </div>
                <div class="mt-20 relative z-50">
                    <Footer />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Background from '@/components/Background.vue';
import SvgAnimation from '@/components/SvgAnimation.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: "Home",
    components: {
        Navbar,
        Background,
        SvgAnimation,
        Footer
    },
    data() {
        return {
            items: [
                { id: 1, icon: '/svg/cpu.svg', animate: 'left' },
                { id: 2, icon: '/svg/komp.svg', animate: 'top' },
                { id: 3, icon: '/svg/phone.svg', animate: 'right' },
                { id: 4, icon: '/svg/pen.svg', animate: 'left' },
                { id: 5, icon: '/svg/mobile.svg', animate: 'right' },
            ]
        }
    }
}
</script>