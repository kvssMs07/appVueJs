<template>
    <h1>Detail d'un article</h1>
    <p>{{ id }}</p>
    <button @click="goHome()">Retour</button>
</template>
<script>
    export default{
        name: 'Article',
        props: ['id'],
        methods: {
            goHome () {
                this.$router.push('/home')
            }
        },
    }
</script>