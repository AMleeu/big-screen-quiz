<template>
  <b-jumbotron>
    <template #lead>
      <span v-html="currentQuestion.question"></span>
    </template>

    <hr class="my-4" />

    <b-list-group class="mb-4">
      <b-list-group-item
        v-for="(answer, index) in answers"
        :key="index"
        v-html="answer"
        @click = "selectAnswer(index)"
        :class="[selectedIndex === index ? 'selected' : '']"
      >
      </b-list-group-item>
    </b-list-group>

    <b-button variant="primary" class="mr-3" href="#">SUBMIT</b-button>
    <b-button variant="success" href="#" @click="next">NEXT</b-button>
  </b-jumbotron>
</template>

<script>
// it is common practice to import lodash as _
import _ from "lodash";

export default {
  props: {
    currentQuestion: Object,
    next: Function,
  },
  data() {
    return {
      answers: [],
      selectedIndex: null,
    };
  },
  methods: {
    shuffleAnswers() {
      // append correct to array of incorrect answers
      let answers = [...this.currentQuestion.incorrect_answers];
      answers.push(this.currentQuestion.correct_answer);

      // shuffle the answers such that the correct answer is not always last
      this.answers = _.shuffle(answers);
    },
    selectAnswer(index){
      this.selectedIndex = index;
    }
  },
  watch: {
    currentQuestion: {
      /* whenever a new value is passed to currentQuestion prop is passed
        run the shuffleAnswer method
      */

      /* make is so that this starts right away as opposed to wait for the user
        to navigate to next question
        that is - treat the initially passed currentQuestion value as a new as well
      */
      immediate: true,
      handler() {
        this.shuffleAnswers();
      },
    },
  },
};
</script>

<style scoped>
.list-group-item:hover {
  background-color: #e9ecef;
  cursor: pointer;
}

.selected,
.selected:hover{
  background-color: #007bff;
  color: #fff;
  cursor:auto;
}
.correct{
  background-color: #28a745;
}
.incorrect{
  background-color: #dc3545;
}
</style>
