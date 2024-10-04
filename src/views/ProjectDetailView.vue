<template>
    <div class="relative min-h-screen overflow-hidden">
        <Navbar link="Project" />
        <div class="container sm:py-40 pt-40 pb-20 relative z-20">
            <div class="flex lg:flex-row flex-col items-center">
                <div class="flex-1 flex flex-col space-y-6">
                    <img class="w-full lg:h-[550px] object-cover" v-lazy="`/imgs/${project?.images[0]}`" lazy="loading">
                    <div class="grid sm:grid-cols-3 grid-cols-2 gap-x-6">
                        <img v-for="(item, index) in project?.images" :key="index" v-show="index !== 0" class="w-[250px] h-[240px] object-cover" v-lazy="`/imgs/${item}`" lazy="loading">
                    </div>
                </div>
                <div class="lg:flex-1 w-full flex phone:flex-row flex-col lg:ml-10 lg:mt-0 mt-10 phone:space-x-10">
                    <div class="phone:w-3/4 w-full flex flex-col space-y-20">
                        <div class="flex flex-col">
                            <p class="font-rajdhani font-medium xl:text-xl lg:text-lg text-base text-m_orange-100 mb-4">{{ project?.cat }}</p>
                            <h2 class="font-rajdhani font-medium xl:text-6xl lg:text-5xl md:text-4xl text-3xl">{{ project?.name }}</h2>
                        </div>
                        <div class="flex flex-col space-y-2">
                            <h4 class="font-inter font-normal lg:text-base md:text-sm text-xs text-m_gray-800">
                                Description
                            </h4>
                            <div class=" font-rajdhani font-semibold lg:text-lg md:text-base">
                                {{ project?.desc }}
                            </div>
                        </div>
                        <div class="flex flex-col space-y-2">
                            <h2 class="font-inter font-normal lg:text-base md:text-sm text-xs">Colors</h2>
                            <div class="flex items-center space-x-4">
                                <div class="flex flex-col space-y-2" v-for="item in project?.colors" :key="item">
                                    <div :style="{ backgroundColor: `${item}` }"
                                        class="md:w-16 md:h-16 w-10 h-10 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        <div v-if="project?.url" class="flex flex-col space-y-6">
                            <h3 class="font-inter font-normal lg:text-base md:text-sm text-xs">Details</h3>
                            <div class="w-fit">
                                <a :href="project?.url" rel="noopener noreferrer"
                                    class="px-8 py-3 bg-m_orange-100 rounded-full text-white font-medium text-nowrap font-rajdhani lg:text-lg sm:text-base text-sm hover:opacity-80 duration-500">Go
                                    to website</a>
                            </div>
                        </div>
                    </div>
                    <div
                        class="phone:w-1/2 w-full flex flex-col justify-center phone:space-y-40 phone:mt-0 mt-20 space-y-10">
                        <div class="flex flex-col space-y-6">
                            <h3 class="font-inter font-normal lg:text-base md:text-sm text-xs">Country</h3>
                            <p class="font-rajdhani font-sembolid lg:text-2xl sm:text-xl text-lg">{{ project?.country }}</p>
                        </div>
                        <div class="flex flex-col space-y-6">
                            <h3 class="font-inter font-normal lg:text-base md:text-sm text-xs">Client</h3>
                            <p class="font-rajdhani font-sembolid lg:text-2xl sm:text-xl text-lg">{{ project?.client }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-20 relative z-50">
            <Footer />
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { projects } from '@/data/index';
export default {
    name: "ProjectDetail",
    async created() {
        this.project = await projects.EN.find((item) => item.id == this.$route.params.id)
    },
    data() {
        return {
            project: null
        }
    },
    components: {
        Navbar,
        Footer
    }
}
</script>