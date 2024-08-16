<template>
    <svg @click="toggle" :class="{ 'x-shape': isOpen }" width="50" height="50" viewBox="0 0 22 25" fill="none"
        xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
        <path :d="def_ust_cizgi" stroke="white" stroke-width="1.5" stroke-linecap="round" class="line top" />
        <path :d="def_alt_cizgi" stroke="white" stroke-width="1.5" stroke-linecap="round" class="line bottom" />
        <path d="M1 7.5H21" stroke="white" stroke-width="1.5" stroke-linecap="round" class="line middle" />
    </svg>
</template>

<script>
export default {
    name: 'Burger',
    data() {
        return {
            isOpen: false,
            ust_duz_cizgi: 'M1 1H21',
            alt_duz_cizgi: 'M21 14H1',
            gec_ust_cizgi: 'M1 1H4.75M21 1H9.75',
            gec_alt_cizgi: 'M21 14H17.25M1 14H12.25',
            def_ust_cizgi: 'M1 1H4.75M21 1H9.75',
            def_alt_cizgi: 'M21 14H17.25M1 14H12.25'
        };
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen;
            if (this.isOpen) {
                this.def_ust_cizgi = this.ust_duz_cizgi
                this.def_alt_cizgi = this.alt_duz_cizgi
            } else {
                this.def_ust_cizgi = this.gec_ust_cizgi
                this.def_alt_cizgi = this.gec_alt_cizgi
            }
        },
    },
};
</script>

<style scoped>
.line {
    transition: all 0.5s ease;
}

.x-shape .top {
    transform: rotate(45deg) translate(6px, -5px);
}

.x-shape .bottom {
    transform: rotate(-45deg) translate(-7px, 3px);
}

.x-shape .middle {
    opacity: 0;
}
</style>