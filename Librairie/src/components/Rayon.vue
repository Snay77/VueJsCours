<template>
    <div>
        <H1>Vous avez liké : {{ totalLikes }} livre(s)</H1>
        <div v-for="(l, index) in livres" :key="index">
            <Livre :titre="l.titre" :auteur="l.auteur" :nbrpages="l.pages" :parution="l.parution" :like="l.like" @toggle-like="updateTotalLikes(index, $event)" />
        </div>
    </div>
</template>


<script>
import Livre from './Livre.vue'

export default {
    name: 'Rayon',
    components: {Livre},
    data() {
      return {
        livres: [
          { titre: 'Le Petit Prince', auteur: 'Antoine de Saint-Exupéry', pages: 96, parution: '1943', like: false },
          { titre: '1984', auteur: 'George Orwell', pages: 328, parution: '1949', like: false },
          { titre: 'Les Misérables', auteur: 'Victor Hugo', pages: 1488, parution: '1862', like: false },
        ],
        totalLikes: 0
      };
    },
    methods: {
      updateTotalLikes(index, isLiked) {
            this.livres[index].like = !this.livres[index].like
            // this.$set(this.livres, index, {
            //     ...this.livres[index],
            //     like: isLiked
            // });
            
            if (isLiked) {
                this.totalLikes += 1;
            } else {
                this.totalLikes -= 1;
            }
        }
    }
}
</script>
