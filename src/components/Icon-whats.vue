<template>
    <a href="//wa.me/5516997115735" target="_blank" rel="Numero" title="Entre em contato">
       <font-awesome-icon class="whats-link" :icon="['fab', 'whatsapp']"/>
   </a>

</template>

<script>
export default {
  name: 'IconWhats',

}
</script>

<style scoped>
.whats-link{
position: fixed;
width: 80px;
height: 80px;
bottom: 40px;
right: 40px;
z-index: 100;
background-color: #25d366;
color: #fff;
border-radius: 50px;
text-align: center;
box-shadow: 1px 1px 2px #888;

}
.whats-link:hover{
background-color: rgba(0,0,0,0);
color: #25d366;
box-shadow: inset 0 0 0 3px #009c3d;
}
@media only screen and (max-width: 1024px) {
.whats-link{
position: fixed;
width: 65px;
height: 65px;
bottom: 40px;
right: 30px;
z-index: 100;
background-color: #25d366;
color: #fff;
border-radius: 50px;
text-align: center;
box-shadow: 1px 1px 2px #888;
}
}
</style>