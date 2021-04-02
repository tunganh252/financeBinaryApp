import React from 'react'
import { Provider } from "react-redux";
import { store } from "./src/stores";
import Container from './src/Container'

const App = () => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  )
}

export default App
