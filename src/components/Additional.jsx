import React, { useState } from "react";
import { FaHistory } from "react-icons/fa";
import { AiTwotoneStar } from "react-icons/ai";
import axios from "axios";
import { success_notification } from "../utils/notification"

export default function Additional() {

  const [buttonDown, setButtonDown] = useState({
    button1: false,
    button2: false,
    button3: false
  })

  const handle1 = async (event) => {
    try {
      success_notification("Yoramingiz uchun rahmat! Sizning fikringiz biz uchun muhim.");
      let res = await axios.get(`http://89.249.63.227:8080/api/nimadir`, {
        params: {},
        data: {},
      });
      console.log(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const handle2 = async (event) => {
    try {
      success_notification("Yoramingiz uchun rahmat! Sizning fikringiz biz uchun muhim.");
      let res = await axios.get(`http://89.249.63.227:8080/api/nimadir`, {
        params: {},
        data: {},
      });
      console.log(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const handle3 = async (event) => {
    try {
      success_notification("Yoramingiz uchun rahmat! Sizning fikringiz biz uchun muhim.");
      let res = await axios.get(`http://89.249.63.227:8080/api/nimadir`, {
        params: {},
        data: {},
      });
      console.log(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="additional-wrapper">
      <div
        className="addbox"
      >
        <div className={`button-container button-flip-horizontal`}
          onClick={handle1}
          onMouseDown={(_) => {
            setButtonDown({
              button1: true,
              button2: false,
              button3: false
            })
          }}
          onMouseUp={(_) => {
            setButtonDown({
              button1: false,
              button2: false,
              button3: false
            })
          }}
        >
          <div className={`flipper flipper-flip-horizontal ${buttonDown.button1 ? "myclasseffect" : ""}`}>
            <div className="button front">
              <FaHistory />
            </div>
            <div className="button back">
              <AiTwotoneStar />
            </div>
          </div>
        </div>
        <div className="addbox-text">Tarix</div>
      </div>
      <div
        className="addbox"
      >
        <div className={`button-container button-flip-horizontal`}
          onClick={handle2}
          onMouseDown={(_) => {
            setButtonDown({
              button1: false,
              button2: true,
              button3: false
            })
          }}
          onMouseUp={(_) => {
            setButtonDown({
              button1: false,
              button2: false,
              button3: false
            })
          }}
        >
          <div className={`flipper flipper-flip-horizontal ${buttonDown.button2 ? "myclasseffect" : ""}`}>
            <div className="button front">
              <FaHistory />
            </div>
            <div className="button back">
              <AiTwotoneStar />
            </div>
          </div>
        </div>
        <div className="addbox-text">Yaxshi</div>
      </div>
      <div
        className="addbox"
      >
        <div className={`button-container button-flip-horizontal`}
          onClick={handle3}
          onMouseDown={(_) => {
            setButtonDown({
              button1: false,
              button2: false,
              button3: true
            })
          }}
          onMouseUp={(_) => {
            setButtonDown({
              button1: false,
              button2: false,
              button3: false
            })
          }}
        >
          <div className={`flipper flipper-flip-horizontal ${buttonDown.button3 ? "myclasseffect" : ""}`}>
            <div className="button front">
              <FaHistory />
            </div>
            <div className="button back">
              <AiTwotoneStar />
            </div>
          </div>
        </div>
        <div className="addbox-text">Yomon</div>
      </div>
      <div id="myModal" className={`modal ${buttonDown.button1 ? "" : "dbn"}`}>
        <div className="modal-content">
          <span className="close" onClick={(_) => {
            setButtonDown({
              button1: false,
              button2: false,
              button3: false
            })
          }}>&times;</span>
          <em className="addbox-text"><b>Tarjimani kiriting!!!</b></em>
          <div className="box" style={{marginTop: "10px"}}>
            <textarea className="outputResult"></textarea>
          </div>
          <div>
            <div className="send-modal">
              <em className="addbox-text">Unutmang! Sizning yordamingiz biz uchun muhim.</em>
              {/* <b className="addbox-text">Matinning rus tilidan o'zbek tiliga tarjimasi</b> */}
              <button className="modal-send-button" onClick={(_) => {
                handle1()
              }}>Yuborish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
