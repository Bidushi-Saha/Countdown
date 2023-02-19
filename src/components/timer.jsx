import { useState } from "react";
import './timer.css';
function Timer() {
  const [count, setCount] = useState("0");
  const [minutes,setminutes] = useState("true");
   
   function handle(e){
    if (e.key === "Enter") {
      let data= Math.floor(parseInt(e.target.value));
      
      if (data >0 && minutes) {
        setminutes(false);
        alert("data is valid")
        let interval = setInterval(() => {
          setCount(data--);
          if (data < 0) {
            
          clearInterval(interval);
            setminutes(true);
            e.target.value = "";
          }
        }, 1000)
      }
      else if (data 
        <0 && setminutes){
        setCount(0);
      }
    }
  }

return (
    <>
  <h1>Timer</h1>
  <input type="number" onKeyDown ={ handle } id ="count" placeholder="enter"/>
  <div id="current-time">
    {
      count
    }
  </div>
</>

)
}

export default Timer;