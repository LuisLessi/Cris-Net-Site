<template>
    <section class="section mb-5">
        <div class="container">
            <br>
            <h1>Confira nossos planos</h1><br>
            <div>
                <img src="../assets/planos.png" class="img animate__animated animate__flipInX">

                <p>Não há mais espera para carregar páginas ou vídeos, não há mais buffering interminável. Com nossos
                    planos, você pode navegar, jogar, trabalhar e assistir aos seus conteúdos favoritos com facilidade e
                    rapidez.
                    Não perca mais tempo com conexões instáveis ou com velocidades lentas. Assine já um de nossos planos
                    de internet e desfrute de uma conexão de qualidade a preços acessíveis.
                </p>
            </div>
        </div>
    </section>
    <section>
        <Card_Planos/>

    </section>
</template>

<script>
import Card_Planos from '../components/Card-Planos.vue';
export default {
    mounted() {
        window.scrollTo(0, 0)
    },
    components: {
        Card_Planos,
    }
}
</script>

<style>
.section {
    background-color: #021c41;
    height: 350px;
    margin-bottom: -8.5%;
}

section h1 {
    margin-top: 0%;
    text-decoration: underline;

}

.container h1,
p {
    font-family: inherit;
    color: white;
}

.container {
    margin-left: 16%;

}

.container p {
    font-size: 21px;
    color: rgb(202, 190, 190);
}
.img {
    float: right;
    border: transparent thin solid;
    padding: 5px;
    margin: -70px 10px 0px 0px;
    max-width: 686px;
    max-height: 300px;
}

@media only screen and (max-width: 1100px) {
    .section {
        height: 640px;
        margin-top: 40%;
        margin-bottom: -22.4%;

    }
    .img {
        float: right;
        border: transparent thin solid;
        padding: 5px;
        max-width: 686px;
        max-height: 300px;
        margin-right: 7%;
        margin-top: -3%;
    }
}
</style>