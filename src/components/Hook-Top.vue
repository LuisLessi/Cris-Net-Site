<template>
    <a class="w-toplink pos_right  my-element active" href="#" title="Voltar ao Topo"><span>▲</span></a>
</template>

<script >
window.addEventListener('scroll', function() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  const target = document.querySelector('.my-element');
  if (scrollPosition > 600) {
    target.style.display = 'block';
  } else {
    target.style.display = 'none';
  }
});
</script>

<style>
.w-toplink:hover{
  background-color: #021c41 ;
}
.w-toplink.pos_right {
    left: 10px!important;
}
.w-toplink.active {
    transform: translate3d(0,0,0)!important;
}
.w-toplink.pos_right {
    right: 0;
}
.w-toplink:not(.w-btn) {
    text-align: center;
    border-radius: 0.3rem;
    color: #fff!important;
    line-height: 60px;
    height: 60px;
    width: 60px;
}
.w-toplink, .w-header-show {
    background: rgba(0,0,0,0.3);
}
.w-toplink {
    position: fixed!important;
    z-index: 99;
    bottom: 0;
    transform: translate3d(0,5rem,0)!important;
    margin: 30px;
}
a:-webkit-any-link {
  text-decoration: none;
}
a, button, input[type="submit"], .ui-slider-handle {
    outline: none!important;
}
a {
    color: var(--color-content-link);
}
a {
    text-decoration: none;
    background: none;
    transition-property: background,box-shadow,border,color,opacity,transform;
    transition-duration: 0.3s;
    -webkit-text-decoration-skip: objects;
}
* {
    box-sizing: border-box;
}
user agent stylesheet
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}

</style>