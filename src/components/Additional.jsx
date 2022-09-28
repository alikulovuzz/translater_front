import React from "react";
import { FaHistory } from "react-icons/fa";
import { AiTwotoneStar } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";
import axios from "axios";

export default function Additional() {
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
      <div className="addbox" onClick={handle1}>
        <div className="addbox-img">
          <FaHistory />
        </div>
        <div className="addbox-text">Tarix.</div>
      </div>
      <div className="addbox" onClick={handle2}>
        <div className="addbox-img">
          <AiTwotoneStar />
        </div>
        <div className="addbox-text">Yashil.</div>
      </div>
      <div className="addbox" onClick={handle3}>
        <div className="addbox-img">
          <MdPeopleAlt />
        </div>
        <div className="addbox-text">Oldingi.</div>
      </div>
    </div>
  );
}
