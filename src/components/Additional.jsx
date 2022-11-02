import React, { useState } from "react";
import { FaHistory } from "react-icons/fa";
import { AiTwotoneStar } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";
import { IoMdThumbsDown,IoMdThumbsUp } from "react-icons/io";
import axios from "axios";
import { error, success_notification } from "../utils/notification"

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
          onMouseDown={(_) => {setButtonDown({
            button1: true,
            button2: false,
            button3: false
          })}}
          onMouseUp={(_) => {setButtonDown({
            button1: false,
            button2: false,
            button3: false
          })}}
        >
		        <div className={`flipper flipper-flip-horizontal ${buttonDown.button1?"myclasseffect":""}`}>
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
          onMouseDown={(_) => {setButtonDown({
            button1: false,
            button2: true,
            button3: false
          })}}
          onMouseUp={(_) => {setButtonDown({
            button1: false,
            button2: false,
            button3: false
          })}}
        >
		        <div className={`flipper flipper-flip-horizontal ${buttonDown.button2?"myclasseffect":""}`}>
		            <div className="button front">
                  <FaHistory />
		            </div>
		            <div className="button back">
                  <AiTwotoneStar />
		            </div>
		        </div>
		    </div>
        <div className="addbox-text">Yashil</div>
      </div>
      <div 
        className="addbox" 
      >
        <div className={`button-container button-flip-horizontal`}
          onClick={handle3}
          onMouseDown={(_) => {setButtonDown({
            button1: false,
            button2: false,
            button3: true
          })}}
          onMouseUp={(_) => {setButtonDown({
            button1: false,
            button2: false,
            button3: false
          })}}
        >
		        <div className={`flipper flipper-flip-horizontal ${buttonDown.button3?"myclasseffect":""}`}>
		            <div className="button front">
                  <FaHistory />
		            </div>
		            <div className="button back">
                  <AiTwotoneStar />
		            </div>
		        </div>
		    </div>
        <div className="addbox-text">Oldingi</div>
      </div>
    </div>
  );
}
