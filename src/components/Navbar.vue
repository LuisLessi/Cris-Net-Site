<template>
     <header>
        <div class="logo">
            <router-link to="/"><img src="../assets/logo.jpg" alt=""></router-link>
        </div>
        <input type="checkbox" id="nav_check" hidden>
        <nav>
            
            <ul>
                <li>
                    <a href="" class="/">Home</a>
                </li>
                <li>
                   <a href="">Products</a>
                </li>
                <li>
                    <a href="">Features</a>
                </li>
                <li>
                    <a href="">Pricing</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </nav>
        <label for="nav_check" class="hamburger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </label>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
    
}
</script>

<style scoped>

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: "Poppins";
}
body {
    background: #e3e9f7;
}
img {
    width: 100%;
}
header {
    width: 80%;
    height: 120px;
    background: #fefefe;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    border-radius: 10px 10px 10px 10px;
    margin: 0 auto;
    margin-top: 10px;
    margin-left: 10%;
    position: fixed;

}
.logo {
    max-width:100px;
    margin-top: 0px;
    border-radius: 20%;
    cursor: pointer;
}
.logo img{
    border-radius: 50%;

}
nav .logo {
    display: none;
}
nav ul {
    display: flex;
}
nav ul li a {
    color: #212526;
    display: block;
    margin: 0 2px;
    padding: 8px 18px;
    transition: 0.2s;
    border-radius: 30px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 290px;

}



nav ul li a:hover {
    color: white;
    background: #d83636;
}
nav ul li a.active {
    color: #fff;
    background: #d83636;
}
.hamburger {
    display: none;
    height: fit-content;
    cursor: pointer;
    padding: 3px 8px;
    border-radius: 5px;
    transition: 0.2s;
}
.hamburger:hover {
    background: #f6f4ff;
}
.hamburger .line {
    width: 30px;
    height: 2px;
    margin: 6px 0;
    background: #212526;
}
@media only screen and (max-width: 1100px) {

    header {
        width: 90%;
        padding: 0 20px;
        margin-left: 3%;

    }
    nav {
        position: absolute;
        left: -300px;
        top: 0;
        z-index: 999;
        width: 280px;
        height: 100vh;
        background-color: #fefefe;
        transition: 0.2s;
        box-shadow: 2px 0 20px 0 rgba(0, 0, 0, 0.05);
    }
    #nav_check:checked ~ nav {
        left: 0;
    }
    nav .logo {
        display: block;
        height: 70px;
        display: flex;
        align-items: center;
        margin-left: 30px;
    }
    nav ul {
        display: block;
        padding: 0 20px;
        margin-top: 30px;
    }
    nav ul li a {
        margin-bottom: 5px;
        padding: 15px;
        border-radius: 5px;
    }
    .hamburger {
        display: block;
    }
}

</style>