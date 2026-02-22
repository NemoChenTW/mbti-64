<template>
  <div class="detail-container">
    <!-- 代表格言 -->
    <div class="detail-card card motto-card">
      <p class="motto-text">「{{ typeInfo.motto }}」</p>
    </div>

    <!-- 人際關係風格 -->
    <div class="detail-card card">
      <h3 class="detail-title">
        <span class="detail-icon">&#x1F91D;</span>
        人際關係風格
      </h3>
      <p class="detail-content">{{ typeInfo.interpersonalStyle }}</p>
    </div>

    <!-- 壓力反應 -->
    <div class="detail-card card">
      <h3 class="detail-title">
        <span class="detail-icon">&#x26A1;</span>
        壓力反應
      </h3>
      <p class="detail-content">{{ typeInfo.stressResponse }}</p>
    </div>

    <!-- 成長建議 -->
    <div class="detail-card card">
      <h3 class="detail-title">
        <span class="detail-icon">&#x1F331;</span>
        成長建議
      </h3>
      <p class="detail-content">{{ typeInfo.growthAdvice }}</p>
    </div>

    <!-- 適合的發揮場景 -->
    <div class="detail-card card">
      <h3 class="detail-title">
        <span class="detail-icon">&#x2B50;</span>
        適合的發揮場景
      </h3>
      <ul class="scene-list">
        <li v-for="(scene, i) in typeInfo.suitableScenes" :key="i">
          {{ scene }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  typeInfo: { type: Object, required: true },
})
</script>

<style scoped>
.detail-container {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.motto-card {
  text-align: center;
  background: var(--color-surface);
  border-left: 4px solid var(--color-primary);
}

.motto-text {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-primary-dark);
  line-height: 1.8;
  font-style: italic;
}

.detail-title {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--font-size-lg);
  margin-bottom: var(--space-4);
}

.detail-icon {
  font-size: var(--font-size-xl);
}

.detail-content {
  font-size: var(--font-size-sm);
  line-height: 1.8;
  color: var(--color-text-secondary);
}

.scene-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.scene-list li {
  padding: var(--space-3) var(--space-4);
  background: var(--color-surface-alt);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  line-height: 1.5;
}
</style>
