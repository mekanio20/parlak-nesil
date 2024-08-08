<template>
    <div class="relative min-h-screen" :class="[getMode ? 'bg-black' : 'bg-white']">
        <Navbar link="Hardware" />
        <!-- top, right -->
        <img src="/icons/hardware-bg-1.png" class="absolute top-0 right-0 object-cover z-10">

        <!-- top, left -->
        <img src="/icons/hardware-bg-2.png" class="absolute -top-11 -left-28 object-cover z-10">

        <div class="px-10 pt-60 relative z-20">
            <div class="flex justify-between">
                <div class="flex-1">
                    <div class="flex items-end">
                        <h1 class="w-fit text-7xl text-center font-jetBrains leading-tight"
                            :class="[getMode ? 'text-white' : 'text-m_blue-100']">
                            Hardware
                        </h1>
                        <div class="rounded-full w-3 h-3 mb-4 bg-m_orange-100 animate__animated animate__bounce"></div>
                    </div>
                </div>
                <div class="flex-1 flex flex-col space-y-10">
                    <p class="font-inter font-normal text-lg"
                        :class="[getMode ? 'text-m_gray-300' : 'text-m_gray-500']">
                        We provide IT Services, Website Development, Branding, Logo Design. Our team consists of
                        experienced IT professionals, programmers and designers. Our business principles are the
                        provision of efficient and high-quality services, as well as a unique approach to each client.
                        Our clients receive comprehensive support and effective solutions that are guaranteed to work.
                        If you are looking for a reliable solution to support your business, check out our list of the
                        services we offer. For us, success in work is not determined by temporary income, but by the
                        successful projects of our clients.
                    </p>
                    <div class="flex items-center flex-wrap">
                        <p class="font-jetBrains font-normal px-10 py-3 mr-4 mb-4 text-sm"
                            :class="[getMode ? 'bg-m_amber-100 text-white' : 'bg-m_gray-400 text-m_blue-100']"
                            v-for="item in items" :key="item.id">
                            {{ item.name }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col mt-52">
                <div class="flex flex-row items-center border-t-2 border-t-m_gray-500 py-10" v-for="item in hardware"
                    :key="item.id">
                    <div class="w-full mr-10 flex flex-col space-y-8">
                        <div class="flex flex-row">
                            <p class="font-inter font-normal text-base text-m_orange-100" v-for="i in item.cats"
                                :key="i">{{ i }}</p>
                        </div>
                        <h3 class="font-rajdhani font-medium text-4xl" :class="[getMode ? 'text-white' : 'text-black']">
                            {{ item.name }}</h3>
                        <p class="font-inter font-normal text-lg text-m_gray-300">{{ item.desc }}</p>
                    </div>
                    <div class="w-[580px] h-80">
                        <img class="w-full h-full object-cover" :src="item.img">
                    </div>
                </div>
                <div class=" text-center">
                    <button class="px-20 py-5 border border-m_gray-300 text-m_gray-300 my-16">See all</button>
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
                { id: 1, name: 'Router' },
                { id: 2, name: 'Computers' },
                { id: 3, name: 'Switch' },
                { id: 4, name: 'Archivers' },
                { id: 5, name: 'IP Telephony' },
                { id: 6, name: 'CISCO' },
                { id: 7, name: 'DELL' },
                { id: 8, name: 'Server' },
                { id: 9, name: 'HP' },
                { id: 10, name: 'Networking' },
            ],
            hardware: [
                { id: 1, img: '/imgs/project-1.png', name: 'Ministry of construction and architecture of turkmenistan', cats: ['Computers /', 'Server /', 'Printers /', 'Switch'], desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe consequuntur? Dolorum, explicabo tenetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe.' },
                { id: 2, img: '/imgs/project-2.png', name: 'Ministry of construction and architecture of turkmenistan', cats: ['Computers /', 'Server /', 'Printers /', 'Switch'], desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe consequuntur? Dolorum, explicabo tenetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe.' },
                { id: 3, img: '/imgs/project-3.png', name: 'Ministry of construction and architecture of turkmenistan', cats: ['Computers /', 'Server /', 'Printers /', 'Switch'], desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe consequuntur? Dolorum, explicabo tenetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe.' },
                { id: 4, img: '/imgs/project-4.png', name: 'Ministry of construction and architecture of turkmenistan', cats: ['Computers /', 'Server /', 'Printers /', 'Switch'], desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe consequuntur? Dolorum, explicabo tenetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe.' },
                { id: 5, img: '/imgs/project-5.png', name: 'Ministry of construction and architecture of turkmenistan', cats: ['Computers /', 'Server /', 'Printers /', 'Switch'], desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe consequuntur? Dolorum, explicabo tenetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate necessitatibus sequi unde! Atque, mollitia iste, quod illo tenetur ipsa sapiente odit officia dolorem deserunt rerum saepe.' }
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