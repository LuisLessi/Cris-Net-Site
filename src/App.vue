<template>
  <Navbar/>
  <Hook/>

  <IconWhats/>
  <RouterView />
  <Footer/>
</template>

<script>
import './styles/global.css'
import { RouterLink, RouterView } from 'vue-router'
import HomeView from "./views/HomeView.vue";
import Planos from "./views/Planos.vue";
import Navbar from './components/Navbar.vue';
import IconWhats from "./components/Icon-whats.vue"
import Hook from "./components/Hook-Top.vue"
import Footer from "./components/Footer.vue"
export default{
  
  components: {
    HomeView,
    Navbar,
    IconWhats,
    Footer,
    Hook,
    Planos
  },
}
</script>

<style>
#nav a.router-link-exact-active{
  color: #fff;
    background: #d83636;
}
.container{
  margin-left: 16%;

}
@media only screen and (max-width: 1100px) {
.container{
  margin-left: 0%;
}
}
</style>
