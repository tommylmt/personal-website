<template>
    <div class="flex bg-white border border-slate-100 shadow-lg shadow-slate-100 rounded-xl my-10 mx-auto w-7/12">
        <div class="w-96 shrink-0">
            <img src="../../assets/img/about_me.png" alt="Thomas Lamothe" class="rounded-s-xl">
        </div>
        <div class="grow">
            <div class="p-10">
                <h1 class="font-sans font-extrabold text-5xl text-slate-900">{{ $t('about.me.title') }},</h1>

                <p class="font-sans mt-3 text-slate-500">{{ $t('about.me.sentence') }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>