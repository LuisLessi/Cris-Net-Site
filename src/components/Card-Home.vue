<template>
    <div class='row mt-5 mb-5'>
        <div class="card col-sm-6 zoom " style="width: 30rem;">
            <img src="../assets/img_card2.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                
            </div>
        </div>

        <div class="card col-sm-6 zoom " style="width: 30rem;">
            <img src="../assets/img_card1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
               
            </div>
        </div>

        <div class="card col-sm-6 zoom " style="width: 30rem;">
            <img src="../assets/img_card3.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                
            </div>
        </div>
    </div>
</template>


<style scoped>
.row{
    margin-right: -0%;
    margin-left: 7%;
}
.card{
    background-color: #E5E5E5;
    border: none;
}
.zoom {
    overflow: hidden;
}

.zoom img {
    max-width: 100%;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}

.zoom:hover img {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    cursor: pointer;
}
@media only screen and (max-width: 1100px) {
    .row{
        margin-left: 0%;
    }
}
</style>
