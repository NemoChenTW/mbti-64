<template>
  <div class="result-card">
    <div class="type-code">{{ typeInfo.code }}</div>
    <h1 class="type-name">{{ typeInfo.name }}</h1>
    <p class="type-subtitle">{{ typeInfo.subtitle }}</p>
    <p class="type-description">{{ typeInfo.description }}</p>
  </div>
</template>

<script setup>
defineProps({
  typeInfo: { type: Object, required: true },
})
</script>

<style scoped>
.result-card {
  text-align: center;
  padding: var(--space-8) var(--space-6);
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  border-radius: var(--radius-2xl);
  color: white;
  box-shadow: var(--shadow-xl);
}

.type-code {
  display: inline-block;
  font-size: var(--font-size-lg);
  font-weight: 700;
  letter-spacing: 0.15em;
  padding: var(--space-2) var(--space-4);
  background: rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-full);
  margin-bottom: var(--space-4);
}

.type-name {
  font-size: var(--font-size-4xl);
  font-weight: 900;
  margin-bottom: var(--space-2);
}

.type-subtitle {
  font-size: var(--font-size-lg);
  opacity: 0.9;
  margin-bottom: var(--space-6);
}

.type-description {
  font-size: var(--font-size-base);
  line-height: 1.8;
  opacity: 0.9;
  max-width: 500px;
  margin: 0 auto;
}
</style>
