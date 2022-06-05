<template>
  <b-nav tabs>
    <b-nav-item disabled class="mt-2"><h4>BIG SCREEN Quiz</h4></b-nav-item>
    <b-nav-item disabled>
      <b-button variant="secondary">
        correct
        <b-badge variant="success" class="lead">{{ correctAnswers }}</b-badge>
        &nbsp; | &nbsp; total
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
