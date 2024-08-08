<template>
    <div class="relative min-h-screen overflow-hidden" :class="[getMode ? 'bg-black' : 'bg-white']">
        <Navbar link="Project" />
        <div class="px-10 py-40 relative z-20">
            <div class="flex items-center">
                <div class="flex-1 flex flex-col space-y-6">
                    <img class="w-full object-cover" src="/imgs/project-6.png">
                    <div class="grid grid-cols-3 gap-x-6">
                        <img class="w-[250px] h-[240px] object-cover" src="/imgs/project-1.png">
                        <img class="w-[250px] h-[240px] object-cover" src="/imgs/project-2.png">
                        <img class="w-[250px] h-[240px] object-cover" src="/imgs/project-3.png">
                    </div>
                </div>
                <div class="flex-1 flex flex-row">
                    <div class="flex-1 flex flex-col">
                        <div class="w-full e">

                        </div>
                    </div>
                    <div class="flex-1">

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
    name: "ProjectDetail",
    components: {
        Navbar,
    },
    computed: {
        ...mapGetters(['getMode']),
    },
}
</script>