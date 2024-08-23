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
import Footer from '@/components/Footer.vue';
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
                { id: 1, img: '/imgs/project-1.webp', name: 'Broker', cats: ['Cameras / Server / Computers / Printers / Installations / Archivers / Smart switches / Firewall'], desc: 'Broker is an innovative platform that allows users to participate in live online auctions from the comfort of their devices. Whether you\'re looking to buy or sell, our app offers a seamless experience with real-time bidding, secure transactions, and a wide variety of items up for auction. Users can easily browse upcoming auctions, place bids, and track their activities all within the app. With Broker, you can join a global community of bidders and sellers, ensuring a dynamic and competitive marketplace. Experience the excitement of live auctions anytime, anywhere.' },
                { id: 2, img: '/imgs/project-13.webp', name: 'Metall Market', cats: ['Computers / Server / Printers / Switch / Firewall'], desc: 'Metall Market is a comprehensive online platform dedicated to industrial sales, connecting buyers and sellers in the metals and manufacturing sectors. Our website offers a vast selection of high-quality industrial products, including raw materials, machinery, and equipment. With a user-friendly interface, Metall Market makes it easy to browse, compare, and purchase items tailored to your business needs. We ensure secure transactions and reliable delivery, supporting industries worldwide with efficient and effective solutions. Whether you\'re sourcing materials or selling industrial goods, Metall Market is your go-to destination for all things industrial.' },
                { id: 3, img: '/imgs/project-3.webp', name: 'Online Courses', cats: ['Server / Archivers / Smart switches / Firewall / Installation / Service'], desc: 'Online Courses is a dynamic platform that offers a wide range of educational programs designed to help you achieve your learning goals from anywhere in the world. Our website provides access to high-quality courses across various disciplines, taught by experienced instructors and industry professionals. Whether you\'re looking to develop new skills, advance your career, or explore a new hobby, Online Courses has something for everyone. With flexible learning schedules, interactive content, and certificates of completion, our platform ensures that you can learn at your own pace and convenience. Empower your education with Online Courses today.' },
                { id: 4, img: '/imgs/project-8.webp', name: 'Ajaýyp Gurluşyk', cats: ['Server / Archivers / Smart switches / Firewall / Installation / Service'], desc: 'Ajaýyp Gurluşyk is a leading industrial company specializing in high-quality construction and engineering services. With a strong focus on innovation and sustainability, we deliver exceptional projects that meet the highest industry standards. Our team of experienced professionals is dedicated to creating durable and efficient solutions for a wide range of construction needs. Trust Ajaýyp Gurluşyk to bring your vision to life with precision and excellence.' },
                { id: 5, img: '/imgs/project-6.webp', name: 'Quickpick', cats: ['Server / Archivers / Smart switches / Firewall / Installation / Service'], desc: 'Quickpick is a specialized platform designed for cafes and restaurants, allowing them to create accounts and start selling their food and beverages online. With a focus on the food and beverage industry, Quickpick offers a seamless online ordering and payment system, making it easy for businesses to reach more customers. The platform provides an intuitive interface for managing menus, orders, and payments. Elevate your cafe or restaurant\'s online presence with Quickpick, and enjoy hassle-free sales and secure transactions.' },
                { id: 7, img: '/imgs/project-9.webp', name: 'Sagdyn Diýar', cats: ['Server / Archivers / Smart switches / Firewall / Installation / Service / Computers / Printers'], desc: 'Sagdyn Diýar is your trusted online pharmacy, offering a wide range of health and wellness products with the convenience of home delivery. Our platform ensures easy ordering, secure transactions, and reliable service. Experience hassle-free shopping for all your healthcare needs with Sagdyn Diýar.' },
                { id: 8, img: '/imgs/project-10.webp', name: 'Optowoý app', cats: ['Computers / Printers / Installation / Service'], desc: 'Optowoý app is a versatile platform that allows sellers to create accounts, showcase their products, and start selling online with ease. Users can browse detailed product listings, watch videos, and explore various offerings before making a purchase. Optowoý app provides a seamless experience for both sellers and buyers, ensuring efficient transactions and product visibility. Whether you\'re selling or shopping, Optowoý app is the ideal platform for all your online marketplace needs.' },
                { id: 9, img: '/imgs/project-14.webp', name: 'Ýoda', cats: ['Computers / Printers / Installation / Service'], desc: 'Provided computers, printers, installations and service' },
                { id: 10, img: '/imgs/project-12.webp', name: 'Baulord', cats: ['Computers / Printers / Installation / Service'], desc: 'Provided computers, printers, installations and service' },
                { id: 11, img: '/imgs/project-5.webp', name: 'Töwerek', cats: ['Server / Archivers / Smart switches / Firewall / Installation / Service / Computers / Printers'], desc: 'Established in 2005, TÖWEREK ES manages a portfolio of diversified business activities. We are involved in paints production, Real Estate and Insurance Services, Provision of Oil and Gas Products and Services, Textile floor coverings and other local and global business activities. TÖWEREK ES has set high performance standards and continually aspire to achieve them with the winning team of the best professionals in the market. We also operate our privately-owned Business Centers in Ashgabat and own shares in Abadan Haly Factory OJSC, the largest producer of carpet products in Turkmenistan.' },
                { id: 12, img: '/imgs/project-15.webp', name: 'Türkmen Syýahat', cats: ['Server / Archivers / Smart switches / Firewall / Installation / Service / Computers / Printers'], desc: 'Turkmen Syýahat Hyzmat operates in the field of hotel management. Our company is a leader in this industry due to our flexibility and innovative approaches. Currently, we manage the Syýahatçy hotel, located in the capital of Turkmenistan, Ashgabat, and are actively involved in its internal and external renovation and enhancement.' },
                { id: 13, img: '/imgs/project-16.webp', name: 'Täze Senagat', cats: ['Computers / Printers / Installation / Service'], desc: 'Located in the Gökdepe district of Ahal province, OJSC Täze Senagat specializes in the production of lubricating oils. We use base oils produced at the country’s oil and gas complexes and advanced technologies from global companies. Our plant is capable of producing all types of lubricants, but the main focus is on motor and hydraulic oils.' },
                { id: 14, img: '/imgs/project-17.webp', name: 'Abadan Haly', cats: ['Computers / Printers / Installation / Service'], desc: 'Abadan Haly is a premier carpet manufacturing company known for producing high-quality, durable, and beautifully crafted carpets. Our commitment to excellence is reflected in every product, blending traditional craftsmanship with modern designs. Abadan Haly offers a wide range of styles and patterns, perfect for enhancing any space. Trust us to bring comfort and elegance into your home with our exceptional carpets.' },
                { id: 15, img: '/imgs/project-18.webp', name: 'Türkmen Täjirçilik', cats: ['Computers / Printers / Installation / Service'], desc: 'Türkmen Täjirçilik specializes in supplying high-quality chemical products and essential equipment for factories. We are dedicated to providing reliable solutions that meet the needs of various industries. Türkmen Täjirçilik is your trusted partner for all industrial supply requirements.' },
                { id: 15, img: '/imgs/project-19.webp', name: 'Biznes Türkmenistan', cats: ['Computers / Printers / Installation / Service'], desc: 'Biznes Türkmenistan is a mobile app delivering the latest business news and updates from Turkmenistan and beyond. Stay informed with real-time reports, market insights, and industry trends at your fingertips. Biznes Türkmenistan is your go-to source for all business-related news in the region.' },
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