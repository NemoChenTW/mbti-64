import { dimensions } from '../data/dimensionInfo.js'

/**
 * 根據答案陣列計算各維度分數
 * @param {Array} answers - [{questionId, choice}] choice 為 'A' 或 'B'
 * @param {Array} questionList - 題目列表
 * @returns {Object} 各維度的分數 { EI: { left: n, right: n }, ... }
 */
export function calculateScores(answers, questionList) {
  const scores = {}
  for (const dim of dimensions) {
    scores[dim.id] = { left: 0, right: 0 }
  }

  for (const answer of answers) {
    const question = questionList.find((q) => q.id === answer.questionId)
    if (!question) continue

    const dim = question.dimension
    if (answer.choice === 'A') {
      scores[dim].left++
    } else {
      scores[dim].right++
    }
  }

  return scores
}

/**
 * 根據分數計算類型代碼
 * @param {Object} scores - calculateScores 的結果
 * @returns {string} 類型代碼，如 'INFP-AC'
 */
export function getTypeCode(scores) {
  const base = dimensions.slice(0, 4).map((dim) => {
    const s = scores[dim.id]
    return s.left >= s.right ? dim.left.code : dim.right.code
  }).join('')

  const ext = dimensions.slice(4).map((dim) => {
    const s = scores[dim.id]
    return s.left >= s.right ? dim.left.code : dim.right.code
  }).join('')

  return `${base}-${ext}`
}

/**
 * 計算各維度的百分比（左極的百分比）
 * @param {Object} scores
 * @returns {Object} { EI: 60, SN: 40, ... } 代表左極的百分比
 */
export function getDimensionPercentages(scores) {
  const percentages = {}
  for (const dim of dimensions) {
    const s = scores[dim.id]
    const total = s.left + s.right
    percentages[dim.id] = total === 0 ? 50 : Math.round((s.left / total) * 100)
  }
  return percentages
}
