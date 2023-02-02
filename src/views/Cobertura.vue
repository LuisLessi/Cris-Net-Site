<template>
    <section class="section mb-5">
        <div class="container">
            <br>
            <h1>Nossa área de cobertura</h1><br>
            <div>
                <img src="../assets/cobertura_img.png" class="img">
                <p>Oferecemos uma ampla área de cobertura, garantindo acesso estável e confiável à internet para nossos
                    clientes. Nossos serviços de internet estão disponíveis em regiões urbanas e rurais, com a
                    utilização de tecnologias avançadas e infraestrutura sólida. Verifique se sua localização está
                    dentro da nossa área de cobertura e experimente a velocidade e qualidade que só nós podemos
                    oferecer.</p>

            </div>
            <div>
            </div>
        </div>
    </section>
    <div class="container maps">
        <iframe src="https://www.google.com/maps/d/embed?mid=1KxHJgOZKJGFSvPdH4CHgWB90SAGQEcc&ehbc=2E312F" width="640"
            height="480"></iframe>
    </div>
</template>

<script>
export default {
    mounted() {
        window.scrollTo(0, 0)
    }
}
</script>

<style scoped>
.section {
    background-color: #021c41;
    height: 400px;

}

h1 {
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

.img {
    float: right;
    border: transparent thin solid;
    padding: 5px;
    margin: -70px 10px 0px 0px;
    max-width: 686px;
    max-height: 300px;
}

.maps {
    margin-left: -1%;
    margin-top: -2.9%;
}

iframe {
    width: 1681px;
}

@media only screen and (max-width: 1100px) {
    .img {
        float: right;
        border: transparent thin solid;
        padding: 5px;
        max-width: 686px;
        max-height: 300px;
        margin-right: 7%;
        margin-top: -3%;
    }

    .section {
        height: 780px;
        margin-top: 40%;

    }

    .maps {
        margin-left: 0%;
        margin-top: -13%;
    }

    iframe {
        margin-left: -5%;
        width: 107.5%;

    }
}
</style>