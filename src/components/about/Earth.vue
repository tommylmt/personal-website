<template>
    <DraggableBlock :style="{
        right: '-20px',
        top: '-25px',
        zIndex: 400,
        width: '600px'
    }" :hide-mobile="true">
        <div id="openstreetmap"></div>
        <div class="z-[999] absolute w-full left-0 bottom-0 p-3">
            <div class="rounded-lg w-full bg-white/70 backdrop-blur-lg p-5 dark:bg-slate-600/50">
                <p class="font-sans uppercase text-xs text-slate-500">Toulouse, France</p>
                <p class="text-4xl font-light text-slate-900 dark:text-slate-300" v-if="currentTime">
                    {{ currentTime }}
                </p>
                <i18n-d
                    tag="p"
                    class="text-xs font-light text-slate-400"
                    :value="currentDate"
                    format="long"
                ></i18n-d>
            </div>
        </div>
    </DraggableBlock>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import DraggableBlock from "@/components/layout/DraggableBlock.vue";
import * as L from "leaflet";

export default {
    components: { DraggableBlock },
    mounted() {
        this.initMap();
        this.setCurrentTime();
    },
    data() {
        return {
            currentTime: '',
            currentDate: new Date(),
        }
    },
    computed: {
        isDarkTheme() {
            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        },
        tileTheme() {
            return this.isDarkTheme
                ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
                : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png'
            ;
        },
        tileSettings() {
            return {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            }
        }
    },
    methods: {
        setCurrentTime() {
            setTimeout(() => {
                this.currentTime = new Intl.DateTimeFormat([], {
                    timeZone: 'Europe/Paris',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                }).format(new Date());
                this.currentDate = new Date();

                this.setCurrentTime();
            }, 1000);
        },
        initMap() {
            const map = L.map('openstreetmap', {
                trackResize: false,
                zoomControl: false,
            }).setView([43.6107, 1.4353], 17);
            map.invalidateSize();

            L.tileLayer(this.tileTheme, this.tileSettings).addTo(map);
            L.marker([43.6107, 1.4353], {
                title: 'Home',
                icon: L.divIcon({
                    className: 'p-2 rounded-full bg-blue-500 border-4 border-white shadow-md'
                })
            }).addTo(map);
        }
    }
}
</script>

<style>
#openstreetmap {
    width: 600px!important;
    height: 400px!important;
}
.leaflet-right {
    display: none;
}
</style>
