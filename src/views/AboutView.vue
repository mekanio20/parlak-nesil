<template>
    <div class="relative min-h-screen overflow-hidden" :class="[getMode ? 'bg-black' : 'bg-white']">
        <Navbar link="About us" />

        <!-- bg icon -->
        <img src="/icons/about-us-bg-1.png" class="w-full h-full object-cover absolute top-0 left-0 right-0 z-10">
        <!-- Parlak nesil icon -->
        <img v-if="getMode" src="/icons/parlak-nesil-1.png" class="absolute top-52 right-0 z-10">
        <img v-if="!getMode" src="/icons/parlak-nesil-2.png" class="absolute top-52 right-0 z-10">
        <!-- shadow-1 -->
        <img src="/icons/shadow.png" class="absolute top-0 z-10">
        <!-- shadow-2 -->
        <img src="/icons/shadow.png" class="absolute top-[1300px] -left-[600px] z-10">
        <!-- shadow-3 -->
        <img src="/icons/shadow.png" class="absolute top-[2000px] -right-[700px] z-10">
        <!-- shadow-4 -->
        <img src="/icons/shadow.png" class="absolute top-[3500px] -right-[700px] z-10">
        <!-- shadow-5 -->
        <img src="/icons/shadow.png" class="absolute -bottom-[500px] -left-[600px] z-10">

        <div class="px-10 py-56 relative z-20">
            <div class="flex flex-col items-start space-y-6 sm:ml-10">
                <h3 class="font-rajdhani font-medium lg:text-2xl sm:text-xl text-lg text-m_orange-100 uppercase">About us</h3>
                <h2 class="xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-bold stroke-text uppercase"
                    :class="[getMode ? 'stroke-text' : 'stroke-text-black']">
                    We make your
                </h2>
                <div class="flex items-end">
                    <h1 class="font-rajdhani font-bold xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl uppercase"
                        :class="[getMode ? 'text-white' : 'text-m_blue-100']">
                        Vision a reality
                    </h1>
                    <div class="rounded-full w-3 h-3 mb-4 bg-m_orange-100 animate__animated animate__bounce"></div>
                </div>
                <p class="font-inter font-normal lg:text-lg sm:text-base text-sm text-m_gray-300 md:w-1/2 w-full">
                    Parlak Nesil is a multi-disciplinary design studio. Studio creates brand identities and develops
                    strategies. We are engaged in finding the optimal solutions covering all spheres of design spectrum
                    by using a unique approach.
                </p>
            </div>
            <div class="pt-20 flex flex-col items-center justify-center">
                <img src="/icons/parlak-nesil.png" class="object-cover lg:w-52 sm:w-40 w-32">
            </div>
            <div class="flex flex-col items-center">
                <h4 class="my-28 font-rajdhani font-semibold lg:text-4xl md:text-3xl text-2xl uppercase" :class="[getMode ? 'text-white' : 'text-black']">Our team</h4>
                <div class="flex flex-col">
                    <div class="w-full h-96 py-10 flex items-center justify-between border-m_gray-500 border-t overflow-hidden"
                        v-for="item in teams" :key="item.id" :id="item.id">
                        <div class="flex-1">
                            <div class="font-rajdhani font-medium lg:text-[350px] md:text-[300px] text-[200px]" :class="[getMode ? 'text-white' : 'text-m_blue-100']">{{ item.id }}</div>
                        </div>
                        <div class="sm:flex-1 px-4 flex flex-col">
                            <h3 class="font-rajdhani font-semibold lg:text-4xl md:text-3xl text-2xl uppercase sm:mb-8 mb-4" :class="[getMode ? 'text-white' : 'text-m_blue-100']">{{ item.name }}
                            </h3>
                            <p class="font-inter font-normal lg:text-lg sm:text-base text-sm text-m_gray-300">
                                {{ item.desc }}
                            </p>
                        </div>
                        <div class="flex-2 sm:ml-20 mt-4 self-start">
                            <div class="lg:px-[22px] lg:py-7 px-[16px] py-[22px] lg:border-[2px] border rounded-full cursor-pointer" :claas="[!getMode ? 'border-black' : 'border-white']" @click="openAccordion(item.id)">
                                <div class="w-3 h-[1px]" :class="[getMode ? 'bg-white' : 'bg-m_blue-100']"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-20 flex sm:flex-row flex-col items-center space-x-6 space-y-6">
                <div class="flex-1">
                    <img class="object-cover" src="/imgs/team-1.png">
                </div>
                <div class="flex-1 flex flex-col space-y-6">
                    <img class="object-cover" src="/imgs/team-2.png">
                    <img class="object-cover" src="/imgs/team-3.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { mapGetters } from 'vuex';
export default {
    name: "About",
    data() {
        return {
            teams: [
                { id: 1, name: 'Hardware', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe consequuntur? Dolorum, explicabo tenetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
                { id: 2, name: 'Networking', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe consequuntur? Dolorum, explicabo tenetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
                { id: 3, name: 'Front-end developer', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe consequuntur? Dolorum, explicabo tenetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
                { id: 4, name: 'Back-end developer', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe consequuntur? Dolorum, explicabo tenetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
            ]
        }
    },
    components: {
        Navbar
    },
    methods: {
        openAccordion(id) {
            const elem = document.getElementById(id)
            if (elem.style.height == '200px') {
                elem.style.height = '384px'
            } else {
                elem.style.height = '200px'
            }
        }
    },
    computed: {
        ...mapGetters(['getMode']),
    },
}
</script>