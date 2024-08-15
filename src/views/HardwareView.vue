<template>
    <div class="relative min-h-screen" :class="[getMode ? 'bg-black' : 'bg-white']">
        <Navbar link="Hardware" />
        <!-- top, right -->
        <img src="/icons/hardware-bg-1.png" class="w-full h-full absolute top-0 right-0 object-cover z-10">

        <!-- top, left -->
        <img src="/icons/hardware-bg-2.png" class="absolute -top-11 -left-28 object-cover z-10 hidden lg:block">

        <div class="container pt-60 relative z-20">
            <div class="flex md:flex-row flex-col justify-between">
                <div class="flex-1">
                    <div class="flex mb-6 items-end">
                        <h1 class="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center font-jetBrains leading-tight"
                            :class="[getMode ? 'text-white' : 'text-m_blue-100']" v-scroll-reveal="{ origin: 'left', distance: '50px', duration: 1000 }">
                            Hardware
                        </h1>
                        <div class="mb-2 ml-2">
                            <div class="rounded-full lg:w-3 lg:h-3 w-2 h-2 bg-m_orange-100 animate__animated animate__bounce"></div>
                        </div>
                    </div>
                </div>
                <div class="flex-1 flex flex-col space-y-10">
                    <p class="font-inter font-normal lg:text-lg sm:text-base text-sm"
                        :class="[getMode ? 'text-m_gray-300' : 'text-m_gray-500']" v-scroll-reveal="{ origin: 'right', distance: '50px', duration: 1000 }">
                        We provide IT Services, Website Development, Branding, Logo Design. Our team consists of
                        experienced IT professionals, programmers and designers. Our business principles are the
                        provision of efficient and high-quality services, as well as a unique approach to each client.
                        Our clients receive comprehensive support and effective solutions that are guaranteed to work.
                        If you are looking for a reliable solution to support your business, check out our list of the
                        services we offer. For us, success in work is not determined by temporary income, but by the
                        successful projects of our clients.
                    </p>
                    <div class="flex items-center flex-wrap">
                        <p class="font-jetBrains font-normal lg:px-10 lg:py-3 px-6 py-2 mr-4 mb-4 lg:text-sm text-xs"
                            :class="[getMode ? 'bg-m_amber-100 text-white' : 'bg-m_gray-400 text-m_blue-100']"
                            v-for="item in items" :key="item.id" v-scroll-reveal="{ origin: 'right', distance: '50px', duration: 1000, delay: item.delay }">
                            {{ item.name }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col mt-52">
                <div class="flex flex-row items-center border-t-2 border-t-m_gray-500 py-10" v-for="item in hardware" :key="item.id">
                    <div class="w-full sm:mr-10 flex flex-col space-y-8">
                        <div class="flex flex-row" v-scroll-reveal="{ origin: 'left', distance: '50px', duration: 1000, delay: 100 }">
                            <p class="font-inter font-normal lg:text-base sm:text-sm text-xs text-m_orange-100" v-for="i in item.cats" :key="i">{{ i }}</p>
                        </div>
                        <h3 class="font-rajdhani font-medium lg:text-4xl md:text-3xl text-2xl" :class="[getMode ? 'text-white' : 'text-black']" v-scroll-reveal="{ origin: 'left', distance: '50px', duration: 1000, delay: 200 }">
                            {{ item.name }}</h3>
                        <p class="font-inter font-normal lg:text-lg sm:text-base text-sm text-m_gray-300" v-scroll-reveal="{ origin: 'left', distance: '50px', duration: 1000, delay: 300 }">{{ item.desc }}</p>
                    </div>
                    <div class="w-[580px] h-80 hidden md:block" v-scroll-reveal="{ origin: 'right', distance: '50px', duration: 1000 }">
                        <img class="w-full h-full object-cover" :src="item.img">
                    </div>
                </div>
                <div class="text-center">
                    <button class="lg:px-20 lg:py-5 px-14 py-4 border border-m_gray-300 text-m_gray-300 my-16">See all</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { mapGetters } from 'vuex';
export default {
    name: "Hardware",
    data() {
        return {
            items: [
                { id: 1, name: 'Router', delay: 100 },
                { id: 2, name: 'Computers', delay: 200 },
                { id: 3, name: 'Switch', delay: 300 },
                { id: 4, name: 'Archivers', delay: 400 },
                { id: 5, name: 'IP Telephony', delay: 500 },
                { id: 6, name: 'CISCO', delay: 600 },
                { id: 7, name: 'DELL', delay: 700 },
                { id: 8, name: 'Server', delay: 800 },
                { id: 9, name: 'HP', delay: 900 },
                { id: 10, name: 'Networking', delay: 1000 },
            ],
            hardware: [
                { id: 1, img: '/imgs/project-1.webp', name: 'Ministry of construction and architecture of turkmenistan', cats: ['Computers /', 'Server /', 'Printers /', 'Switch'], desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe consequuntur? Dolorum, explicabo tenetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe.' },
                { id: 2, img: '/imgs/project-2.webp', name: 'Ministry of construction and architecture of turkmenistan', cats: ['Computers /', 'Server /', 'Printers /', 'Switch'], desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe consequuntur? Dolorum, explicabo tenetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe.' },
                { id: 3, img: '/imgs/project-3.webp', name: 'Ministry of construction and architecture of turkmenistan', cats: ['Computers /', 'Server /', 'Printers /', 'Switch'], desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe consequuntur? Dolorum, explicabo tenetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe.' },
                { id: 4, img: '/imgs/project-4.webp', name: 'Ministry of construction and architecture of turkmenistan', cats: ['Computers /', 'Server /', 'Printers /', 'Switch'], desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe consequuntur? Dolorum, explicabo tenetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe.' },
                { id: 5, img: '/imgs/project-5.webp', name: 'Ministry of construction and architecture of turkmenistan', cats: ['Computers /', 'Server /', 'Printers /', 'Switch'], desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe consequuntur? Dolorum, explicabo tenetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe.' }
            ]
        }
    },
    components: {
        Navbar,
    },
    computed: {
        ...mapGetters(['getMode']),
    },
}
</script>