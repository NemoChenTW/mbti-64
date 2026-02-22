<template>
  <div class="dimension-bar">
    <div class="dimension-header">
      <span class="dim-label left" :class="{ active: percentage >= 50 }">
        {{ dimension.left.code }} {{ dimension.left.label }}
      </span>
      <span class="dim-name">{{ dimension.name }}</span>
      <span class="dim-label right" :class="{ active: percentage < 50 }">
        {{ dimension.right.label }} {{ dimension.right.code }}
      </span>
    </div>
    <div class="bar-track">
      <div
        class="bar-fill"
        :style="{
          width: percentage + '%',
          background: dimension.color,
        }"
      ></div>
    </div>
    <div class="bar-values">
      <span>{{ percentage }}%</span>
      <span>{{ 100 - percentage }}%</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  dimension: { type: Object, required: true },
  percentage: { type: Number, required: true },
})
</script>

<style scoped>
.dimension-bar {
  margin-bottom: var(--space-5);
}

.dimension-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-2);
}

.dim-label {
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-text-muted);
  transition: color var(--transition-base);
}

.dim-label.active {
  color: var(--color-text);
  font-weight: 700;
}

.dim-name {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
}

.bar-track {
  width: 100%;
  height: 12px;
  background: var(--color-surface-alt);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  border-radius: var(--radius-full);
  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 4px;
}

.bar-values {
  display: flex;
  justify-content: space-between;
  margin-top: var(--space-1);
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}
</style>
