<template>
  <div class="dimension-chart card">
    <h2 class="chart-title">維度分析</h2>
    <DimensionBar
      v-for="dim in dimensions"
      :key="dim.id"
      :dimension="dim"
      :percentage="percentages[dim.id]"
    />
  </div>
</template>

<script setup>
import { dimensions } from '../data/dimensionInfo.js'
import DimensionBar from './DimensionBar.vue'

defineProps({
  percentages: { type: Object, required: true },
})
</script>

<style scoped>
.chart-title {
  font-size: var(--font-size-xl);
  margin-bottom: var(--space-6);
  text-align: center;
}
</style>
