<template>
    <div>
      <h2>Filtre ton mot</h2>
      <input v-model="message" placeholder="Ecrit ton nom" />
      <p>Ton nom est : {{ message | voyelle | reverse | tiret }}</p>
    </div>
  </template>

<script>
export default {
  name: 'Filtre',
  data() {
    return {
      message: ''
    };
  },
  filters: {
    voyelle(value) {
        if (!value) return '';
        value = value.toString();
        const voyelles = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
        return value.split('').map(char =>
            voyelles.includes(char) ? char.toUpperCase() : char.toLowerCase()
        ).join('');
    },
    reverse(value) {
        if (!value) return '';
        value = value.toString();
        return value.split('').reverse().join('');
    },
    tiret(value) {
        if (!value) return '';
        value = value.toString();
        return value.split('').join('_');
    }
  }
};
</script>