import React, { useState } from 'react'
import Form from './Component/Form';

function App() {

  const [checked, setChecked] = useState(false);

  function toggleCheck() {
    setChecked(!checked)
    console.log(`clicked ${checked}`)
  }

  return (
    <div className='flex items-center justify-center xs:h-auto h-dvh xs:border-4 border-red-400'>
      <Form/>
    </div>
  )
}

export default App