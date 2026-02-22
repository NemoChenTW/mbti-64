<template>
  <div class="persona-select">
    <h2 class="persona-title">選擇你的身份</h2>
    <p class="persona-desc">我們會根據你的生活情境提供最適合的題目</p>
    <div class="persona-cards">
      <button
        v-for="persona in personas"
        :key="persona.id"
        class="persona-card card"
        @click="$emit('select', persona.id)"
      >
        <span class="persona-icon">{{ persona.icon }}</span>
        <span class="persona-label">{{ persona.label }}</span>
        <span class="persona-description">{{ persona.description }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { personas } from '../data/questions.js'

defineEmits(['select'])
</script>

<style scoped>
.persona-select {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-4);
}

.persona-title {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  margin-bottom: var(--space-3);
}

.persona-desc {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-8);
}

.persona-cards {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.persona-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-6) var(--space-5);
  background: var(--color-surface);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-xl);
  cursor: pointer;
  transition: all var(--transition-base);
  box-shadow: var(--shadow-sm);
}

.persona-card:hover {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.persona-card:active {
  transform: translateY(0);
}

.persona-icon {
  font-size: var(--font-size-4xl);
  line-height: 1;
}

.persona-label {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-text);
}

.persona-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}
</style>
