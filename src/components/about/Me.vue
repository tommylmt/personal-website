<template>
    <div class="flex bg-white border border-slate-100 shadow-lg shadow-slate-100 rounded-xl my-10 mx-auto w-7/12">
        <div class="w-96 shrink-0">
            <img src="../../assets/img/about_me.png" alt="Thomas Lamothe" class="rounded-s-xl">
        </div>
        <div class="grow">
            <div class="p-10">
                <h1 class="font-sans font-extrabold text-5xl text-slate-900">{{ $t('about.me.title') }},</h1>

                <p class="mt-4 main-text">{{ $t('about.me.introduction') }}</p>
                <i18n-t keypath="about.me.working" class="main-text" tag="p">
                    <a :href="iwitLink" target="_blank" class="me-link">Iwit Systems</a>
                </i18n-t>
                <i18n-t keypath="about.me.whatido" tag="p" class="main-text">
                    <a href="" target="_blank" class="me-link">Symfony</a>
                    <a href="" target="_blank" class="me-link">Vue.js</a>
                    <a href="" target="_blank" class="me-link">Docker</a>
                    <a href="" target="_blank" class="me-link">AWS</a>
                </i18n-t>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            iwitLink: 'https://iwit-systems.fr'
        }
    }
}
</script>