<template>
    <div class="rounded-md bg-red-100 text-red-600 dark:bg-red-400/10 text-sm p-5">
        <i class="ph-light text-3xl ph-warning-circle me-2"></i>
        <p>{{ $t(title) }}</p>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>
