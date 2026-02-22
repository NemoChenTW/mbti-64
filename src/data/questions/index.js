/**
 * 測驗題目入口
 *
 * 每個 persona 的題目獨立一個檔案，這裡統一匯出。
 * 新增 persona 時只需：
 * 1. 在此資料夾新增 xxx.js（匯出題目陣列）
 * 2. 在 personaQuestions 加一筆
 * 3. 在 personas 加一筆
 */
import officeQuestions from './office.js'
import studentQuestions from './student.js'

export const personas = [
  { id: 'office', label: '上班族', description: '適合有工作經驗的職場人士', icon: '💼' },
  { id: 'student', label: '學生', description: '適合國高中生與大學生', icon: '📚' },
]

const personaQuestions = {
  office: officeQuestions,
  student: studentQuestions,
}

export function getQuestionsByPersona(personaId) {
  return personaQuestions[personaId] || []
}
