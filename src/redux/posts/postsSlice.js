import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'Мы можем проверить расширение Redux DevTools, чтобы увидеть действие, которое мы отправили, и посмотреть, как состояние Redux было обновлено в ответ на это действие. Если мы щелкнем "posts/postAdded' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    }
  }
})
export const { postAdded } = postsSlice.actions
export default postsSlice.reducer
