<template>
    <div class="loader" v-if="loading">
    </div>
</template>

<script>
export default {
    props: {
        loading: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style>
.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(57, 57, 57, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}
</style>