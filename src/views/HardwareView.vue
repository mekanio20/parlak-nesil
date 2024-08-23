<template>
    <div class="relative min-h-screen" :class="[getMode ? 'bg-black' : 'bg-white']">
        <Navbar link="Hardware" />
        <!-- top, right -->
        <img src="/svg/hardware-bg-1.svg" class="w-full h-full absolute top-0 right-0 object-cover z-10">

        <div class="container pt-60 relative z-20">
            <div class="flex md:flex-row flex-col justify-between">
                <div class="flex-1 relative">
                    <!-- top, left -->
                    <img src="/svg/hardware-bg-2.svg"
                        class="absolute -top-[275px] -left-[135px] object-cover hidden lg:block">
                    <div class="flex mb-6 items-end">
                        <h1 class="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center font-jetBrains leading-tight"
                            :class="[getMode ? 'text-white' : 'text-m_blue-100']"
                            v-scroll-reveal="{ origin: 'left', distance: '50px', duration: 1000 }">
                            Hardware
                        </h1>
                        <div class="mb-2 ml-2">
                            <div
                                class="rounded-full lg:w-3 lg:h-3 w-2 h-2 bg-m_orange-100 animate__animated animate__bounce">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-1 flex flex-col space-y-10">
                    <p class="font-inter font-normal lg:text-lg sm:text-base text-sm"
                        :class="[getMode ? 'text-m_gray-300' : 'text-m_gray-500']"
                        v-scroll-reveal="{ origin: 'right', distance: '50px', duration: 1000 }">
                        Our hardware services encompass the complete lifecycle of hardware development and integration.
                        We begin with detailed system design, ensuring that every component is carefully selected to
                        meet the specific needs of your project. Our expertise includes custom circuit board design,
                        prototyping, and manufacturing, enabling us to create unique hardware solutions tailored to your
                        requirements.
                        <br><br>
                         We handle component sourcing, ensuring that only the highest quality parts are used. Our
                        assembly process is rigorous, with multiple stages of testing to guarantee reliability and
                        performance. Once the hardware is assembled, we integrate it with existing systems, ensuring
                        seamless communication and compatibility across all platforms. In addition to new hardware
                        development, we specialize in optimizing and upgrading existing systems. Whether it's improving
                        performance, enhancing security, or adding new features, our team is equipped to handle all
                        aspects of hardware maintenance and upgrades.
                        <br><br>
                         At Parlak Nesil, we are committed to delivering hardware solutions that are not only functional
                        but also innovative, scalable, and aligned with your business objectives.
                    </p>
                    <div class="flex items-center flex-wrap">
                        <p class="font-jetBrains font-normal lg:px-10 lg:py-3 px-6 py-2 mr-4 mb-4 lg:text-sm text-xs"
                            :class="[getMode ? 'bg-m_amber-100 text-white' : 'bg-m_gray-400 text-m_blue-100']"
                            v-for="item in items" :key="item.id"
                            v-scroll-reveal="{ origin: 'right', distance: '50px', duration: 1000, delay: item.delay }">
                            {{ item.name }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col mt-52">
                <div class="flex flex-row items-center border-t-2 border-t-m_gray-500 py-10" v-for="item in hardware"
                    :key="item.id">
                    <div class="w-full sm:mr-10 flex flex-col space-y-8">
                        <div class="flex flex-row"
                            v-scroll-reveal="{ origin: 'left', distance: '50px', duration: 1000, delay: 100 }">
                            <p class="font-inter font-normal lg:text-base sm:text-sm text-xs text-m_orange-100"
                                v-for="i in item.cats" :key="i">{{ i }}</p>
                        </div>
                        <h3 class="font-rajdhani font-medium lg:text-4xl md:text-3xl text-2xl"
                            :class="[getMode ? 'text-white' : 'text-black']"
                            v-scroll-reveal="{ origin: 'left', distance: '50px', duration: 1000, delay: 200 }">
                            {{ item.name }}</h3>
                        <p class="font-inter font-normal lg:text-lg sm:text-base text-sm text-m_gray-300"
                            v-scroll-reveal="{ origin: 'left', distance: '50px', duration: 1000, delay: 300 }">{{
        item.desc }}</p>
                    </div>
                    <div class="w-[580px] h-80 hidden md:block"
                        v-scroll-reveal="{ origin: 'right', distance: '50px', duration: 1000 }">
                        <img class="w-full h-full object-cover" v-lazy="item.img" lazy="loading">
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-20">
            <Footer />
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { mapGetters } from 'vuex';
import Footer from '@/components/Footer.vue';
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
                { id: 1, img: '/imgs/hardware-1.webp', name: 'Ministry of Foreign Affairs of Turkmenistan', cats: ['Cameras / Server / Computers / Printers / Installations / Archivers / Smart switches / Firewall'], desc: 'We provided all the necessary goods for video surveillance cameras and installation, service, united into one network, the Ministry of Foreign Affairs of Ashgabat itself, including the velayats of branches. We provided all the necessary goods for internal network location, installation and service. We provided goods, installation and maintenance of the checkpoint, installed software to record the arrival and departure of employees at a certain time. We provided goods, installation, configuration of servers, archivers, smart switches, firewall, internal IP telephony and their services. Transferred document management software from the old server to the new server. Provided computers, printers, installations and service.' },
                { id: 2, img: '/imgs/hardware-2.webp', name: 'Ministry of Construction and Architecture of Turkmenistan', cats: ['Computers / Server / Printers / Switch / Firewall'], desc: 'Installed internal document management software. We provided all the necessary goods for an internal local network, installation and service. Provided with computers, printers, licenses for Microsoft Windows, Microsoft Office, Antivirus Kaspersky and their installations' },
                { id: 3, img: '/imgs/hardware-3.webp', name: 'State concern "Turkmengas"', cats: ['Server / Archivers / Smart switches / Firewall / Installation / Service'], desc: 'We provided all the necessary goods for an internal local network and document circulation, installation, configuration of servers, archivers, smart switches, firewall, installation and service.' },
                { id: 4, img: '/imgs/hardware-4.webp', name: 'Shopping center "Altyn Asyr"', cats: ['Server / Archivers / Smart switches / Firewall / Installation / Service'], desc: 'We provided all the necessary goods for an internal local network and document circulation, installation, configuration of servers, archivers, smart switches, firewall, installation and service. Installed unified software for introducing sales and accounting records. We provided Pos Terminals, cash registers, receipt programs, barcode scanners in all stores and their installations' },
                { id: 5, img: '/imgs/hardware-5.webp', name: 'Ahal velayat, Kaka etrap textile factory', cats: ['Server / Archivers / Smart switches / Firewall / Installation / Service / Computers / Printers'], desc: 'We provided all the necessary goods for an internal local network and document circulation, installation, configuration of servers, archivers, smart switches, firewall, installation and service. Provided computers, printers, installations and service.' },
                { id: 6, img: '/imgs/hardware-6.webp', name: 'Ahal velayat Babadaihan textile factory', cats: ['Server / Archivers / Smart switches / Firewall / Installation / Service / Computers / Printers'], desc: 'We provided all the necessary goods for an internal local network and document circulation, installation, configuration of servers, archivers, smart switches, firewall, city and internal telephony, installation and service. Provided computers, printers, installations and service.' },
                { id: 7, img: '/imgs/hardware-7.webp', name: 'Balkan velayat "Turkmeniň Ak Öýi"', cats: ['Computers / Printers / Installation / Service'], desc: 'Provided computers, printers, installations and service' },
                { id: 8, img: '/imgs/hardware-8.webp', name: 'Dashoguz velayat "Turkmeniň Ak Öýi"', cats: ['Computers / Printers / Installation / Service'], desc: 'Provided computers, printers, installations and service' },
                { id: 9, img: '/imgs/hardware-9.webp', name: 'Balkan velayat, Magtymguly etrap “Köp ugurly hassahana”', cats: ['Computers / Printers / Installation / Service'], desc: 'Provided computers, printers, installations and service' }
            ]
        }
    },
    components: {
        Navbar,
        Footer
    },
    computed: {
        ...mapGetters(['getMode']),
    },
}
</script>