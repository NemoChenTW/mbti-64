<template>
  <div class="page result-page">
    <div class="container result-container">
      <template v-if="typeInfo">
        <ResultCard :typeInfo="typeInfo" />
        <DimensionChart :percentages="displayPercentages" />
        <StrengthWeakness
          :strengths="typeInfo.strengths"
          :weaknesses="typeInfo.weaknesses"
        />
        <div class="result-actions">
          <button class="btn btn-primary btn-lg" @click="retake">
            重新測驗
          </button>
          <button class="btn btn-outline" @click="share">
            分享結果
          </button>
        </div>
      </template>
      <template v-else>
        <div class="not-found card">
          <h2>找不到此類型</h2>
          <p>類型代碼「{{ code }}」不存在。</p>
          <button class="btn btn-primary" @click="$router.push('/')">
            回到首頁
          </button>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { typeDescriptions } from '../data/typeDescriptions.js'
import { useQuiz } from '../composables/useQuiz.js'
import ResultCard from '../components/ResultCard.vue'
import DimensionChart from '../components/DimensionChart.vue'
import StrengthWeakness from '../components/StrengthWeakness.vue'

const route = useRoute()
const router = useRouter()
const { percentages, reset } = useQuiz()

const code = computed(() => route.params.code)
const typeInfo = computed(() => typeDescriptions[code.value] || null)

// If we have quiz percentages, use them; otherwise generate defaults from the code
const displayPercentages = computed(() => {
  const hasData = Object.values(percentages.value).some((v) => v !== 50)
  if (hasData) return percentages.value

  // Generate percentages from the code for direct URL access
  const c = code.value
  if (!c || c.length < 7) return percentages.value
  const base = c.slice(0, 4)
  const ext = c.slice(5, 7)
  return {
    EI: base[0] === 'E' ? 65 : 35,
    SN: base[1] === 'S' ? 65 : 35,
    TF: base[2] === 'T' ? 65 : 35,
    JP: base[3] === 'J' ? 65 : 35,
    AT: ext[0] === 'A' ? 65 : 35,
    CS: ext[1] === 'C' ? 65 : 35,
  }
})

function retake() {
  reset()
  router.push('/quiz')
}

function share() {
  const text = `我的 MBTI-64 人格類型是 ${code.value}「${typeInfo.value.name}」！來測測你的吧！`
  const url = window.location.href

  if (navigator.share) {
    navigator.share({ title: 'MBTI-64 人格測驗', text, url })
  } else {
    navigator.clipboard.writeText(`${text}\n${url}`)
    alert('結果已複製到剪貼簿！')
  }
}
</script>

<style scoped>
.result-page {
  padding: var(--space-8) 0 var(--space-16);
}

.result-container {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.result-actions {
  display: flex;
  justify-content: center;
  gap: var(--space-4);
  flex-wrap: wrap;
  padding: var(--space-4) 0;
}

.not-found {
  text-align: center;
  padding: var(--space-12);
}

.not-found h2 {
  margin-bottom: var(--space-4);
}

.not-found p {
  margin-bottom: var(--space-6);
  color: var(--color-text-secondary);
}
</style>
