<template>
    <div class="w-full h-full fixed z-10">
        <svg viewBox="0 0 1918 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <!-- Glow Filter Definition -->
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blurred" />
                    <feFlood flood-color="#FF630D" result="color" />
                    <feComposite in="color" in2="blurred" operator="in" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            <mask id="path-1-inside-1_963_1432" fill="white">
                <path
                    d="M446.035 -730L1917.42 -74.937L1812.03 161.804L1614.57 605.317L1377.83 499.92L379.926 55.6517L71.7396 747.894L-165.001 642.497L143.186 -49.7454L143.185 -49.7455L248.583 -286.486L1483.23 263.179L1575.28 56.4062L340.638 -493.259L446.035 -730ZM274.02 837.947L497.488 335.997L734.229 441.394L1359.04 719.563L1529.86 795.609L1306.39 1297.56L1069.65 1192.16L1187.72 926.952L628.831 678.135L510.76 943.344L274.02 837.947Z" />
            </mask>
            <path
                d="M446.035 -730L1917.42 -74.937L1812.03 161.804L1614.57 605.317L1377.83 499.92L379.926 55.6517L71.7396 747.894L-165.001 642.497L143.186 -49.7454L143.185 -49.7455L248.583 -286.486L1483.23 263.179L1575.28 56.4062L340.638 -493.259L446.035 -730ZM274.02 837.947L497.488 335.997L734.229 441.394L1359.04 719.563L1529.86 795.609L1306.39 1297.56L1069.65 1192.16L1187.72 926.952L628.831 678.135L510.76 943.344L274.02 837.947Z"
                stroke="#FF630D" stroke-width="4" fill="none" filter="url(#glow)" mask="url(#path-1-inside-1_963_1432)"
                class="transition-opacity duration-1000 ease-in opacity-0 animated-path" />
        </svg>
    </div>
</template>

<script>
export default {
    name: "Background",
    mounted() {
        this.animatePath();
    },
    methods: {
        animatePath() {
            const pathElement = this.$el.querySelector('.animated-path');
            pathElement.style.opacity = 0;
            setTimeout(() => {
                pathElement.style.opacity = 1;
            }, 200);
        }
    }
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom glow effect */
.animated-path {
    animation: glow-animation 2s ease-in-out infinite;
}

@keyframes glow-animation {
    0% {
        filter: brightness(1.2) blur(1px);
    }

    50% {
        filter: brightness(1.8) blur(3px);
    }

    100% {
        filter: brightness(1.2) blur(1px);
    }
}
</style>