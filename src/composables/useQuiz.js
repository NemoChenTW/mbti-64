import { ref, computed } from 'vue'
import { personas, getQuestionsByPersona } from '../data/questions/index.js'
import { calculateScores, getTypeCode, getDimensionPercentages } from '../utils/scoring.js'

// 單例狀態
const answers = ref([])
const currentIndex = ref(0)
const selectedPersona = ref(null)

export function useQuiz() {
  const filteredQuestions = computed(() => {
    if (!selectedPersona.value) return []
    return getQuestionsByPersona(selectedPersona.value)
  })

  const totalQuestions = computed(() => filteredQuestions.value.length)
  const currentQuestion = computed(() => filteredQuestions.value[currentIndex.value])
  const progress = computed(() => {
    if (totalQuestions.value === 0) return 0
    return Math.round((currentIndex.value / totalQuestions.value) * 100)
  })
  const isComplete = computed(() => {
    return totalQuestions.value > 0 && answers.value.length >= totalQuestions.value
  })

  function selectPersona(personaId) {
    selectedPersona.value = personaId
    answers.value = []
    currentIndex.value = 0
  }

  function answerQuestion(choice) {
    answers.value.push({
      questionId: currentQuestion.value.id,
      choice,
    })

    if (currentIndex.value < totalQuestions.value - 1) {
      currentIndex.value++
    }
  }

  const canGoBack = computed(() => currentIndex.value > 0)

  function goBack() {
    if (currentIndex.value > 0) {
      answers.value.pop()
      currentIndex.value--
    }
  }

  function reset() {
    answers.value = []
    currentIndex.value = 0
    selectedPersona.value = null
  }

  const scores = computed(() => calculateScores(answers.value, filteredQuestions.value))
  const typeCode = computed(() => getTypeCode(scores.value))
  const percentages = computed(() => getDimensionPercentages(scores.value))

  return {
    personas,
    filteredQuestions,
    answers,
    currentIndex,
    currentQuestion,
    totalQuestions,
    progress,
    isComplete,
    selectedPersona,
    selectPersona,
    answerQuestion,
    canGoBack,
    goBack,
    reset,
    scores,
    typeCode,
    percentages,
  }
}
