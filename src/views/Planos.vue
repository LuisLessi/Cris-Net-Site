<template>
<section class="section mb-5">
        <div class="container">
            <br>
            <h1>Confira nossos planos</h1><br>
            <div>
                <p>Temos planos compatíveis  
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

</template>

<script>
export default{
    mounted() { 
        window.scrollTo(0,0)
    }
}
</script>

<style>
.section {
    background-color: #021c41;
    height: 430px;
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
.container{
  margin-left: 16%;

}

.container p {
    font-size: 21px;
    color: rgb(202, 190, 190);
}

@media only screen and (max-width: 1100px) {
    .section {
    height: 800px;
    margin-top: 40%;
    margin-bottom: -22.4%;

    }
}
</style>