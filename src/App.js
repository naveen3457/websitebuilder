import './App.css';
import { useDispatch, useSelector} from 'react-redux';
import { useState } from "react";
import {TitleContent} from "./utils/titlecontent";
import  GetComponentSlice from "./redux/slice/getcomponentsslice";

function App() {

  const dispatch = useDispatch();

  // const selectedComp = useSelector((state) => state.getComponent.value)

  const [show, setShow] = useState(false);

  const toggleShow = () => {
    if (show == false) {
      setShow(true)
    }
    else {
      setShow(false)
    }
  }

  // const clickMeOnTitle = (f) => {

  //   dispatch(GetComponentSlice(f.target.innerText))
  // }

  return (
    <div className="App">
      <div className='header'>

          <h1>WEBSITE BUILDER</h1>
      </div>


      <div className={show ? "draw" : "nodraw"}>
        <div style={{ position: "relative", marginLeft: "-1rem" }}>
          <div className="leftarrow" onClick={toggleShow}>{show ? "X" : "<"}</div>
        </div>

        <div>{TitleContent.map((e) => {

          <div className={!show ?"flex":"none"}>
            {/* <div onClick={(f) => clickMeOnTitle(f)} name={e.Title}>{e.Title}</div> */}
            <div>+</div>
          </div>
        })}
        </div>

        <div className="AddComponent" onClick={() => { setShow(true) }}>
        </div>
      </div>
    </div>
  );
}


export default App;