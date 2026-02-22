<template>
  <div class="page lookup-page">
    <div class="container lookup-inner">
      <h1 class="lookup-title">快速查詢</h1>
      <p class="lookup-desc">已經知道自己的類型？選擇 6 個維度字母，直接查看結果分析。</p>

      <div class="dimension-list">
        <div
          v-for="dim in dimensions"
          :key="dim.id"
          class="dimension-row card"
        >
          <div class="dim-header">
            <div class="dim-color" :style="{ background: dim.color }"></div>
            <span class="dim-name">{{ dim.name }}</span>
          </div>
          <div class="dim-options">
            <button
              class="dim-btn"
              :class="{ active: selected[dim.id] === dim.left.code }"
              :style="selected[dim.id] === dim.left.code
                ? { borderColor: dim.color, background: dim.color, color: '#fff' }
                : {}"
              @click="selected[dim.id] = dim.left.code"
            >
              {{ dim.left.code }} {{ dim.left.label }}
            </button>
            <button
              class="dim-btn"
              :class="{ active: selected[dim.id] === dim.right.code }"
              :style="selected[dim.id] === dim.right.code
                ? { borderColor: dim.color, background: dim.color, color: '#fff' }
                : {}"
              @click="selected[dim.id] = dim.right.code"
            >
              {{ dim.right.code }} {{ dim.right.label }}
            </button>
          </div>
        </div>
      </div>

      <button
        class="btn btn-primary btn-lg submit-btn"
        :disabled="!allSelected"
        @click="goToResult"
      >
        查看結果
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { dimensions } from '../data/dimensionInfo.js'

const router = useRouter()

const selected = reactive({
  EI: null,
  SN: null,
  TF: null,
  JP: null,
  AT: null,
  CS: null,
})

const allSelected = computed(() =>
  dimensions.every((dim) => selected[dim.id] !== null)
)

function goToResult() {
  if (!allSelected.value) return
  const code =
    selected.EI + selected.SN + selected.TF + selected.JP +
    '-' +
    selected.AT + selected.CS
  router.push(`/result/${code}`)
}
</script>

<style scoped>
.lookup-page {
  padding: var(--space-12) 0 var(--space-16);
}

.lookup-inner {
  max-width: var(--container-sm);
}

.lookup-title {
  text-align: center;
  font-size: var(--font-size-3xl);
  margin-bottom: var(--space-3);
}

.lookup-desc {
  text-align: center;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-8);
  line-height: 1.7;
}

.dimension-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}

.dimension-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-5);
}

.dim-header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-shrink: 0;
}

.dim-color {
  width: 4px;
  height: 28px;
  border-radius: var(--radius-full);
  flex-shrink: 0;
}

.dim-name {
  font-weight: 600;
  font-size: var(--font-size-base);
  white-space: nowrap;
}

.dim-options {
  display: flex;
  gap: var(--space-2);
}

.dim-btn {
  padding: var(--space-2) var(--space-4);
  font-size: var(--font-size-sm);
  font-weight: 500;
  border: 2px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  color: var(--color-text);
  transition: all var(--transition-fast);
  cursor: pointer;
  white-space: nowrap;
}

.dim-btn:hover:not(.active) {
  border-color: var(--color-text-muted);
}

.submit-btn {
  display: block;
  margin: 0 auto;
}

.submit-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* RWD */
@media (max-width: 480px) {
  .dimension-row {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-3);
  }

  .dim-options {
    width: 100%;
  }

  .dim-btn {
    flex: 1;
    text-align: center;
  }
}
</style>
