<template>
    <div class="item">{{name}}</div>
</template>
<script>
    import axios from 'axios';  
    export default{
        props: ['name'],
    }
    
</script>
<style>
    .item{
        background-color: #fff;
        /* margin: 10px; */
        padding : 15px 0;
        transition: 0.2s;
        cursor: pointer;
        height: 20em;
        width: 20em;
        display: block;
        margin-left: 0;
        margin-right: 0;
        width: 100%;
        border-radius: 0 0 1em 1em;
    }
    .item:hover{
        background-color: rgb(32,123,241);
        color: white;
    }
    .item:active{
        transition: 0.1s;
        transform: scale(0.9);
    }
</style>
