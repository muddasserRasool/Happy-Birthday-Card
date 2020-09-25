import React, { useEffect, useLayoutEffect, useState } from 'react';
import './App.css';
import decoration from './decoration.png'
import YellowBaloon from './yellow baloon.png'
import RedBaloon from './Red Baloon.png'
import useWebAnimations from "@wellyshen/use-web-animations";
import BirthdayCake from './birthdaycake.png'
import Happy from './Happy.mp3'
import Typist from 'react-typist';


let light = "container"
// let ButtonText = "Lets Turn Lights ON"


function App() {

  const [counter, setcounter] = useState(0);
  const [ButtonText, setButtonText] = useState("Lets Turn Lights ON")
  const decorationanimee = useWebAnimations();
  const Baloonanimee = useWebAnimations();

  const cursor = {
    show: true,
    blink: true,
    element: '|',
    hideWhenDone: true,
    hideWhenDoneDelay: 1000,
  }




  useEffect(() => {

    if (counter === 1) {
      setButtonText("Lets bring Decorations")
      light = "litContainer";
    }
    if (counter === 2) {
      setButtonText("Lets bring Baloons")
      light = "litContainer";
    }

    if (counter === 3) {
      setButtonText("Lets bring Cake")
      Baloonanimee.animate({
        keyframes: {
          transform: ["translateY(15px)"]
        },
        timing: {
          duration: 2000, // Speed up the animation
          iterations: Infinity,
          direction: "alternate", // Run the animation forwards and then backwards

        },
      });
    }
    if (counter === 4) {
      setButtonText("Lets turn the Music ON!")
    }
  }, [counter, Baloonanimee])

  useLayoutEffect(() => {
    console.log(counter)

  }, [counter])

  function handleEvent() {
    return (
      setcounter(counter + 1)
    );
  }



  return (
    <div className={light} >
      {counter < 5 && <button className="Button" onClick={() => handleEvent()}>{ButtonText}</button>}
      <span ref={decorationanimee.ref}>
        {counter >= 2 && <img src={decoration} alt="decoration" height="100px" width="350px" />}</span>
      <span className="Baloons" ref={Baloonanimee.ref}>
        {counter >= 3 && <img src={YellowBaloon} alt="Baloons" height="100px" width="90px" />}
        {counter >= 3 && <img src={RedBaloon} alt="Baloons" height="100px" width="90px" />}
      </span>
      {counter >= 4 && <img src={BirthdayCake} alt="Birthday" height="150px" width="140px" />}
      {counter >= 5 && <audio autoPlay={true} preload="true" autostart="true" loop={true} src={Happy} type="audio/mpeg" />}
      {counter >= 5 && <Typist className="HappyBirthday" cursor={cursor} >
        <Typist.Delay ms={5500} />
        <br />
        <span>May your smile be bright just like the sun shines everyday.</span>
        <Typist.Delay ms={2500} />
        <br />
        <span className="FinalMessage">HAPPY BIRTHDAY My Friend</span>
      </Typist>}



    </div>
  );
}

export default App;
