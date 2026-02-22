<template>
  <div class="page quiz-page">
    <div class="container quiz-container">
      <transition name="fade" mode="out-in">
        <!-- 選擇身份 -->
        <PersonaSelect
          v-if="!selectedPersona"
          key="persona"
          @select="handlePersonaSelect"
        />

        <!-- 作答中 -->
        <div v-else key="quiz" class="quiz-active">
          <button class="back-btn" @click="backToPersona">
            &larr; 重新選擇身份
          </button>
          <QuizProgress
            :current="currentIndex"
            :total="totalQuestions"
          />
          <transition name="slide" mode="out-in">
            <QuizQuestion
              :key="currentQuestion.id"
              :question="currentQuestion"
              :total="totalQuestions"
              :current="currentIndex"
              :canGoBack="canGoBack"
              @answer="handleAnswer"
              @back="goBack"
            />
          </transition>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import { useQuiz } from '../composables/useQuiz.js'
import PersonaSelect from '../components/PersonaSelect.vue'
import QuizProgress from '../components/QuizProgress.vue'
import QuizQuestion from '../components/QuizQuestion.vue'

const router = useRouter()
const {
  currentIndex,
  currentQuestion,
  totalQuestions,
  isComplete,
  typeCode,
  selectedPersona,
  selectPersona,
  answerQuestion,
  canGoBack,
  goBack,
  reset,
} = useQuiz()

function handlePersonaSelect(personaId) {
  selectPersona(personaId)
}

function handleAnswer(choice) {
  answerQuestion(choice)
}

function backToPersona() {
  reset()
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

.quiz-active {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.back-btn {
  align-self: flex-start;
  background: none;
  border: none;
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  cursor: pointer;
  padding: var(--space-2) 0;
  margin-bottom: var(--space-4);
  transition: color var(--transition-fast);
}

.back-btn:hover {
  color: var(--color-primary);
}

/* fade 過渡 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition-base);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
