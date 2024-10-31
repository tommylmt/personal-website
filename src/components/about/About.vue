<template>
    <Me />
    <div class="text-center">
        <h3 class="text-slate-200 text-9xl font-gothic">{{ $t('about.theEnd') }}</h3>
    </div>
</template>

<script>
import Me from '@/components/about/Me.vue'

export default {
    components: {
        Me
    }
}
</script>
