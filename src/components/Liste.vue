<template>
    <div class="list" v-for="(item, index ) in items" :key="index">
        <div class="ListeDisplay">
            <div class="cercle" v-text="item.title[0]" :key="index"></div>
            <h4 v-text="item.title" :key="index"></h4>
        </div>
        <Item :name="item.body" :key="index" @click="ShowArticle(index)"/>
    </div>
</template>
<script>
    import axios from 'axios';  
    import Item from './Item.vue';
    export default{
        components: {
            Item
        },
        data: () => {
        return {
                items: []
            }
        },
        mounted() {
            axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            this.items = response.data
            });
        },
        methods: {
            ShowArticle (index) {
                this.$router.push({name: 'Article', params : { id : index}})
            },
        }
    }
</script>
<style>
    .list{
        margin-top: 10px;
        background-color: rgb(233,233,233);
        border-radius: 1em;
    }
    .cercle {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        background: yellow;
        margin: 5px
    }
    .ListeDisplay{
        display: flex;
    }
    h4{
        width: 22em;
    }
</style>