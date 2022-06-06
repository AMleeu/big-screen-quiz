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
        @click="selectAnswer(index)"
        :class="answeredClass(index)"
      >
      </b-list-group-item>
    </b-list-group>

    <b-button
      variant="primary"
      class="mr-3"
      :disabled="selectedIndex === null || submitted"
      @click="submitAnswer"
      >SUBMIT</b-button
    >
    <b-button
      variant="success"
      :disabled="!submitted"
      @click="next"
      v-show="!hideNEXT"
      >NEXT</b-button
    >
  </b-jumbotron>
</template>

<script>
// it is common practice to import lodash as _
import _ from "lodash";

export default {
  props: {
    currentQuestion: Object,
    next: Function,
    indexofCurrentQuestion: Number,
    calcScore: Function,
  },
  data() {
    return {
      answers: [],
      selectedIndex: null,
      correctIndex: null,
      submitted: false,
      hideNEXT: false,
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
    selectAnswer(index) {
      this.selectedIndex = index;
    },
    submitAnswer() {
      // indicate that user has submitted answere
      this.submitted = true;

      // first we determine the index of correct_answer
      this.correctIndex = this.answers.indexOf(
        this.currentQuestion.correct_answer
      );

      let isCorrect = false;

      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true;
      }

      this.calcScore(isCorrect);
    },
    answeredClass(index) {
      if (!this.submitted && this.selectedIndex === index) {
        return "selected";
      } else if (this.submitted && this.correctIndex === index) {
        return "correct";
      } else if (
        this.submitted &&
        this.selectedIndex === index &&
        this.selectedIndex !== this.correctIndex
      ) {
        return "incorrect";
      }
    },
  },
  watch: {
    currentQuestion: {
      /* 
        whenever a new value is passed to currentQuestion prop,
        run the shuffleAnswer method

        make is so that this starts right away as opposed to wait for the user
        to navigate to next question
        that is - treat the initially passed currentQuestion value as a new as well
      */

     /* 
      reset selectedIndex & submitted
      whenever a new value is passed to currentQuestion prop
     */
      immediate: true,
      handler() {
        this.shuffleAnswers();
        this.selectedIndex = null;
        this.submitted = false;
      },
    },
    indexofCurrentQuestion(){
      /*
        hide NEXT button when user gets to the last question 
        (that is - the 10th question)
      */
      if(this.indexofCurrentQuestion === 9){
        this.hideNEXT = true;
      }
    }
  },
};
</script>

<style scoped>
.list-group-item:hover {
  background-color: #e9ecef;
  cursor: pointer;
}

.selected,
.selected:hover {
  background-color: #007bff;
  color: #fff;
  cursor: auto;
}
.correct,
.correct:hover {
  background-color: #28a745;
  color: #fff;
  cursor: auto;
}
.incorrect,
.incorrect:hover {
  background-color: #dc3545;
  color: #fff;
  cursor: auto;
}
</style>
