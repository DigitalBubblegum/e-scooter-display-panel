import { useState,useEffect } from 'react'

function App() {
  // const [vehicleOn, setVehicleOn] = useState(false)
  const acceleratingColorVariants = {
    slow: 'bg-red-500', //py-16
    medium: 'bg-red-600', //py-24
    fast: 'bg-red-700', //py-32
    insane: 'bg-red-900', //py-64
  }
  const acceleratingSizeVariants = {
    slow: 'py-16',
    medium: 'py-24',
    fast: 'py-32',
    insane: 'py-64',
  }
  const [accVis, setAccVis] = useState(acceleratingColorVariants['slow'])
  const [accYsize, setAccYsize] = useState(acceleratingSizeVariants['slow'])
  const [count, setCount] = useState(0)
  let tempAcc = 0
  const accelerator = () => {
    // console.log('accelerating')
    switch (tempAcc) {
      case (tempAcc>=0 || tempAcc<30):
        setAccVis(acceleratingColorVariants['slow'])
        setAccYsize(acceleratingSizeVariants['slow'])
        break
      case (tempAcc>=30 || tempAcc<60):
        setAccVis(acceleratingColorVariants['medium'])
        setAccYsize(acceleratingSizeVariants['medium'])
        break
      case (tempAcc>=60 || tempAcc<90):
        setAccVis(acceleratingColorVariants['fast'])
        setAccYsize(acceleratingSizeVariants['fast'])
        break
      case (tempAcc>=90 || tempAcc<120):
        setAccVis(acceleratingColorVariants['insane'])
        setAccYsize(acceleratingSizeVariants['insane'])
        break    
      default:
        setAccVis(acceleratingColorVariants['slow'])
        setAccYsize(acceleratingSizeVariants['slow'])
        break
    }
    setCount(tempAcc++)
  }
  const deAccelerator = () => {
    // console.log('acc here',tempAcc)
    // console.log('deaccelerating')
    switch (tempAcc) {
      case (tempAcc>=0 || tempAcc<30):
        setAccVis(acceleratingColorVariants['slow'])
        setAccYsize(acceleratingSizeVariants['slow'])
        break
      case (tempAcc>=30 || tempAcc<60):
        setAccVis(acceleratingColorVariants['medium'])
        setAccYsize(acceleratingSizeVariants['medium'])
        break
      case (tempAcc>=60 || tempAcc<90):
        setAccVis(acceleratingColorVariants['fast'])
        setAccYsize(acceleratingSizeVariants['fast'])
        break
      case (tempAcc>=90 || tempAcc<120):
        setAccVis(acceleratingColorVariants['insane'])
        setAccYsize(acceleratingSizeVariants['insane'])
        break    
      default:
        setAccVis(acceleratingColorVariants['slow'])
        setAccYsize(acceleratingSizeVariants['slow'])
        break
    }
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
      <div className='rounded-3xl bg-gray-900 p-96 h-screen flex items-center justify-center'>
        {/* <div className='py-32 bg-green-400'> */}
          <div className={`${accVis} ${accYsize} px-4`}>
          {count}
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default App
