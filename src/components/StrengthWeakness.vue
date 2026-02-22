<template>
  <div class="sw-container">
    <div class="sw-card card strengths">
      <h3 class="sw-title">
        <span class="sw-icon">&#x2714;</span>
        優勢特質
      </h3>
      <ul class="sw-list">
        <li v-for="(item, i) in strengths" :key="i">{{ item }}</li>
      </ul>
    </div>
    <div class="sw-card card weaknesses">
      <h3 class="sw-title">
        <span class="sw-icon">&#x26A0;</span>
        成長空間
      </h3>
      <ul class="sw-list">
        <li v-for="(item, i) in weaknesses" :key="i">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  strengths: { type: Array, required: true },
  weaknesses: { type: Array, required: true },
})
</script>

<style scoped>
.sw-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
}

.sw-title {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--font-size-lg);
  margin-bottom: var(--space-4);
}

.sw-icon {
  font-size: var(--font-size-xl);
}

.strengths .sw-icon {
  color: var(--color-success);
}

.weaknesses .sw-icon {
  color: var(--color-warning);
}

.sw-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.sw-list li {
  padding: var(--space-3) var(--space-4);
  background: var(--color-surface-alt);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  line-height: 1.5;
}

@media (max-width: 640px) {
  .sw-container {
    grid-template-columns: 1fr;
  }
}
</style>
