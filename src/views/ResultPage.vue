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
        <PersonalityDetail :typeInfo="typeInfo" />
        <div class="result-actions">
          <button class="btn btn-primary btn-lg" @click="retake">
            重新測驗
          </button>
          <button
            class="btn btn-outline"
            :disabled="isSharing"
            @click="share"
          >
            {{ isSharing ? '產生中...' : '分享結果' }}
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

    <!-- Hidden ShareCard for screenshot -->
    <ShareCard
      v-if="typeInfo"
      ref="shareCardRef"
      :typeInfo="typeInfo"
      :percentages="displayPercentages"
      class="share-card-hidden"
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { typeDescriptions } from '../data/typeDescriptions.js'
import { useQuiz } from '../composables/useQuiz.js'
import ResultCard from '../components/ResultCard.vue'
import DimensionChart from '../components/DimensionChart.vue'
import StrengthWeakness from '../components/StrengthWeakness.vue'
import PersonalityDetail from '../components/PersonalityDetail.vue'
import ShareCard from '../components/ShareCard.vue'

const route = useRoute()
const router = useRouter()
const { percentages, reset } = useQuiz()

const shareCardRef = ref(null)
const isSharing = ref(false)

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
    AO: ext[0] === 'A' ? 65 : 35,
    HC: ext[1] === 'H' ? 65 : 35,
  }
})

function retake() {
  reset()
  router.push('/quiz')
}

async function share() {
  if (isSharing.value) return
  isSharing.value = true

  try {
    const { default: html2canvas } = await import('html2canvas-pro')
    const el = shareCardRef.value?.cardRef
    if (!el) throw new Error('ShareCard element not found')

    const canvas = await html2canvas(el, {
      width: 1080,
      height: 1080,
      scale: 1,
      useCORS: true,
      backgroundColor: '#FFF8F0',
    })

    const blob = await new Promise((resolve) =>
      canvas.toBlob(resolve, 'image/png')
    )

    const fileName = `mbti-64-${code.value}.png`
    const file = new File([blob], fileName, { type: 'image/png' })

    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({ files: [file] })
    } else {
      // Fallback: trigger download
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = fileName
      a.click()
      URL.revokeObjectURL(url)
    }
  } catch (err) {
    if (err.name === 'AbortError') {
      // User cancelled the share dialog — ignore
    } else {
      console.error('Share failed:', err)
      alert('分享失敗，請稍後再試。')
    }
  } finally {
    isSharing.value = false
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

.share-card-hidden {
  position: fixed;
  left: -9999px;
  top: 0;
}
</style>
