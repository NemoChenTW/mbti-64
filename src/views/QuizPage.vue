<template>
  <div class="page quiz-page">
    <div class="container quiz-container">
      <QuizProgress
        :current="currentIndex"
        :total="totalQuestions"
      />
      <transition name="slide" mode="out-in">
        <QuizQuestion
          :key="currentQuestion.id"
          :question="currentQuestion"
          :total="totalQuestions"
          @answer="handleAnswer"
        />
      </transition>
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import { useQuiz } from '../composables/useQuiz.js'
import QuizProgress from '../components/QuizProgress.vue'
import QuizQuestion from '../components/QuizQuestion.vue'

const router = useRouter()
const {
  currentIndex,
  currentQuestion,
  totalQuestions,
  isComplete,
  typeCode,
  answerQuestion,
  reset,
} = useQuiz()

reset()

function handleAnswer(choice) {
  answerQuestion(choice)
}

watch(isComplete, (done) => {
  if (done) {
    router.push(`/result/${typeCode.value}`)
  }
})
</script>

<style scoped>
.quiz-page {
  justify-content: center;
  padding: var(--space-8) 0;
  min-height: 100vh;
}

.quiz-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
