import { ref, computed } from 'vue'
import { questions, personas } from '../data/questions.js'
import { calculateScores, getTypeCode, getDimensionPercentages } from '../utils/scoring.js'

// 單例狀態
const answers = ref([])
const currentIndex = ref(0)
const selectedPersona = ref(null)

export function useQuiz() {
  const filteredQuestions = computed(() => {
    if (!selectedPersona.value) return []
    return questions.filter(q => q.persona === selectedPersona.value)
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
    questions,
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
    reset,
    scores,
    typeCode,
    percentages,
  }
}
