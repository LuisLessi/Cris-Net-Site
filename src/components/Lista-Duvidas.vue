<template>
    <div>
        <ul>
            <li>
                <p class="title">Estou sem Internet. O que devo fazer?</p>
                <p>Primeiramente, certifique-se que seu roteador e sua onu estão ligados. Caso seus equipamentos estejam
                    ligados, tire-os da tomada por aproximadamente 2 minutos. Se após ligar os equipamentos seu sinal
                    não
                    for reestabelecido em até 5 minutos, entre em contato com nossa central de atendimento pelo
                    3203-3699 ou
                    também pelo 99711-5735 esse é WhatsApp.</p>
            </li>
            <li>
                <p class="title">Quais os horários de atendimento ao suporte técnico?</p>
                <p>Oferecemos Suporte Técnico Online gratuito, disponível todos os dias da semana das 8h às 18h, sábados
                    das 8h as 12h. Não atendemos aos domingos e feriados.</p>
            </li>
            <li>
                <p class="title">Quais as formas de pagamento de mensalidades?</p>
                <p>Os pagamentos podem ser feitos através de boleto bancário, PIX, cartão de crédito e débito em conta.
                </p>
            </li>
            <li>
                <p class="title">O tempo pode prejudicar o sinal da internet via fibra, como em dias de chuva, por
                    exemplo?
                </p>
                <p>Não, os dados transmitidos por luz da fibra óptica são imunes às adversidades de chuvas, raios e
                    ventos, não impactando na qualidade do sinal.</p>
            </li>
            <li>
                <p class="title">Existe fibra óptica em todas as ruas?</p>
                <p>Não. Porém, nossa rede de fibra óptica está em plena expansão. Caso tenha interesse neste serviço,
                    preencha o formulário de contato e aguarde o contato da nossa equipe comercial.</p>
            </li>
            <li>
                <p class="title">Não recebi a fatura desse mês, como faço para pagá-la?</p>
                <p>A 2ª via da fatura está disponível na Área do Cliente. Você também pode solicitar por e-mail, pelas
                    redes sociais ou retirá-la na unidade da sua região. Não esqueça de manter seu cadastro sempre
                    atualizado.</p>
            </li>
            <li>
                <p class="title">Minha internet vai ter velocidade reduzida quando atingir o limite do pacote/plano?</p>
                <p>Não. Nossos serviços não funcionam como um pacote de dados. Oferecemos uma conexão estável e com uso
                    ilimitado, onde a velocidade vai ser constante 24 horas por dia, 7 dias por semana e sem limite de
                    download/upload.</p>
            </li>

        </ul>
    </div>
</template>

<script>

</script>

<style scoped>
h1 {
    text-shadow: 1px 1px 1px rgba(0, 0, 0, .25);
    text-decoration: underline;
}
p{
    font-family: inherit;
    font-size: 21px;
    color: rgb(202, 190, 190);
}
ul li {
    height: 3rem;
    padding: .75rem;
    transition: all .5s ease;
    transform: skew(3deg);
    overflow: hidden;
    margin-bottom: 1%;
    margin-left: -5%;

}

ul li:hover {
    padding-bottom: 8.4rem;
    transition: all .5s ease;

}

ul li:nth-child(3n + 1) {
    background: #021c41;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .5);

}

ul li:nth-child(3n + 2) {
    background: #021c41;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .5);

}

ul li:nth-child(3n + 3) {
    background: #021c41;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .5);
}

.title {
    margin-top: -0.7%;
    color: white;
    font-weight: bold;

}

@media only screen and (max-width: 1100px) {
    ul li {
        margin-left: -10%;
        padding: .75rem;
    }
    ul li:hover {
        padding-bottom: 29rem;

    }
}
</style>
