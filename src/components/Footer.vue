<template>
  <footer class="site-footer">
    <div class="container">
      <div class="row ">
        <div class="col-sm-12 col-md-6">
          <h6>Sobre</h6>
          <p class="text-justify">Com grandes investimentos em equipamentos e infra-estrutura, a <i>CRIS.NET</i> foi fundada em
            2011 e iniciou suas operações em 2012. No final de 2012, passou a oferecer acesso wireless em Jaboticabal-SP
            e aos poucos expandiu sua rede para a cidade inteira. A companhia possui hoje uma rede totalmente baseada em
            tecnologia IP em Fibra óptica e rádio wireless. Seu foco é o mercado de transmissão de dados, coorporativo e
            residencial, para o qual oferece serviços inteligentes e tecnologia de última geração, tendo como
            diferenciais: qualidade, preços competitivos, agilidade e operação através de rede própria. A <i>CRIS.NET</i>
            oferece o serviço de conexão Internet Banda Larga a empresas, condomínios e residências, com todos os
            equipamentos inclusos e fornecidos pela <i>CRIS.NET</i>. </p>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6>Mapa do site</h6>
          <ul class="footer-links">
            <li><RouterLink to="/">Início</RouterLink></li>
            <li><a href="http://scanfcode.com/category/front-end-development/">Planos</a></li>
            <li><RouterLink to="/cobertura">Cobertura</RouterLink></li>
            <li><a href="http://scanfcode.com/category/android/">Duvidas ?</a></li>
          </ul>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6>Links úteis</h6>
          <ul class="footer-links">
            <li><a href="https://crisnet.com.br/central_assinante_web/login" target="_blank">Central do assianante</a>
            </li>
            <li><a href="http://ixcsoft.speedtestcustom.com/" target="_blank">Teste de velocidade</a></li>
            <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contrato</a></li>
          </ul>
        </div>
      </div>
      <hr>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
          <p class="copyright-text">Crisnet &copy; 2023 Todos os direitos reservados
          </p>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <ul class="social-icons">
            <li><a class="facebook" href="https://www.facebook.com/crisnetjab" target="_blank"><font-awesome-icon
                  :icon="['fab', 'facebook']" /></a></li>
            <li><a class="insta" href="https://www.instagram.com/crisnetjab/" target="_blank"><font-awesome-icon
                  :icon="['fab', 'instagram']" /></a></li>
            <li><a class="linkedin" href="https://www.linkedin.com/company/cris-net-telecomunica%C3%A7%C3%B5es/"
                target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" /></a></li>

          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { RouterLink } from 'vue-router';

</script>

<style scoped>
.site-footer {
  background-color: #26272b;
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
  background-color: #021c41;
}

.site-footer hr {
  border-top-color: #bbb;
  opacity: 0.5
}

.site-footer hr.small {
  margin: 20px 0
}

.site-footer h6 {
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px
}

.site-footer a {
  color: #737373;
}

.site-footer a:hover {
  color: #3366cc;
  text-decoration: none;
}

.footer-links {
  padding-left: 0;
  list-style: none
}

.footer-links li {
  display: block
}

.footer-links a {
  color: #737373
}

.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
  color: #d83636;
  text-decoration: none;
}

.footer-links.inline li {
  display: inline-block
}

.site-footer .social-icons {
  text-align: right
}

.site-footer .social-icons a {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6px;
  margin-right: 0;
  border-radius: 100%;
  background-color: #122641
}

.copyright-text {
  margin: 0
}
.row{
  margin-top: -10%
}
@media (max-width:991px) {
  .site-footer [class^=col-] {
    margin-bottom: 30px
  }
}

@media (max-width:767px) {
  .site-footer {
    padding-bottom: 0
  }

  .site-footer .copyright-text,
  .site-footer .social-icons {
    text-align: center
  }
}

.social-icons {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none
}

.social-icons li {
  display: inline-block;
  margin-bottom: 4px
}

.social-icons li.title {
  margin-right: 15px;
  text-transform: uppercase;
  color: #96a2b2;
  font-weight: 700;
  font-size: 13px
}

.social-icons a {
  background-color: #eceeef;
  color: #818a91;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all .2s linear;
  -o-transition: all .2s linear;
  transition: all .2s linear
}

.social-icons a:active,
.social-icons a:focus,
.social-icons a:hover {
  color: #fff;
  background-color: #29aafe
}

.social-icons.size-sm a {
  line-height: 34px;
  height: 34px;
  width: 34px;
  font-size: 14px
}

.social-icons a.facebook:hover {
  background-color: #3b5998
}

.social-icons a.insta:hover {
  background-color: #ff0175
}

.social-icons a.linkedin:hover {
  background-color: #0a66c2
}

@media (max-width:767px) {
  .social-icons li.title {
    display: block;
    margin-right: 0;
    font-weight: 600
  }
}
</style>