<template>
  <b-nav tabs>
    <b-nav-item disabled class="mt-2"><h3 id="logo">BIG SCREEN Quiz</h3></b-nav-item>
    <b-nav-item disabled class="mt-1">
      <b-button variant="secondary">
        correct ({{ correctAnswers }})
        &nbsp;  | &nbsp; total
        <b-badge variant="light" class="lead">{{ totalAnswers }}</b-badge>
      </b-button>
    </b-nav-item>
  </b-nav>
</template>

<script>
export default {
  props: {
    correctAnswers: Number,
    totalAnswers: Number,
  },
};
</script>


<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

  #logo{
    font-family: 'Bebas Neue', cursive !important;
  }
</style>
