<template>
  <section class="section">
    <div class="columns is-mobile">
      <card
        :question="currentQuestion"
      />
    </div>
    <b-button @click="getRandomQuestion">Next question</b-button>
  </section>
</template>

<script>
import Card from '~/components/Card'
import generalQuestions from '~/constants/general-questions'

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
    this.allQuestions = generalQuestions;
    this.getRandomQuestion();
  }
}
</script>
