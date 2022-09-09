<template>
    <h1>Detail de article {{ id }}</h1>
    <div class="details">
        <section>
            <div class="ListeDisplay">
                <div class="cercle">{{article.title[0]}}</div>
                <h4>{{article.title}}</h4>
            </div>
            <div class="datailBVody">{{article.body}}</div>
        </section>
    </div>
    <h3>Commentaires</h3>
    <section>
        <div class="details" v-for="(c, index) in comments" :key="index">
            <h5>{{c.email}}</h5>
            <p>{{c.body}}</p>
        </div>
    </section>
    <button @click="goHome()">Retour</button>
</template>
<script>
    import axios from 'axios';
    export default{
        name: 'Article',
        props: ['id'],
        methods: {
            goHome () {
                this.$router.push('/home')
            },
            hideItem(){
                console.log('hide items');
                this.showItem = false;
            }
        },
        data: () => {
            return {
                comments: [],
                article: []
            }
        }, 
        created() { 
            setTimeout(() => {
                axios.get('https://jsonplaceholder.typicode.com/posts/'+this.id+'/comments').then(response => {
                    this.comments = response.data
                }),
                axios.get('https://jsonplaceholder.typicode.com/posts/'+this.id).then(response2 => {
                    this.article = response2.data
                    console.log(this.article);
                })
            }, 500)
        }
    }
</script>
<style>
    section{
        margin: 1em;
        padding: 1em;
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
        display:flex;
        justify-content: center;
        align-items: center;
    }
</style>