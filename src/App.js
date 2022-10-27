import React, { useState, useEffect, useCallback, useRef } from "react";
import Webcam from "react-webcam";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Head from "next/head"; //Next.js elementi
export default function Career() {
  const webcamRef = useRef(null);
  const [urls, seturls] = useState();
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const isInitialMount = useRef(true);
  const [statuss, setStatus] = useState(false);
  const [blobs, setblobs] = useState();
  const [file, SetFile] = useState("");
  const [error, setEror] = useState("");
  const [email, setEmail] = useState("");
  const [videos, setvideo] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [apple, setApple] = useState(true);
//   const [description, setDescriptions] = useState(false); // Next.js elementi
  const [linkedin, setlinkedin] = useState("");
  const [load, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  const [ids, setids] = useState();
//   const careersid = router.query.id; // Next.js elementi
  const [nameerror, setnameerror] = useState();
  const [emailerror, setemailerror] = useState();
  const [linkedinerror, setlinkedinerror] = useState();
  const [phoneNumbererror, setphoneNumbererror] = useState();
  const [panding, setpanding] = useState(false);

  async function getMedia(constraints) {
    let stream = null;
    try {
      stream = await navigator.mediaDevices.getUserMedia(constraints);
    } catch (err) {}
  }
  getMedia();
//   useEffect(() => {
//     const loadPost = async () => {
//       setLoading(true);
//     //   if (careersid) {
//     //     await fetch(`${url.url}/vacansy/${careersid}/`)
//     //       .then((res) => res.json())
//     //       .then((data) => {
//     //         setDatas(data);
//     //         setids(data.id);
//     //       })
//     //       .catch((error) => {
//     //         console.log(error);
//     //       });

//     //     setLoading(false);
//     //   }
//     };

//     loadPost();
//   }, [careersid]);
  const handleSubmit = () => {
    setpanding(true);
    const formData = new FormData();
    {
    //   formData.append("name", name);
    //   formData.append("email", email);
    //   formData.append("phoneNumber", phoneNumber);
    //   formData.append("linkedin", linkedin);
    //   formData.append("vacancy", ids);
    //   formData.append("cv", file);
      formData.append("file", blobs);

    //   function succes() {
    //     if (name === "") {
    //       setnameerror("User name can't be blank");
    //     } else setnameerror("");
    //     if (email == "") {
    //       setemailerror("Email can't be blank");
    //     } else setemailerror(" ");
    //     if (phoneNumber === "") {
    //       setphoneNumbererror("Phone can't be blank");
    //     } else setphoneNumbererror("");
    //     if (linkedin === "") {
    //       setlinkedinerror("Linkedin can't be blank");
    //     } else setlinkedinerror("");

    //     if (
    //       name === "" &&
    //       email === "" &&
    //       phoneNumber === "" &&
    //       linkedin === ""
    //     )
    //       return false;
    //     else return true;
    //   }
    //   if (succes()) {
        // if (file === "") setEror("Cv can't be blank");
        // else {
          setEror("");
          fetch("--------------", { // <- shu yega url ni yozing
            method: "POST",
            body: formData,
          })
            .then((res) => {
              if (res.status === 201) {
                res.json();
                setpanding(false);
                toast.success("Success!");
              } else {
                toast.error("Server error!");
              }
            })

            .then((data) => {
              console.log(data);
            })
            .catch((error) => console.log(error));
        // }
    //   } else succes();
    }
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (!capturing) {
        handleDownload();
      }
    }
  }, [capturing]);

  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop();

    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/MP4",
      });
      const videoFile = new File([blob], `wardround.${"MP4"}`, {
        type: "video/MP4",
      });
      setvideo(true);
      setblobs(videoFile);
      const url = URL.createObjectURL(blob);
      seturls(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);
  
  return (
    <div className="site-container">
      <div>
        <title>{datas.title}</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={datas.title} />
        <meta name="description" content="Careers " key={datas.title} />

        {/* <meta property="og:description" content={datas.body.substr(3, 10)} /> */}
        <meta
          property="og:image"
          content="http://sis.kibera-soft.uz:8009/media/settings/logo/2022/04/08/image_2022-04-08_10-26-35.png"
        />
        <meta
          property="twitter:image:src"
          content="http://sis.kibera-soft.uz:8009/media/settings/logo/2022/04/08/image_2022-04-08_10-26-35.png"
        />
      </div>
      <ToastContainer
        style={{ zIndex: "99999999999999", marginTop: "100px" }}
      />{" "}
      <div className=" hero-page">
        <ul className="hero-page__list">
          <li className="hero-page__item">
            <a className="hero-page__link" href="/">
              Home
            </a>
          </li>
          <li className="hero-page__item">
            <a className="hero-page__link" href="/careers">
              Career
            </a>
          </li>
          <li className="hero-page__item">
            <a className="hero-page__link link--active" href="#">
              {datas.job_type}
            </a>
          </li>
        </ul>
        <h2 className="hero-page__title title-page">{datas.title}</h2>
      </div>
      <main className="main">
        <section className="navigation">
          <div className="container">
            <ul className="navigation__list">
              <li
                className={
                  1
                    ? "navigation__item navigation__item--active"
                    : "navigation__item"
                }
              >
                <a
                  className="navigation__link"
                  href="#"
                  onClick={() => {
                    // setDescriptions(true), setApple(false);
                  }}
                >
                  Description
                </a>
              </li>
              <li
                className={
                  apple
                    ? "navigation__item navigation__item--active"
                    : "navigation__item"
                }
              >
                <a
                  className="navigation__link"
                  href="#"
                  onClick={() => {
                    // setApple(true), setDescriptions(false);
                  }}
                >
                  Apply
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="career">
          <div className="career__wrapper container">
            {!apple ? (
              <div
                className={
                  1
                    ? "career__wrapper-info career-infod"
                    : "career__wrapper-info career-info"
                }
              >
                <h3 className="career-info__heading">Description:</h3>
                <div className="career-info__text">
                  <div dangerouslySetInnerHTML={{ __html: datas.body }} />
                </div>
                title
                <ul className="career-info__slider slider career-slider">
                  <li className="slider__item">
                    <div className="slider__item-box career-slider__item">
                      <img
                        className="slider__item-icon"
                        src="/calendar.svg"
                        alt="calendar icon"
                      />
                      <p className="slider__item-text">High Experience</p>
                    </div>
                  </li>
                  <li className="slider__item">
                    <div className="slider__item-box career-slider__item">
                      <img
                        className="slider__item-icon"
                        src="/truck.svg"
                        alt="truck icon"
                      />
                      <p className="slider__item-text">World’s Area Covered</p>
                    </div>
                  </li>
                  <li className="slider__item">
                    <div className="slider__item-box career-slider__item">
                      <img
                        className="slider__item-icon"
                        src="/document.svg"
                        alt="document icon"
                      />
                      <p className="slider__item-text">
                        Corporate And Official Clients
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <div className="career__wrapper-info career-info">
                  <h3 className="career-info__heading">Description:</h3>
                  <div className="career-info__text">
                    <div dangerouslySetInnerHTML={{ __html: datas.body }} />
                  </div>
                  title
                  <ul className="career-info__slider slider career-slider">
                    <li className="slider__item">
                      <div className="slider__item-box career-slider__item">
                        <img
                          className="slider__item-icon"
                          src="/calendar.svg"
                          alt="calendar icon"
                        />
                        <p className="slider__item-text">High Experience</p>
                      </div>
                    </li>
                    <li className="slider__item">
                      <div className="slider__item-box career-slider__item">
                        <img
                          className="slider__item-icon"
                          src="/truck.svg"
                          alt="truck icon"
                        />
                        <p className="slider__item-text">
                          World’s Area Covered
                        </p>
                      </div>
                    </li>
                    <li className="slider__item">
                      <div className="slider__item-box career-slider__item">
                        <img
                          className="slider__item-icon"
                          src="/document.svg"
                          alt="document icon"
                        />
                        <p className="slider__item-text">
                          Corporate And Official Clients
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="career-wrapper__form form-holder">
                  <form className="form-holder__form">
                    <h3 className="form-holder__title">Apply for job:</h3>
                    <div className="form-holder__item">
                      <input
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        className="form-holder__item-input"
                        type="text"
                        placeholder="Your name"
                      />
                      <p
                        id="nameerror"
                        style={{ color: "red", marginTop: "2px" }}
                      >
                        {nameerror}
                      </p>
                    </div>
                    <div className="form-holder__item">
                      <input
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        className="form-holder__item-input"
                        type="text"
                        placeholder="Your Email"
                      />
                      <p
                        id="emailerror"
                        style={{ color: "red", marginTop: "2px" }}
                      >
                        {emailerror}
                      </p>
                    </div>
                    <div className="form-holder__item">
                      <input
                        onChange={(e) => setphoneNumber(e.target.value)}
                        id="phoneNumber"
                        name="phoneNumber"
                        className="form-holder__item-input"
                        type="text"
                        placeholder="Phone"
                      />
                      <p
                        id="phoneNumbererror"
                        style={{ color: "red", marginTop: "2px" }}
                      >
                        {phoneNumbererror}
                      </p>
                    </div>
                    <div className="form-holder__item">
                      <input
                        id="linkedin"
                        onChange={(e) => setlinkedin(e.target.value)}
                        name="linkedin"
                        className="form-holder__item-input"
                        type="text"
                        placeholder="LinkedIn link"
                      />
                      <p
                        id="linkedinerror"
                        style={{ color: "red", marginTop: "2px" }}
                      >
                        {linkedinerror}
                      </p>
                    </div>
                    <div className="form-holder__item">
                      <label className="form-holder__item-label">
                        {/* <input
                          id="cv"
                          name="cv"
                          className="form-holder__item-input"
                          type="file"
                          onChange={(event) => {
                            SetFile(event.target.files[0]);
                          }}
                        /> */}
                        <div className="span-holder">
                          <span className="form-holder__item-text">
                            {file ? file.name : " Upload Your CV/Resume"}
                          </span>
                        </div>
                      </label>
                      {error ? (
                        <p style={{ color: "red", marginTop: "2px" }}>
                          {error}
                        </p>
                      ) : (
                        <p></p>
                      )}
                    </div>
                    <div onClick={() => setStatus(true)}>
                      {statuss ? (
                        <div>
                          {!videos ? (
                            <Webcam
                              audio={true}
                              ref={webcamRef}
                              className="dot"
                            />
                          ) : (
                            <video
                              className="video-box"
                              id="video-replay"
                              src={urls}
                              controls
                            ></video>
                          )}
                          {capturing ? (
                            <div className="wrapper">
                              <button
                                className="video-btn"
                                onClick={handleStopCaptureClick}
                              >
                                <div className="icons-holder">
                                  <svg
                                    className="icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    width="24px"
                                    fill="#229ED9"
                                  >
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                                  </svg>
                                  <svg
                                    className="icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    width="24px"
                                    fill="#EC4646"
                                  >
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                                    <circle cx="12" cy="12" r="5" />
                                  </svg>
                                </div>
                              </button>
                            </div>
                          ) : recordedChunks.length == 0 ? (
                            <button
                              className="video-btn"
                              onClick={handleStartCaptureClick}
                            >
                              <svg
                                className="icon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="#229ED9"
                              >
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z" />
                              </svg>
                            </button>
                          ) : (
                            ""
                          )}
                          {recordedChunks.length > 0 && (
                            <div>
                              <button
                                className="video-btn"
                                onClick={handleDownload}
                              >
                                <svg
                                  className="icon"
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  width="24px"
                                  fill="#229ED9"
                                >
                                  <path d="M0 0h24v24H0V0z" fill="none" />
                                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5z" />
                                </svg>
                              </button>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="svg-holder">
                          <svg
                            className="video-img"
                            xmlns="http://www.w3.org/2000/svg"
                            enableBackground="new 0 0 24 24"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="#229ED9"
                          >
                            <g>
                              <rect fill="none" height="24" width="24" />
                            </g>
                            <g>
                              <g>
                                <path d="M18,10.48V6c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-4.48l4,3.98v-11L18,10.48z M16,9.69V18H4V6h12V9.69z" />
                                <circle cx="10" cy="10" r="2" />
                                <path d="M14,15.43c0-0.81-0.48-1.53-1.22-1.85C11.93,13.21,10.99,13,10,13c-0.99,0-1.93,0.21-2.78,0.58C6.48,13.9,6,14.62,6,15.43 V16h8V15.43z" />
                              </g>
                            </g>
                          </svg>
                        </div>
                      )}
                    </div>

                    <div className="form-holder__btn">
                      <button
                        className="form-holder__btn-button"
                        type="button"
                        onClick={() => handleSubmit()}
                      >
                        {panding ? "loading..." : "Apply"}
                      </button>
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}