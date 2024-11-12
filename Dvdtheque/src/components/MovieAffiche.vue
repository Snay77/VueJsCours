<template>
    <div style="display: flex; justify-content: center; align-items: center; padding-top: 100px;">
      <img :src="movie.image" alt="Movie Poster" style="height: 600px; width: auto;" />
    </div>
  </template>
  
  <script>
  import films from '@/assets/data/films.json';
  
  export default {
    name: 'MovieAffiche',
    data() {
      return {
        movie: null, // Le film sera chargé ici
      };
    },
    created() {
      const movieId = this.$route.params.id;
      this.movie = films.find((film) => film.id === parseInt(movieId));
    },
  };
  </script>
  