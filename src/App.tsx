import './App.css'
import { LuckyWheel } from './components/LuckyWheel'
import { Poem } from './components/Poem'

function App() {
  return (
    <div style={{ paddingBottom: '32px' }}>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
        rel="stylesheet"
      />
      {/* <LuckyWheel /> */}
      <Poem />
      <LuckyWheel />
    </div>
  )
}

export default App
