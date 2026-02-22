export const dimensions = [
  {
    id: 'EI',
    name: '能量來源',
    left: { code: 'E', label: '外向', description: '從與人互動中獲得能量' },
    right: { code: 'I', label: '內向', description: '從獨處和內省中獲得能量' },
    color: 'var(--color-energy)',
  },
  {
    id: 'SN',
    name: '認知方式',
    left: { code: 'S', label: '實感', description: '關注具體事實和細節' },
    right: { code: 'N', label: '直覺', description: '關注可能性和整體模式' },
    color: 'var(--color-cognition)',
  },
  {
    id: 'TF',
    name: '決策方式',
    left: { code: 'T', label: '思考', description: '以邏輯和客觀標準做決定' },
    right: { code: 'F', label: '情感', description: '以價值觀和人際和諧做決定' },
    color: 'var(--color-decision)',
  },
  {
    id: 'JP',
    name: '生活態度',
    left: { code: 'J', label: '判斷', description: '偏好計畫與秩序' },
    right: { code: 'P', label: '感知', description: '偏好彈性與隨性' },
    color: 'var(--color-lifestyle)',
  },
  {
    id: 'AT',
    name: '自信與情緒',
    left: { code: 'A', label: '堅定', description: '情緒穩定、自信果斷' },
    right: { code: 'T', label: '動盪', description: '自省深刻、追求完美' },
    color: 'var(--color-confidence)',
  },
  {
    id: 'CS',
    name: '社交偏好',
    left: { code: 'C', label: '協作', description: '喜歡團隊合作與協調' },
    right: { code: 'S', label: '獨立', description: '偏好獨立作業與自主' },
    color: 'var(--color-social)',
  },
]

export const dimensionMap = Object.fromEntries(
  dimensions.map((d) => [d.id, d])
)
