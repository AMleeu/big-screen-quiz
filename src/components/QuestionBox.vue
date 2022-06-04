<template>
  <b-jumbotron>
    <template #lead>
      <span v-html="currentQuestion.question"></span>
    </template>

    <hr class="my-4" />

    <b-list-group class="mb-4">
      <b-list-group-item
        v-for="(answer, index) in answersCompilation"
        :key="index"
      >
        {{ answer }}
      </b-list-group-item>
    </b-list-group>

    <b-button variant="primary" class="mr-3" href="#">SUBMIT</b-button>
    <b-button variant="success" href="#" @click="next">NEXT</b-button>
  </b-jumbotron>
</template>

<script>
export default {
  props: {
    currentQuestion: Object,
    next: Function,
  },
  computed: {
    answersCompilation() {
      // compile correct answer & incorrect answers in one array
      let answers = [...this.currentQuestion.incorrect_answers];
      answers.push(this.currentQuestion.correct_answer);

      return answers;
    },
  },
};
</script>

<style scoped>
  .list-group-item:hover{
    background-color: #e9ecef;
  }
</style>
