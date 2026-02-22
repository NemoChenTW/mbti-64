<template>
  <div ref="cardRef" class="share-card">
    <!-- Header with gradient -->
    <div class="share-header">
      <div class="share-badge">MBTI-64</div>
      <div class="share-code">{{ typeInfo.code }}</div>
      <div class="share-name">{{ typeInfo.name }}</div>
      <div class="share-subtitle">{{ typeInfo.subtitle }}</div>
    </div>

    <!-- Dimension bars -->
    <div class="share-dimensions">
      <div
        v-for="dim in dimensionList"
        :key="dim.id"
        class="share-dim-row"
      >
        <div class="share-dim-header">
          <span
            class="share-dim-label"
            :style="{ fontWeight: percentages[dim.id] >= 50 ? '700' : '400', color: percentages[dim.id] >= 50 ? '#4A3728' : '#A09080' }"
          >
            {{ dim.left.code }} {{ dim.left.label }}
          </span>
          <span class="share-dim-name">{{ dim.name }}</span>
          <span
            class="share-dim-label"
            :style="{ fontWeight: percentages[dim.id] < 50 ? '700' : '400', color: percentages[dim.id] < 50 ? '#4A3728' : '#A09080' }"
          >
            {{ dim.right.label }} {{ dim.right.code }}
          </span>
        </div>
        <div
          class="share-bar-track"
          :style="{ justifyContent: percentages[dim.id] < 50 ? 'flex-end' : 'flex-start' }"
        >
          <div
            class="share-bar-fill"
            :style="{
              width: (percentages[dim.id] >= 50 ? percentages[dim.id] : 100 - percentages[dim.id]) + '%',
              background: dimColors[dim.id],
            }"
          ></div>
        </div>
        <div class="share-bar-values">
          <span>{{ percentages[dim.id] }}%</span>
          <span>{{ 100 - percentages[dim.id] }}%</span>
        </div>
      </div>
    </div>

    <!-- Footer CTA -->
    <div class="share-footer">
      來測測你的 MBTI-64 人格類型吧！
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { dimensions } from '../data/dimensionInfo.js'

defineProps({
  typeInfo: { type: Object, required: true },
  percentages: { type: Object, required: true },
})

const cardRef = ref(null)
const dimensionList = dimensions

const dimColors = {
  EI: '#FF9EAE',
  SN: '#F0A040',
  TF: '#7BC0C8',
  JP: '#C4A0D8',
  AO: '#F08080',
  HC: '#F5C84C',
}

defineExpose({ cardRef })
</script>

<style scoped>
.share-card {
  width: 1080px;
  height: 1080px;
  background: #FFF8F0;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  overflow: hidden;
}

.share-header {
  background: linear-gradient(135deg, #FF9B9B, #E8786A);
  color: #FFFFFF;
  text-align: center;
  padding: 60px 60px 50px;
  flex-shrink: 0;
}

.share-badge {
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.15em;
  padding: 8px 24px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 100px;
  margin-bottom: 20px;
}

.share-code {
  font-size: 48px;
  font-weight: 900;
  letter-spacing: 0.1em;
  margin-bottom: 8px;
}

.share-name {
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 8px;
}

.share-subtitle {
  font-size: 22px;
  opacity: 0.9;
}

.share-dimensions {
  flex: 1;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

.share-dim-row {
  /* each dimension row */
}

.share-dim-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.share-dim-label {
  font-size: 20px;
}

.share-dim-name {
  font-size: 16px;
  color: #A09080;
}

.share-bar-track {
  display: flex;
  width: 100%;
  height: 20px;
  background: #F0E6D8;
  border-radius: 100px;
  overflow: hidden;
}

.share-bar-fill {
  height: 100%;
  border-radius: 100px;
  min-width: 6px;
}

.share-bar-values {
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
  font-size: 16px;
  color: #A09080;
}

.share-footer {
  text-align: center;
  padding: 30px 60px;
  font-size: 24px;
  font-weight: 600;
  color: #E8786A;
  background: #FFF8F0;
  flex-shrink: 0;
}
</style>
