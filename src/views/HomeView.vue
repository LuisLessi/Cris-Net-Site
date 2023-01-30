<template>
    <section>
        <Carousel_home/>
    
    </section>
</template>

<script>
import Carousel_home from '../components/Carousel-Home.vue'

export default {
    mounted() {
        window.scrollTo(0, 0)
    },
    components: {
        Carousel_home
    },
}
</script>

<style>
.container {
    margin-top: 8.5%;
    margin-left: 2%;
}

.image-principal {
    background-size: cover;
    max-width: 124%;
    height: 100%;
    border-radius: 10px 10px 10px 10px;

}

@media only screen and (max-width: 1100px) {
    .container {
        margin-top: 22.5%;
        margin-left: 0%;
    }

    .image-principal {
        background-size: cover;
        max-width: 115%;
        height: 100%;
        border-radius: 10px 10px 10px 10px;

    }
}
</style>