<template>
    <header>
        <h1 id="mainTitle">Lead wizard developer</h1>
    </header>
    <section>
        <aside>
            <Transition name="card" appear>
                <img :src="image" alt="Welcome to my kingdom" width="400">
            </Transition>
        </aside>
        <article>
            <p>Hello there, I'm <span @mouseover="image = me" @mouseleave="image = defaultImage" class="link">Thomas</span>, a french tech lead currently based in Toulouse, France.</p>
            <p>I build complex apps using Vue.js, Symfony, Docker and Aws.</p>
            <p>I also have skills in solution architecturing</p>
            <p>My universe is about metal stuff, Doom music, Skateboard, guitars, beers and tattoos</p>
            <p>Feel free to contact me if my work sparks your interest.</p>
        </article>
    </section>
</template>

<script>
export default {
    data() {
        return {
            defaultImage: '/img/main_illustration.jpg',
            image: '/img/main_illustration.jpg',
            me: '/img/me.jpg'
        }
    }, 
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/_colors";
@import "@/assets/scss/_fonts";

header {
    text-align: center;

    h1 {
        &#mainTitle {
            color: $light;
            font-size: 120px;
            font-style: normal;
            font-family: $antikern;
            letter-spacing: 0.3rem;
            text-shadow: 2px 2px #F97300, 4px 4px #E9B824;
        }
    }
}

.link {
    cursor: pointer;
    transition: color .3s;

    &:hover {
        color: $light;
    }
}

.card-enter-active,
.card-leave-active {
  transition: all .5s;
  bottom: 0;
}
.card-enter-from,
.card-leave-to {
  bottom: 100%;
}

section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;

    aside {
        flex: 0 0 50%;
        text-align: center;
        position: relative;

        img {
            width: 600px;
            border-radius: 25px;
            position: relative;
        }
    }
    article {
        color: rgba($light, .8);
        font-size: 40px;
        line-height: 50px;
        letter-spacing: -2px;

        p {
            font-family: $cloister;
        }
    }
}
</style>