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
    id: 'AO',
    name: '行動風格',
    left: { code: 'A', label: '果斷', description: '快速決定、自信行動' },
    right: { code: 'O', label: '糾結', description: '反覆思量、謹慎抉擇' },
    color: 'var(--color-confidence)',
  },
  {
    id: 'HC',
    name: '人際溫度',
    left: { code: 'H', label: '溫暖', description: '主動關懷、換位思考' },
    right: { code: 'C', label: '高冷', description: '理性冷靜、保持距離' },
    color: 'var(--color-social)',
  },
]

export const dimensionMap = Object.fromEntries(
  dimensions.map((d) => [d.id, d])
)
