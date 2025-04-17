<template>
    <div class="rounded-md bg-red-100 text-red-600 text-sm p-5">
        <i class="ph-light text-3xl ph-warning-circle me-2"></i>
        <p>{{ $t(title) }}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>
