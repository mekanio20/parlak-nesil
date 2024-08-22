<template>
    <div class="relative min-h-screen" :class="[getMode ? 'bg-black' : 'bg-white']">
        <Navbar link="Software" />
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
                            Software
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
                        Our team is proficient in a wide range of programming languages and frameworks, enabling us to
                        develop everything from web and mobile applications to complex enterprise systems. We focus on
                        building scalable, secure, and high-performance software that integrates seamlessly with your
                        existing infrastructure.
                        <br><br>
                        In addition to custom software development, we offer software optimization and maintenance
                        services. Whether you're looking to improve the performance of existing applications, add new
                        features, or ensure compatibility with the latest technologies, we have the skills and
                        experience to deliver results.
                        <br><br>
                        We also provide software integration services, connecting different systems and platforms to
                        create a cohesive, efficient workflow. Our expertise extends to cloud computing, database
                        management, and API development, ensuring that your software ecosystem is robust and
                        future-proof.
                        <br><br>
                        At Parlak Nesil, we are committed to delivering software solutions that not only meet but exceed
                        your expectations. We work closely with you throughout the entire process, ensuring that the
                        final product aligns perfectly with your business goals and operational needs.
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
                <div class="flex flex-row items-center border-t-2 border-t-m_gray-500 py-10" v-for="item in software"
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
                        <img class="w-full h-full object-cover" v-lazy="item.img">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { mapGetters } from 'vuex';
export default {
    name: "Software",
    data() {
        return {
            items: [
                { id: 1, name: 'Python', delay: 100 },
                { id: 2, name: 'JavaScript', delay: 200 },
                { id: 3, name: 'SQL', delay: 300 },
                { id: 4, name: 'Vue.js', delay: 400 },
                { id: 5, name: 'Django', delay: 500 },
                { id: 6, name: 'React', delay: 600 },
                { id: 7, name: 'Flutter', delay: 700 },
                { id: 8, name: 'Sass/SCSS', delay: 800 },
                { id: 9, name: 'Tailwind CSS', delay: 900 },
                { id: 10, name: 'NGINX', delay: 1000 },
                { id: 11, name: 'Swift', delay: 1100 },
                { id: 12, name: 'Java', delay: 1200 },
            ],
            software: [
                { id: 1, img: '/imgs/project-1.webp', name: 'Broker', cats: ['Cameras / Server / Computers / Printers / Installations / Archivers / Smart switches / Firewall'], desc: 'We provided all the necessary goods for video surveillance cameras and installation, service, united into one network, the Ministry of Foreign Affairs of Ashgabat itself, including the velayats of branches. We provided all the necessary goods for internal network location, installation and service. We provided goods, installation and maintenance of the checkpoint, installed software to record the arrival and departure of employees at a certain time. We provided goods, installation, configuration of servers, archivers, smart switches, firewall, internal IP telephony and their services. Transferred document management software from the old server to the new server. Provided computers, printers, installations and service.' },
                { id: 2, img: '/imgs/project-13.webp', name: 'Metall Market', cats: ['Computers / Server / Printers / Switch / Firewall'], desc: 'Installed internal document management software. We provided all the necessary goods for an internal local network, installation and service. Provided with computers, printers, licenses for Microsoft Windows, Microsoft Office, Antivirus Kaspersky and their installations' },
                { id: 3, img: '/imgs/project-3.webp', name: '0 -> 100', cats: ['Server / Archivers / Smart switches / Firewall / Installation / Service'], desc: 'We provided all the necessary goods for an internal local network and document circulation, installation, configuration of servers, archivers, smart switches, firewall, installation and service.' },
                { id: 4, img: '/imgs/project-8.webp', name: 'Ajaýyp Gurluşyk', cats: ['Server / Archivers / Smart switches / Firewall / Installation / Service'], desc: 'We provided all the necessary goods for an internal local network and document circulation, installation, configuration of servers, archivers, smart switches, firewall, installation and service. Installed unified software for introducing sales and accounting records. We provided Pos Terminals, cash registers, receipt programs, barcode scanners in all stores and their installations' },
                { id: 5, img: '/imgs/project-6.webp', name: 'Quickpick', cats: ['Server / Archivers / Smart switches / Firewall / Installation / Service'], desc: 'We provided all the necessary goods for an internal local network and document circulation, installation, configuration of servers, archivers, smart switches, firewall, installation and service. Provided computers, printers, installations and service.' },
                { id: 6, img: '/imgs/project-7.webp', name: 'MIM', cats: ['Server / Archivers / Smart switches / Firewall / Installation / Service / Computers / Printers'], desc: 'We provided all the necessary goods for an internal local network and document circulation, installation, configuration of servers, archivers, smart switches, firewall, city and internal telephony, installation and service. Provided computers, printers, installations and service.' },
                { id: 7, img: '/imgs/project-9.webp', name: 'Sagdyn Diýar', cats: ['Server / Archivers / Smart switches / Firewall / Installation / Service / Computers / Printers'], desc: 'Provided computers, printers, installations and service' },
                { id: 8, img: '/imgs/project-10.webp', name: 'Optowoý app', cats: ['Computers / Printers / Installation / Service'], desc: 'Provided computers, printers, installations and service' },
                { id: 9, img: '/imgs/project-14.webp', name: 'Ýoda', cats: ['Computers / Printers / Installation / Service'], desc: 'Provided computers, printers, installations and service' },
                { id: 10, img: '/imgs/project-12.webp', name: 'Baulord', cats: ['Computers / Printers / Installation / Service'], desc: 'Provided computers, printers, installations and service' },
                { id: 11, img: '/imgs/project-5.webp', name: 'Töwerek', cats: ['Server / Archivers / Smart switches / Firewall / Installation / Service / Computers / Printers'], desc: 'We provided all the necessary goods for an internal local network and document circulation, installation, configuration of servers, archivers, smart switches, firewall, installation and service. Provided computers, printers, installations and service.' },
                { id: 12, img: '/imgs/project-15.webp', name: 'Türkmen Syýahat', cats: ['Server / Archivers / Smart switches / Firewall / Installation / Service / Computers / Printers'], desc: 'We provided all the necessary goods for an internal local network and document circulation, installation, configuration of servers, archivers, smart switches, firewall, city and internal telephony, installation and service. Provided computers, printers, installations and service.' },
                { id: 13, img: '/imgs/project-16.webp', name: 'Täze Senagat', cats: ['Computers / Printers / Installation / Service'], desc: 'Provided computers, printers, installations and service' },
                { id: 14, img: '/imgs/project-17.webp', name: 'Abadan Haly', cats: ['Computers / Printers / Installation / Service'], desc: 'Provided computers, printers, installations and service' },
                { id: 15, img: '/imgs/project-18.webp', name: 'Türkmen Täjirçilik', cats: ['Computers / Printers / Installation / Service'], desc: 'Provided computers, printers, installations and service' },
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