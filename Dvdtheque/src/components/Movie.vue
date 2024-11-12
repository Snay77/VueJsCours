<template>
    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h3>{{ titre }} ( {{ langue }} )</h3>
        <p>{{ acteurs }}</p>
        <p>{{ annee }}</p>
        <img :src=image style="height: 600px; width: auto;"></img>
        <router-link :to="'/movieAffiche/' + id">Aperçu</router-link>
    </div>
</template>




<script>
export default {
    name: 'Movie',
    props: ['id', 'titre', 'annee', 'langue', 'acteurs', 'image'],
}
</script>
