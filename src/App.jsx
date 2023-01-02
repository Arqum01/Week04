import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LifeCycleMethod from './assets/Components/LifecycleMethod/LifeCycleMethod'
import Hero from './assets/Components/ErrorBoundaries/Hero'
import ErrorBoundary from './assets/Components/ErrorBoundaries/ErrorBoundary'
import ControlledForm from './assets/Components/Form/ControlledForm'
import UncontrolledForm from './assets/Components/Form/UncontrolledForm'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">
      
      <LifeCycleMethod/>
      <ErrorBoundary>
     <Hero/> 
     </ErrorBoundary>

     <ControlledForm/>
     <UncontrolledForm/>
     

    </div>
    
  )
}

export default App
