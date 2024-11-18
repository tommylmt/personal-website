<template>
    <div class="flex items-center" id="dragzone">
        <Map />
        <MyLife />
        <Image />
    </div>
</template>

<script>
import Map from "@/components/about/Map.vue";
import MyLife from "@/components/about/MyLife.vue";
import Image from "@/components/about/Image.vue";

export default {
    components: {
        Image,
        MyLife,
        Map
    },
    data() {
        return {
            
        }
    },
    computed: {
        documentSize() {
            return document.body.clientWidth;
        },
        documentHeight() {
            return this.$refs.dragzone.clientHeight;
        }
    },
    methods: {
        position() {
            let divsize = ((Math.random() * 100) + 50).toFixed(), // Check element
                posx = (Math.random() * (this.documentSize - divsize)).toFixed(),
                posy = (Math.random() * (this.documentHeight - divsize)).toFixed()
            ;

            $('#').css({
                'width': divsize + 'px',
                'height': divsize + 'px',
                'position': 'absolute',
                'left': posx + 'px',
                'top': posy + 'px'
            });
        }
    }
}
</script>
