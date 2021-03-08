<template>
  <section class="section">
    <div class="columns is-mobile">
      <card
        :question="currentQuestion"
      />
    </div>
    <b-button @click="getRandomQuestion">Next Question</b-button>
  </section>
</template>

<script>
import Card from '~/components/Card'
import javascriptQuestions from '~/constants/javascript-questions'

export default {
  name: 'HomePage',
  components: {
    Card
  },
  data () {
    return {
      allQuestions: [],
      currentQuestion: ''
    }
  },
  methods: {
    getRandomQuestion() {  
      this.currentQuestion = this.allQuestions[Math.floor(Math.random()*this.allQuestions.length)];
    }
  },
  mounted () {
    this.allQuestions = javascriptQuestions;
    this.getRandomQuestion();
  }
}
</script>
