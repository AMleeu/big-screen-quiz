<template>
  <div id="app">
    <Preloader v-show="showPreloader" />
    <Header :correctAnswers="correctAnswers" :totalAnswers="totalAnswers" />

    <b-container>
      <b-row>
        <b-col md="6" offset-md="3">
          <QuestionBox
            v-if="questions.length"
            :currentQuestion="questions[index]"
            :next="next"
            :indexofCurrentQuestion="index"
            :calcScore="calcScore"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import QuestionBox from "./components/QuestionBox.vue";
import Header from "./components/Header.vue";
import Preloader from "./components/Preloader.vue";

export default {
  name: "App",
  components: {
    Header,
    Preloader,
    QuestionBox,
  },
  data() {
    return {
      questions: [],
      index: 0,
      totalAnswers: 0,
      correctAnswers: 0,
      showPreloader: true,
    };
  },
  methods: {
    next() {
      this.index++;
    },
    calcScore(isCorrect) {
      if (isCorrect) {
        this.correctAnswers++;
      }
      this.totalAnswers++;
    },
  },
  created: function () {
    /*
      fetch data from API
      format said data
      populate questions array with data
    */
    fetch(
      "https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple",
      { method: "GET" }
    )
      .then((response) => {
        // format fetched data in json format & return it
        let jsonData = response.json();
        return jsonData;
      })
      .then((jsonData) => {
        // feed application state property with jsonData
        this.questions = jsonData.results;
      });
  },
  mounted: function () {
    /*
      hide Preloader after 5 seconds of having rendred
    */
    setTimeout(() => (this.showPreloader = false), 5000);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
