import { useState } from 'react'
import { UseEffect } from './reacthooks'

function App() {
 
  const [ visible, setVisible ] = useState(true)

  setTimeout(() => {
    setVisible(false)
  }, 5000)

  return visible && <UseEffect/>
  
}

export default App
