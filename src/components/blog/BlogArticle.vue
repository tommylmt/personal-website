<script lang="ts" setup>
import ContainerLayout from '@/components/layout/ContainerLayout.vue'
</script>

<template>
    <ContainerLayout>
        {{ $route.params.slug }}
    </ContainerLayout>
</template>
