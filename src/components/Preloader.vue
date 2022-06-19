<template>
    <div class="preloader-wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
    </div>
</template>

<style scoped>
    /*#007bff, #efb73e, #e95420, #e83e8c, #df382c;*/

    .preloader-wrapper{
        display:flex;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: #333;
        z-index: 999;
    }

    .circle{
        height: 75px;
        width: 75px;
        margin-right: 10px;
        background-color: #fafafa;
        border-radius: 50%;
        display: block;
        margin-top: 45vh;
    }

    .circle:nth-child(1){
        background-color: #efb73e;
        animation: left 1s infinite;
    }
    .circle:nth-child(2){
        background-color: #007bff;
    }
    .circle:nth-child(3){
        background-color: #df382c;
        animation: right 1s infinite 0.5s;
    }

    @keyframes left {
        40% {transform: translateX(-60px);}
        50% {transform: translateX(0px);}
    }
    @keyframes right {
        40% {transform: translateX(60px);}
        50% {transform: translateX(0px);}
    }
</style>