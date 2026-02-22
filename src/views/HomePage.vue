<template>
  <div class="page home-page">
    <!-- Hero -->
    <section class="hero">
      <div class="container hero-inner">
        <h1 class="hero-title">MBTI-64</h1>
        <p class="hero-subtitle">人格測驗</p>
        <p class="hero-desc">
          超越傳統 16 型，探索 64 種人格面貌。<br />
          新增「自信維度」與「社交維度」，更完整地認識自己。
        </p>
        <router-link to="/quiz" class="btn btn-primary btn-lg">
          開始測驗
        </router-link>
        <p class="hero-meta">30 題 &#x00B7; 約 5 分鐘</p>
      </div>
    </section>

    <!-- 介紹 -->
    <section class="intro">
      <div class="container">
        <h2 class="section-title">什麼是 MBTI-64？</h2>
        <p class="section-desc">
          傳統 MBTI 以 4 個維度將人格分為 16 種類型。我們在此基礎上新增了 2 個維度，
          讓你的人格畫像更加立體豐富。
        </p>

        <div class="dimension-grid">
          <div
            v-for="dim in dimensions"
            :key="dim.id"
            class="dimension-item card"
          >
            <div class="dim-color" :style="{ background: dim.color }"></div>
            <h3 class="dim-title">{{ dim.name }}</h3>
            <div class="dim-poles">
              <span>{{ dim.left.code }} {{ dim.left.label }}</span>
              <span class="dim-vs">vs</span>
              <span>{{ dim.right.code }} {{ dim.right.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="container cta-inner">
        <h2>準備好了嗎？</h2>
        <p>回答 30 個簡單問題，找出你的 MBTI-64 人格類型。</p>
        <router-link to="/quiz" class="btn btn-primary btn-lg">
          開始測驗
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { dimensions } from '../data/dimensionInfo.js'
</script>

<style scoped>
.hero {
  text-align: center;
  padding: var(--space-16) 0 var(--space-12);
  background: linear-gradient(180deg, #eef2ff 0%, var(--color-bg) 100%);
}

.hero-title {
  font-size: var(--font-size-5xl);
  font-weight: 900;
  color: var(--color-primary);
  letter-spacing: 0.05em;
}

.hero-subtitle {
  font-size: var(--font-size-2xl);
  font-weight: 500;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-6);
}

.hero-desc {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--space-8);
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
}

.hero-meta {
  margin-top: var(--space-4);
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}

/* 介紹區塊 */
.intro {
  padding: var(--space-12) 0;
}

.section-title {
  text-align: center;
  font-size: var(--font-size-2xl);
  margin-bottom: var(--space-4);
}

.section-desc {
  text-align: center;
  color: var(--color-text-secondary);
  max-width: 520px;
  margin: 0 auto var(--space-8);
  line-height: 1.7;
}

.dimension-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}

.dimension-item {
  text-align: center;
  padding: var(--space-5);
}

.dim-color {
  width: 40px;
  height: 4px;
  border-radius: var(--radius-full);
  margin: 0 auto var(--space-3);
}

.dim-title {
  font-size: var(--font-size-base);
  margin-bottom: var(--space-2);
}

.dim-poles {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  display: flex;
  justify-content: center;
  gap: var(--space-2);
}

.dim-vs {
  color: var(--color-text-muted);
  font-size: var(--font-size-xs);
}

/* CTA */
.cta {
  padding: var(--space-12) 0 var(--space-16);
}

.cta-inner {
  text-align: center;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  color: white;
  padding: var(--space-10) var(--space-6);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-xl);
}

.cta-inner h2 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--space-3);
}

.cta-inner p {
  opacity: 0.9;
  margin-bottom: var(--space-6);
}

.cta-inner .btn-primary {
  background: white;
  color: var(--color-primary-dark);
}

.cta-inner .btn-primary:hover {
  background: #f0f0f0;
}

/* RWD */
@media (max-width: 640px) {
  .hero-title {
    font-size: var(--font-size-4xl);
  }

  .hero-desc {
    font-size: var(--font-size-base);
  }

  .dimension-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 400px) {
  .dimension-grid {
    grid-template-columns: 1fr;
  }
}
</style>
