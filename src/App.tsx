import { FC } from 'react'

import Header from './components/Header'
import AppRoutes from './Routes'



import './App.css'

const App: FC = () => {

  return (
    <>
      <Header />
      <AppRoutes />
    </>
  )
}

export default App
