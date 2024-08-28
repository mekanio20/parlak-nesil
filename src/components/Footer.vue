<template>
    <div class="py-10 border-t border-m_gray-500">
        <div class="container flex md:flex-row flex-col md:space-y-0 space-y-10 items-center justify-between">
            <div class="flex flex-col items-center">
                <p class="md:mb-4 mb-2 font-rajdhani font-medium lg:text-xl text-lg text-m_gray-600 uppercase">{{ $t('footer.title1') }}</p>
                <a href="tel:+99362410579" class="font-rajdhani font-medium lg:text-2xl sm:text-xl text-lg text-m_gray-700">+993 62 410579</a>
            </div>
            <div class="flex flex-col items-center">
                <p class="md:mb-4 mb-2 font-rajdhani font-medium lg:text-xl text-lg text-m_gray-600 uppercase">{{ $t('footer.title2') }}</p>
                <a href="https://www.google.com/maps?q=37.919833,58.353333" class="font-rajdhani font-medium lg:text-2xl sm:text-xl text-lg text-m_gray-700">Aşgabat ş. Bitarap
                    Türkmenistan
                    şaýoly, 163</a>
            </div>
            <div class="flex flex-col items-center">
                <p class="md:mb-4 mb-2 font-rajdhani font-medium lg:text-xl text-lg text-m_gray-600 uppercase">{{ $t('footer.title3') }}</p>
                <a href="mailto:parlaknesil@gmail.com" class="font-rajdhani font-medium lg:text-2xl sm:text-xl text-lg text-m_gray-700">
                    parlaknesil@gmail.com</a>
            </div>
        </div>
    </div>
</template>

<script>
export default { name: "Footer" }
</script>