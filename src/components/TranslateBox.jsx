import axios from "axios"
import { useEffect, useState, useRef } from "react"
import { SelectBox } from "./SelectBox"
import { error, success } from "../utils/notification"
import copy from "copy-to-clipboard"
import { AiFillCopy } from "react-icons/ai"
import { MdClear } from "react-icons/md"
import { BsFillMicFill } from "react-icons/bs"
import MicRecorder from "mic-recorder-to-mp3"

export const TranslateBox = () => {
  const [q, setQ] = useState("");
  
  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");
  const [output, setOutput] = useState("");
  const [mickIsWorking, setMickIsWorking] = useState(false);
  const recorder = useRef(null)

  useEffect(() => {
    recorder.current = new MicRecorder({ bitRate: 128 })
  }, [])

  const startRecording = () => {
    setMickIsWorking(true)
    recorder.current.start().then(() => {
    })
  }

  const stopRecording = () => {
    setMickIsWorking(false)
    recorder.current
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const file = new File(buffer, "audio.mp3", {
          type: blob.type,
          lastModified: Date.now(),
        })
        const formData = new FormData();
        formData.append('file', file);
        axios
          .post("http://localhost:8080/file", formData, {
            headers: {
              "content-type": "application/json",
              "transfer-encoding": "chunked",
            }
          })
          .then((res) => {
            console.log(res.data)
          })
          .catch((err) => console.error(err))
      })
      .catch((e) => console.log(e))
  }

  const handleSelectChange = ({ target: { value, id } }) => {
    id === "source" && setSource(value);
    id === "target" && setTarget(value);
  };

  const handleGetRequest = async () => {
    if (q.length < 1) {
      setOutput("");
      return false;
    }
    if (source === "" || target === "") {
      return error("Iltimos tilni tanlang.");
    }
    
  };

  const enterPressHendle = async event => {
    if (event.which === 13) {
      try {
        let res = await axios.get(`http://89.249.63.231/api/`, {
          params: {
            text: q,
            from_lang:source,
            to_lang:target,
          },
        });
        res = res.data.result;
        console.log(res)
        setOutput(res);
      } catch (err) {
        console.log(err);
      }
    }
  }

  const copyToClipboard = (text) => {
    copy(text);
    success("Nusxa olindi!");
  };

  const resetText = () => {
    if (q === "" && output === "") {
      error("Tozalandi!");
    } else {
      success("Allaqachon bo'sh!");
      setQ("");
      setOutput("");
    }
  };

  //Debounce Function
  useEffect(() => {
    let timerID = setTimeout(() => {
      handleGetRequest();
    }, 1000);

    return () => {
      clearTimeout(timerID);
    };
  }, [q]);

  return (
    <>
      <div className="mainBox">
        <div className="main-box-one">
          <SelectBox id={"source"} select={handleSelectChange} />
          <div className="box">
            <textarea
              onChange={(e) => {
                setQ(e.target.value);
              }}
              value={q}
              className="outputResult"
              onKeyPress={enterPressHendle}
            ></textarea>
          </div>
          <div className="iconBox">
            <p>{q.length}/250</p>
            <div className="mick"
              onMouseDown={startRecording} onMouseUp={stopRecording}
              >
              <BsFillMicFill className={mickIsWorking?"mick-start":""}/>
            </div>
            <AiFillCopy
              onClick={() => {
                copyToClipboard(q);
              }}
              className="icon"
            />
            <MdClear onClick={resetText} className="icon" />
          </div>
        </div>
        
        <div className="main-box-one">
          <SelectBox id={"target"} select={handleSelectChange} />
          <div className="outputResult box">
            <p id="output">{output}</p>
          </div>
          <div className="iconBox">
            <p>{output.length}/250</p>
            <AiFillCopy
              onClick={() => {
                copyToClipboard(output);
              }}
              className="icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};