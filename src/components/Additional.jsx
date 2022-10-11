import React, { useState } from "react";
import { FaHistory } from "react-icons/fa";
import { AiTwotoneStar } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";
import { IoMdThumbsDown,IoMdThumbsUp } from "react-icons/io";
import axios from "axios";

export default function Additional() {

  const [buttonDown, setButtonDown] = useState({
    button1: false,
    button2: false,
    button3: false
  })

  const handle1 = async (event) => {
    try {
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
        <div 
          className={buttonDown.button1?"addbox-img button-down":"addbox-img"}
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
          <FaHistory />
        </div>
        <div className="addbox-text">Tarix</div>
      </div>
      <div 
        className="addbox" 
      >
        <div
          className={buttonDown.button2?"addbox-img button-down":"addbox-img"}
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
          <IoMdThumbsUp />
        </div>
        <div className="addbox-text">Yashil</div>
      </div>
      <div 
        className="addbox" 
      >
        <div className={buttonDown.button3?"addbox-img button-down":"addbox-img"}
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
          <IoMdThumbsDown />
        </div>
        <div className="addbox-text">Oldingi</div>
      </div>
    </div>
  );
}
