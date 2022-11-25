import axios from "axios";
import { useEffect, useState, useRef, useMemo } from "react";
import { SelectBox } from "./SelectBox";
import { error, success } from "../utils/notification";
import copy from "copy-to-clipboard";
import { AiFillCopy } from "react-icons/ai";
import { MdClear } from "react-icons/md";
import { BsFillMicFill } from "react-icons/bs";
import { BiTransferAlt } from "react-icons/bi";
import MicRecorder from "mic-recorder-to-mp3";
import { useDebounce } from "use-debounce";
import Additional from "./Additional";

export const TranslateBox = () => {
  const [q, setQ] = useState("");
  const [source, setSource] = useState(1);
  const [target, setTarget] = useState(2);
  const [output, setOutput] = useState("");
  const [mickIsWorking, setMickIsWorking] = useState(false);
  const recorder = useRef(null);
  const [value] = useDebounce(q, 2000);

  useEffect(() => {
    enterPressHendle();
  }, [value]);

  useEffect(() => {
    recorder.current = new MicRecorder({ bitRate: 128 });
  }, []);

  const startRecording = () => {
    setMickIsWorking(true);
    recorder.current.start().then(() => {});
  };

  const stopRecording = () => {
    setMickIsWorking(false);
    recorder.current
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const file = new File(buffer, "audio.mp3", {
          type: blob.type,
          lastModified: Date.now(),
        });
        const formData = new FormData();
        formData.append("file", file);
        axios
          .post("https://89.249.63.227/recognizeww", formData, {
            headers: {
              "content-type": "application/json",
              "transfer-encoding": "chunked",
            },
          })
          .then((res) => {
            console.log(res.data.text);
            setQ(res.data.text);
          })
          .catch((err) => console.error(err));
      })
      .catch((e) => console.log(e));
  };

  const handleSelectChange = ({ target: { value, id } }) => {
    id === "source" && target != value && setSource(value);
    id === "target" && source != value && setTarget(value);
  };

  const enterPressHendle = async (event) => {
    try {
      let res = await axios.get(`https://89.249.63.231/api/`, {
        params: {
          text: q,
          from_lang: source,
          to_lang: target,
        },
      });
      res = res.data.result;
      console.log(res);
      setOutput(res);
    } catch (err) {
      console.log(err);
    }
  };

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

  return (
    <>
      <div className="mainBox">
        <div className="main-box-one">
          <SelectBox
            id={"source"}
            select={handleSelectChange}
            chengedOption={source}
          />
          <div className="box outputResult">
            <textarea
              className="textarea"
              onChange={(e) => {
                if (e.target.value.length <= 250) {
                  setQ(e.target.value);
                }
              }}
              value={q}
            ></textarea>
            <div className="iconBox">
              <p>{q.length}/250</p>
              {source === 1 && (
                <div
                  className="mick"
                  onMouseDown={startRecording}
                  onMouseUp={stopRecording}
                  onPointerDown={startRecording}
                  onPointerUp={stopRecording}
                >
                  <button id="speech" className="btn type2">
                    <div className={mickIsWorking ? "pulse-ring" : ""}></div>
                    <BsFillMicFill />
                  </button>
                </div>
              )}
              <AiFillCopy
                onClick={() => {
                  copyToClipboard(q);
                }}
                className="icon"
              />
              <MdClear onClick={resetText} className="icon" />
            </div>
          </div>
        </div>
        <div
          className="lang-chenger"
          onClick={(_) => {
            setSource(target);
            setTarget(source);
            setQ(output);
            setOutput(q);
          }}
        >
          <BiTransferAlt />
        </div>
        <div className="main-box-one">
          <SelectBox
            id={"target"}
            select={handleSelectChange}
            chengedOption={target}
          />
          <div className="box outputResult">
            <p id="output" className="textarea">
              {output}
            </p>
            <div className="iconBox">
              <div style={{ display: "flex", alignItems: "center" }}>
                <span>{output.length}/250</span>
                <AiFillCopy
                  onClick={() => {
                    copyToClipboard(output);
                  }}
                  className="icon"
                />
              </div>
              <Additional />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
