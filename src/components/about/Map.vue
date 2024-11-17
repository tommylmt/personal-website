<template>
    <DraggableBlock>
        <div id="map"></div>
        
        <div class="z-[999] absolute w-full left-0 bottom-0 p-3">
            <div class="rounded-lg w-full bg-white/70 backdrop-blur p-5">
                <p class="font-sans uppercase text-xs text-slate-500">Toulouse, France</p>
                <p class="text-4xl font-light text-slate-900" v-if="currentTime">
                    {{ currentTime }}
                </p>
                <p class="text-xs font-light text-slate-400">{{ currentDate }}</p>
            </div>
        </div>
    </DraggableBlock>
</template>

<style>
#map {
    width: 600px!important;
    height: 400px!important;
}
</style>

<script>
import 'leaflet/dist/leaflet.css';
import DraggableBlock from "@/components/layout/DraggableBlock.vue";
import L from 'leaflet';

export default {
    components: { DraggableBlock },
    mounted() {
        this.initMap();
        this.setCurrentTime();
    },
    data() {
        return {
            currentTime: '',
            currentDate: '',
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
                this.currentDate = new Intl.DateTimeFormat([], {
                    timeZone: 'Europe/Paris',
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric'
                }).format(new Date());

                this.setCurrentTime();
            }, 1000);
        },
        initMap() {
            const map = L.map('map', {
                trackResize: false,
                zoomControl: false,
            }).setView([43.6128, 1.4359], 17);
            map.invalidateSize();

            L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png',  {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            }).addTo(map);

            L.marker([43.6128, 1.4359], {
                icon: L.divIcon({
                    className: 'p-2 rounded-full bg-blue-500 border-4 border-white shadow-md'
                })
            }).addTo(map);
        }
    }
}
</script>
