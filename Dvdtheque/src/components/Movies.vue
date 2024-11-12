<template>
    <div>
        <h2>Movies</h2>
        <div style="display: flex; flex-direction: column; gap: 50px;">
            <div v-for="(m, index) in movies" :key="index">
                <Movie :titre="m.titre" :annee="m.annee" :langue="m.langue" :acteurs="m.acteurs" :image='m.image' :id="m.id" />
            </div>
        </div>
    </div>
</template>

<script>
import Movie from './Movie.vue';
import films from '@/assets/data/films.json';

export default {
    name: 'Movies',
    components: {Movie},
    data() {
        return {
            movies: films
        }
    },
}

</script>