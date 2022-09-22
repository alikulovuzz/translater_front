import React from 'react'
import { FaHistory } from "react-icons/fa";
import { AiTwotoneStar } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";



export default function Additional() {
  return (
    <div className='additional-wrapper'>
        <div className="addbox">
            <div className="addbox-img">
                <FaHistory/>
            </div>
            <div className="addbox-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
        </div>
        <div className="addbox">
            <div className="addbox-img">
                <AiTwotoneStar/>
            </div>
            <div className="addbox-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
        </div>
        <div className="addbox">
            <div className="addbox-img">
                <MdPeopleAlt/>
            </div>
            <div className="addbox-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
        </div>
    </div>
  )
}