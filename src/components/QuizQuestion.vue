<template>
  <div class="quiz-question">
    <p class="question-number">第 {{ current + 1 }} / {{ total }} 題</p>
    <h2 class="question-text">{{ question.text }}</h2>
    <div class="options">
      <button class="option-btn" @click="handleAnswer($event, 'A')">
        <span class="option-label">A</span>
        <span class="option-text">{{ question.optionA }}</span>
      </button>
      <button class="option-btn" @click="handleAnswer($event, 'B')">
        <span class="option-label">B</span>
        <span class="option-text">{{ question.optionB }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  question: { type: Object, required: true },
  total: { type: Number, required: true },
  current: { type: Number, required: true },
})

const emit = defineEmits(['answer'])

function handleAnswer(event, choice) {
  event.currentTarget.blur()
  emit('answer', choice)
}
</script>

<style scoped>
.quiz-question {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.question-number {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--space-3);
}

.question-text {
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin-bottom: var(--space-8);
  line-height: 1.5;
}

.options {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.option-btn {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  width: 100%;
  padding: var(--space-5) var(--space-6);
  background: var(--color-surface);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-xl);
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-text);
  transition: all var(--transition-base);
  box-shadow: var(--shadow-sm);
}

@media (hover: hover) {
  .option-btn:hover {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }

  .option-btn:hover .option-label {
    background: var(--color-primary);
    color: white;
  }
}

.option-btn:focus-visible {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-md);
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.option-btn:focus-visible .option-label {
  background: var(--color-primary);
  color: white;
}

.option-btn:active {
  transform: translateY(0);
}

.option-label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  background: var(--color-surface-alt);
  border-radius: var(--radius-full);
  font-weight: 700;
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.option-text {
  line-height: 1.5;
}
</style>
