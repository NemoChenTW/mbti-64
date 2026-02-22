import { ref, computed } from 'vue'
import { questions } from '../data/questions.js'
import { calculateScores, getTypeCode, getDimensionPercentages } from '../utils/scoring.js'

// 單例狀態
const answers = ref([])
const currentIndex = ref(0)

export function useQuiz() {
  const totalQuestions = questions.length
  const currentQuestion = computed(() => questions[currentIndex.value])
  const progress = computed(() => Math.round((currentIndex.value / totalQuestions) * 100))
  const isComplete = computed(() => answers.value.length >= totalQuestions)

  function answerQuestion(choice) {
    answers.value.push({
      questionId: currentQuestion.value.id,
      choice,
    })

    if (currentIndex.value < totalQuestions - 1) {
      currentIndex.value++
    }
  }

  function reset() {
    answers.value = []
    currentIndex.value = 0
  }

  const scores = computed(() => calculateScores(answers.value, questions))
  const typeCode = computed(() => getTypeCode(scores.value))
  const percentages = computed(() => getDimensionPercentages(scores.value))

  return {
    questions,
    answers,
    currentIndex,
    currentQuestion,
    totalQuestions,
    progress,
    isComplete,
    answerQuestion,
    reset,
    scores,
    typeCode,
    percentages,
  }
}
