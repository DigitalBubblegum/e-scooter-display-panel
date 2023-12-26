import { useState,useEffect } from 'react'

function App() {
  const [vehicleOn, setVehicleOn] = useState(false)
  const acceleratingVariants = {
    slow: 'bg-red-500 pt-16 px-4 rounded-full',
    medium: 'bg-red-600 pt-24 px-4 rounded-full',
    fast: 'bg-red-700 pt-32 px-4 rounded-full',
    insane: 'bg-red-900 pt-64 px-4 rounded-full',
  }
  const [count, setCount] = useState(0)
  let tempAcc = 0
  const accelerator = () => {
    console.log('accelerating')
    setCount(tempAcc++)
  }
  const deAccelerator = () => {
    console.log('acc here',tempAcc)
    console.log('deaccelerating')
    setCount(tempAcc-=1)
  }
  useEffect(() => {
    const keyDownHandler = event =>{
      event.preventDefault()
      if(event.key === 'w' && tempAcc<=120){
        accelerator()
      }
      if (event.key === 's' && tempAcc>0) {
        deAccelerator()
      }
  }
  document.addEventListener('keydown', keyDownHandler)
  return () => {
      document.removeEventListener('keydown', keyDownHandler);
    }
  }, [])
  return (
    <div>
      <div className='rounded-3xl bg-gray-200 p-96 h-screen flex items-center justify-center'>
        <div className={`${acceleratingVariants['insane']}`}>
          {count}
        </div>
      </div>
    </div>
  )
}

export default App
