<template>
    <div class="fixed bottom-10 right-5">
        <div class="bg-slate-100 shadow-md w-10 h-10 rounded-full cursor-pointer">
            <select v-model="$i18n.locale">
                <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {

}
</script>