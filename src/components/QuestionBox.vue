<template>
  <b-jumbotron>
    <template #lead>
       <span v-html="currentQuestion.question "></span>
    </template>

    <hr class="my-4" />

    <p>
      list of answers
    </p>

    <b-button variant="primary" class="mr-3" href="#">SUBMIT</b-button>
    <b-button variant="success" href="#" @click="next">NEXT</b-button>
  </b-jumbotron>
</template>

<script>
export default {
  props: {
    currentQuestion: Object,
    next: Function
  }
}
</script>
