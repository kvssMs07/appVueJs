<template>
    <h1>Bienvenue dans la page d'accueil</h1>
    <div class="display">
        <ListeArticles />
    </div>
</template>
<script>
    export default {

    }
</script>
<style>
    .display{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 10px;
    }
</style>