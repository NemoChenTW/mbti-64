<template>
  <div class="quiz-progress">
    <div class="progress-info">
      <span class="progress-text">作答進度</span>
      <span class="progress-value">{{ current }} / {{ total }}</span>
    </div>
    <div class="progress-track">
      <div
        class="progress-fill"
        :style="{ width: percentage + '%' }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  current: { type: Number, required: true },
  total: { type: Number, required: true },
})

const percentage = computed(() =>
  Math.round((props.current / props.total) * 100)
)
</script>

<style scoped>
.quiz-progress {
  width: 100%;
  max-width: 600px;
  margin: 0 auto var(--space-8);
}

.progress-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--space-2);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.progress-value {
  font-weight: 700;
  color: var(--color-primary);
}

.progress-track {
  width: 100%;
  height: 8px;
  background: var(--color-surface-alt);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary-light), var(--color-primary));
  border-radius: var(--radius-full);
  transition: width var(--transition-slow);
}
</style>
