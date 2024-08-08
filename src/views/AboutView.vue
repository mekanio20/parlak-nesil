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
            <div class="flex flex-col items-start space-y-6 ml-10">
                <h3 class="font-rajdhani font-medium text-2xl text-m_orange-100 uppercase">About us</h3>
                <h2 class="text-8xl font-bold stroke-text uppercase"
                    :class="[getMode ? 'stroke-text' : 'stroke-text-black']">
                    We make your
                </h2>
                <div class="flex items-end">
                    <h1 class="font-rajdhani font-bold text-8xl uppercase"
                        :class="[getMode ? 'text-white' : 'text-m_blue-100']">
                        Vision a reality
                    </h1>
                    <div class="rounded-full w-3 h-3 mb-4 bg-m_orange-100 animate__animated animate__bounce"></div>
                </div>
                <p class="font-inter font-normal text-lg text-m_gray-300 w-1/2">
                    Parlak Nesil is a multi-disciplinary design studio. Studio creates brand identities and develops
                    strategies. We are engaged in finding the optimal solutions covering all spheres of design spectrum
                    by using a unique approach.
                </p>
            </div>
            <div class=" pt-20 flex flex-col items-center justify-center">
                <img src="/icons/parlak-nesil.png" class="object-cover">
                <!-- <h4 class="my-28 font-rajdhani font-semibold text-4xl  uppercase" :class="[getMode ? 'text-white' : 'text-black']">Founders</h4>
                <div class="w-full flex items-center justify-around">
                    <div class="w-96 flex flex-col items-center">
                        <img class="object-cover" src="/imgs/manager-1.png">
                        <h4 class="font-rajdhani font-semibold text-2xl mt-8" :class="[getMode ? 'text-white' : 'text-black']">Name Surname</h4>
                    </div>
                    <div class="w-96 flex flex-col items-center">
                        <img class="object-cover" src="/imgs/manager-2.png">
                        <h4 class="font-rajdhani font-semibold text-2xl mt-8" :class="[getMode ? 'text-white' : 'text-black']">Name Surname</h4>
                    </div>
                </div> -->
            </div>
            <div class="flex flex-col items-center">
                <h4 class="my-28 font-rajdhani font-semibold text-4xl uppercase" :class="[getMode ? 'text-white' : 'text-black']">Our team</h4>
                <div class="flex flex-col">
                    <div class="w-full h-96 py-10 flex items-center justify-between border-m_gray-500 border-t overflow-hidden"
                        v-for="item in teams" :key="item.id" :id="item.id">
                        <div class="flex-1">
                            <div class="font-rajdhani font-medium text-[350px]" :class="[getMode ? 'text-white' : 'text-m_blue-100']">{{ item.id }}</div>
                        </div>
                        <div class="flex-1 flex flex-col">
                            <h3 class="font-rajdhani font-semibold text-4xl uppercase mb-8" :class="[getMode ? 'text-white' : 'text-m_blue-100']">{{ item.name }}
                            </h3>
                            <p class="font-inter font-normal text-lg text-m_gray-300">
                                {{ item.desc }}
                            </p>
                        </div>
                        <div class="flex-2 ml-20 mt-4 self-start">
                            <div class="px-6 py-7 border border-white text-white rounded-full cursor-pointer" @click="openAccordion(item.id)">
                                <div class="w-2 h-[1px] bg-white"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-20 flex items-center space-x-6">
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
                { id: 1, name: 'Hardware', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe consequuntur? Dolorum, explicabo tenetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe.' },
                { id: 2, name: 'Networking', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe consequuntur? Dolorum, explicabo tenetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe.' },
                { id: 3, name: 'Front-end developer', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe consequuntur? Dolorum, explicabo tenetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe.' },
                { id: 4, name: 'Back-end developer', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe consequuntur? Dolorum, explicabo tenetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe.' },
            ]
        }
    },
    components: {
        Navbar
    },
    methods: {
        openAccordion(id) {
            const elem = document.getElementById(id)
            elem.style.height = '200px'
        }
    },
    computed: {
        ...mapGetters(['getMode']),
    },
}
</script>