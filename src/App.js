import "./styles.css";
import { useEffect, useState } from 'react'

function ProgressBar({progress}){
  const[animatedProgress, setAnimatedProgress] = useState(0)
  useEffect(()=>{
    setTimeout(()=>setAnimatedProgress(progress),100)

  },[progress])
  return(
    <>
    <div className='outer'>
      <div className='inner' style={{width:`${animatedProgress}%`}}>{progress}%</div>
      </div> 
    </>
  )
} 

export default function App() {
  const bars = [4,10,50,69,80,90,16]
  return (
    <div className="App">
      <h1>Progress Bar</h1>
    {bars.map((value)=>(<ProgressBar  key={value} progress ={value}/>))}  
    </div>
  );
}
