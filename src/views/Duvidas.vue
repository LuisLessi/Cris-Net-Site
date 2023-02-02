<template>
    <section class="section">
        <div class="container">
            <br>
            <h1>Dúvidas Frequentes</h1><br>
            <div>
                <img src="../assets/duvida.png" class="img">
                <p>Reunimos em alguns tópicos algumas das questões mais frequentes feitas pelos nosso clientes. Caso a
                    sua dúvida não foi sanada ou não está em algum desses tópicos, favor entrar em contato diretamente
                    com nossa equipe. 
                </p>
                <p style="font-size: 31px;">
                    📞 (55) 16 3203-3699
                </p>
                <p style="font-size: 31px;">
                    📲 (55) 16 99711-5735
                </p>
                <p style="font-size: 31px;">
                    📨 sac@crisnet.com.br
                </p>
            </div>
            <div>
            </div>
        </div>
    </section>
    <section class="section2" >

        <div class="container" style="text-align:center">
            <br>
           <Lista/>
        </div>
    </section>

</template>

<script>
import Lista from '../components/Lista-Duvidas.vue';

export default {
    mounted() {
        window.scrollTo(0, 0)
    },
    components: {
        Lista
    }
}
</script>

<style scoped>
.section {
    background-color: #021c41;
    height: 430px;
    margin-bottom: -8.5%;

}
.section2 {
    background-color: #d83636;
    height: 100%;
    padding-bottom: 1%;

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

.container p {
    font-size: 21px;
    color: rgb(202, 190, 190);
}

.contacts{
    font-size: 51px;

}

section img {
    float: right;
    border: transparent thin solid;
    padding: 5px;
    margin: -70px 10px 0px 0px;
    max-width: 686px;
    max-height: 300px;
    margin-top: 1%;
}

@media only screen and (max-width: 1100px) {
    .section {
    height: 800px;
    margin-top: 40%;
    margin-bottom: -22.4%;

    }
}
</style>