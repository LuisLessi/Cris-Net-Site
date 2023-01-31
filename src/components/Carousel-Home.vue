<template>

<div data-interval="3000" id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 first" src="../assets/container_home.jpg" alt="First slide">
    </div>
    <div class="carousel-item ">
      <img class="d-block w-100 second" src="../assets/container_home2.png" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 third" src="../assets/container_home3.jpg" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

</template>

<script>

</script>

<style scoped>
.carousel {
  max-width: 91%;
    margin-top: 9%;
margin-left: 4.5%;
} 
.carousel-inner{
  border-radius: 10px 10px 10px 10px;

}

.first{
  max-height: 587px;

}

.second{
  max-height: 587px;

}
.third{
  max-height: 587px;

}

@media only screen and (max-width: 1100px) {
  .carousel {
  max-width: 100%;
    margin-top: 40%;
margin-left: 0%;
} 

}
</style>