import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Layout from './components/Layout'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <Header text={'Dashboard'} subtext={'Selamat datang di arsip digital'} />
        <h1>hallo</h1>
      </Layout>
    </>
  )
}

export default App
