import React from "react";
import "./App.css";

function App() {
  const [page, setPage] = React.useState(0);
  const [q9slider, setQ9Slider] = React.useState(5);
  const [q6Count, setQ6Count] = React.useState([]);
  const [q8Count, setQ8Count] = React.useState([]);
  const [q1Answered, setQ1Answered] = React.useState("");
  const [q2Answered, setQ2Answered] = React.useState("");
  const [q3Answered, setQ3Answered] = React.useState("");
  const [q4_1Answered, setQ4_1Answered] = React.useState("");
  const [q4_2Answered, setQ4_2Answered] = React.useState("");
  const [q4_3Answered, setQ4_3Answered] = React.useState("");
  const [q4_4Answered, setQ4_4Answered] = React.useState("");
  const [q4_5Answered, setQ4_5Answered] = React.useState("");
  const [q5Answered, setQ5Answered] = React.useState("");
  const [q7Answered, setQ7Answered] = React.useState("");
  const [q10Answered, setQ10Answered] = React.useState("");

  let handleSetQ1Answer = (e) => {
    setQ1Answered(e.target.value);
    console.log(e.target.value);
  };
  let handleSetQ2Answer = (e) => {
    setQ2Answered(e.target.value);
  };
  let handleSetQ3Answer = (e) => {
    setQ3Answered(e.target.value);
  };
  let handleSetQ4_1Answer = (e) => {
    setQ4_1Answered(e.target.value);
  };
  let handleSetQ4_2Answer = (e) => {
    setQ4_2Answered(e.target.value);
  };
  let handleSetQ4_3Answer = (e) => {
    setQ4_3Answered(e.target.value);
  };
  let handleSetQ4_4Answer = (e) => {
    setQ4_4Answered(e.target.value);
  };
  let handleSetQ4_5Answer = (e) => {
    setQ4_5Answered(e.target.value);
  };
  let handleSetQ5Answer = (e) => {
    setQ5Answered(e.target.value);
  };
  let handleSetQ7Answer = (e) => {
    setQ7Answered(e.target.value);
  };
  let handleSetQ10Answer = (e) => {
    setQ10Answered(e.target.value);
  };

  let prevPageBtn = () => {
    setPage(page - 1);
  };

  let nextPageBtn = () => {
    if (page <= 2) setPage(page + 1);
    else finishSurvey();
  };

  let checkQ6 = (e, index) => {
    if (q6Count.length < 4) {
      if (q6Count.filter((i) => i === index).length > 0)
        setQ6Count(q6Count.filter((i) => i !== index));
      else if (q6Count.length < 3) setQ6Count([...q6Count, index]);
      else e.preventDefault();
    } else e.preventDefault();
  };

  let checkQ8 = (e, index) => {
    if (q8Count.length < 6) {
      if (q8Count.filter((i) => i === index).length > 0)
        setQ8Count(q8Count.filter((i) => i !== index));
      else if (q8Count.length < 5) setQ8Count([...q8Count, index]);
      else e.preventDefault();
    } else e.preventDefault();
  };

  let finishSurvey = () => {};

  return (
    <div className="App">
      <header>
        <p id="top">- Survey -</p>
      </header>
      <div className="wrap">
        {page < 3 ? (
          <form id="survey-form" method="post" action-xhr="">
            <div id="survey" className="stepper simple">
              <section>
                <div className="top-bar">Page {page + 1} out of 3</div>
                <div
                  id="content1"
                  className={"content " + (page === 0 ? "" : "hidden")}
                >
                  <p className="question">1. Lorem ipsum dolor sit?</p>
                  <div className="poll">
                    <label className="container">
                      A
                      <input
                        type="radio"
                        name="q1-poll"
                        value="A"
                        onClick={handleSetQ1Answer}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      B
                      <input
                        type="radio"
                        name="q1-poll"
                        value="B"
                        onClick={handleSetQ1Answer}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      C
                      <input
                        type="radio"
                        name="q1-poll"
                        value="C"
                        onClick={handleSetQ1Answer}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Other
                      <input
                        type="radio"
                        name="q1-poll"
                        value="Other"
                        onClick={handleSetQ1Answer}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <input
                    type="text"
                    id="q1-other-input"
                    className={
                      `other-input ` + (q1Answered === "Other" ? "visible" : "")
                    }
                  />
                  <p className="question">
                    2. Let consectetur adipisicing elit.
                  </p>
                  <div className="poll">
                    <label className="container">
                      A
                      <input
                        type="radio"
                        name="q2-poll"
                        onClick={handleSetQ2Answer}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      B
                      <input
                        type="radio"
                        name="q2-poll"
                        onClick={handleSetQ2Answer}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      C
                      <input
                        type="radio"
                        name="q2-poll"
                        onClick={handleSetQ2Answer}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>

                  <p className="question">
                    3. Ad eius quas vero recusandae tempore tenetur cupiditate?
                  </p>
                  <p className="sub-question">
                    Rank the claim selecting a value from 1 to 5.
                  </p>

                  <div className="poll poll-horizontal">
                    <label className="container">
                      1
                      <input
                        type="radio"
                        name="q3-poll"
                        onClick={handleSetQ3Answer}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      2
                      <input
                        type="radio"
                        name="q3-poll"
                        onClick={handleSetQ3Answer}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      3
                      <input
                        type="radio"
                        name="q3-poll"
                        onClick={handleSetQ3Answer}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      4
                      <input
                        type="radio"
                        name="q3-poll"
                        onClick={handleSetQ3Answer}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      5
                      <input
                        type="radio"
                        name="q3-poll"
                        onClick={handleSetQ3Answer}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>

                  <p className="question">
                    4. Answer to claims below, selecting option describing your
                    feelings towards the claim.
                  </p>
                  <div className="multi-question">
                    <div className="multi-wrap">
                      <div className="multi-text">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Repudiandae, quam.
                        </p>
                      </div>
                      <div className="poll multi-poll">
                        <table className="multi-table">
                          <tr>
                            <th>Very bad</th>
                            <th>Bad</th>
                            <th>Neutral</th>
                            <th>Good</th>
                            <th>Very good</th>
                          </tr>
                          <tr>
                            <td>
                              <label className="container">
                                <input
                                  type="radio"
                                  name="q4_1-poll"
                                  onClick={handleSetQ4_1Answer}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </td>
                            <td>
                              <label className="container">
                                <input
                                  type="radio"
                                  name="q4_1-poll"
                                  onClick={handleSetQ4_1Answer}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </td>
                            <td>
                              <label className="container">
                                <input
                                  type="radio"
                                  name="q4_1-poll"
                                  onClick={handleSetQ4_1Answer}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </td>
                            <td>
                              <label className="container">
                                <input
                                  type="radio"
                                  name="q4_1-poll"
                                  onClick={handleSetQ4_1Answer}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </td>
                            <td>
                              <label className="container">
                                <input
                                  type="radio"
                                  name="q4_1-poll"
                                  onClick={handleSetQ4_1Answer}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div className="multi-wrap">
                      <div className="multi-text">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Repudiandae, quam. Lorem ipsum dolor sit amet
                          consectetur, adipisicing elit. Assumenda, magnam?
                        </p>
                      </div>
                      <div className="poll multi-poll">
                        <table className="multi-table">
                          <tr>
                            <th>Very bad</th>
                            <th>Bad</th>
                            <th>Neutral</th>
                            <th>Good</th>
                            <th>Very good</th>
                          </tr>
                          <tr>
                            <td>
                              <label className="container">
                                <input
                                  type="radio"
                                  name="q4_2-poll"
                                  onClick={handleSetQ4_2Answer}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </td>
                            <td>
                              <label className="container">
                                <input
                                  type="radio"
                                  name="q4_2-poll"
                                  onClick={handleSetQ4_2Answer}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </td>
                            <td>
                              <label className="container">
                                <input
                                  type="radio"
                                  name="q4_2-poll"
                                  onClick={handleSetQ4_2Answer}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </td>
                            <td>
                              <label className="container">
                                <input
                                  type="radio"
                                  name="q4_2-poll"
                                  onClick={handleSetQ4_2Answer}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </td>
                            <td>
                              <label className="container">
                                <input
                                  type="radio"
                                  name="q4_2-poll"
                                  onClick={handleSetQ4_2Answer}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div className="multi-wrap">
                      <div className="multi-text">
                        <p>Atque beatae possimus non perferendis.</p>
                      </div>
                      <div className="poll multi-poll">
                        <table className="multi-table">
                          <tr>
                            <th>Very bad</th>
                            <th>Bad</th>
                            <th>Neutral</th>
                            <th>Good</th>
                            <th>Very good</th>
                          </tr>
                          <tr>
                            <td>
                              <label className="container">
                                <input
                                  type="radio"
                                  name="q4_3-poll"
                                  onClick={handleSetQ4_3Answer}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </td>
                            <td>
                              <label className="container">
                                <input
                                  type="radio"
                                  name="q4_3-poll"
                                  onClick={handleSetQ4_3Answer}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </td>
                            <td>
                              <label className="container">
                                <input
                                  type="radio"
                                  name="q4_3-poll"
                                  onClick={handleSetQ4_3Answer}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </td>
                            <td>
                              <label className="container">
                                <input
                                  type="radio"
                                  name="q4_3-poll"
                                  onClick={handleSetQ4_3Answer}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </td>
                            <td>
                              <label className="container">
                                <input
                                  type="radio"
                                  name="q4_3-poll"
                                  onClick={handleSetQ4_3Answer}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div className="multi-wrap">
                      <div className="multi-text">
                        <p>
                          Ullam nesciunt tenetur odio molestias, delectus
                          dignissimos doloremque maiores, assumenda laboriosam
                          neque eum animi.
                        </p>
                      </div>
                      <div className="poll multi-poll">
                        <table className="multi-table">
                          <tr>
                            <th>Very bad</th>
                            <th>Bad</th>
                            <th>Neutral</th>
                            <th>Good</th>
                            <th>Very good</th>
                          </tr>
                          <tr>
                            <td>
                              <label className="container">
                                <input
                                  type="radio"
                                  name="q4_4-poll"
                                  onClick={handleSetQ4_4Answer}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </td>
                            <td>
                              <label className="container">
                                <input
                                  type="radio"
                                  name="q4_4-poll"
                                  onClick={handleSetQ4_4Answer}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </td>
                            <td>
                              <label className="container">
                                <input
                                  type="radio"
                                  name="q4_4-poll"
                                  onClick={handleSetQ4_4Answer}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </td>
                            <td>
                              <label className="container">
                                <input
                                  type="radio"
                                  name="q4_4-poll"
                                  onClick={handleSetQ4_4Answer}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </td>
                            <td>
                              <label className="container">
                                <input
                                  type="radio"
                                  name="q4_4-poll"
                                  onClick={handleSetQ4_4Answer}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div className="multi-wrap">
                      <div className="multi-text">
                        <p>
                          Omnis numquam ipsa reiciendis nam ex illo odio dolorum
                          facere. Quo quas necessitatibus cum dolores inventore.
                        </p>
                      </div>
                      <div className="poll multi-poll">
                        <table className="multi-table">
                          <tr>
                            <th>Very bad</th>
                            <th>Bad</th>
                            <th>Neutral</th>
                            <th>Good</th>
                            <th>Very good</th>
                          </tr>
                          <tr>
                            <td>
                              <label className="container">
                                <input
                                  type="radio"
                                  name="q4_5-poll"
                                  onClick={handleSetQ4_5Answer}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </td>
                            <td>
                              <label className="container">
                                <input
                                  type="radio"
                                  name="q4_5-poll"
                                  onClick={handleSetQ4_5Answer}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </td>
                            <td>
                              <label className="container">
                                <input
                                  type="radio"
                                  name="q4_5-poll"
                                  onClick={handleSetQ4_5Answer}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </td>
                            <td>
                              <label className="container">
                                <input
                                  type="radio"
                                  name="q4_5-poll"
                                  onClick={handleSetQ4_5Answer}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </td>
                            <td>
                              <label className="container">
                                <input
                                  type="radio"
                                  name="q4_5-poll"
                                  onClick={handleSetQ4_5Answer}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="content2"
                  className={"content " + (page === 1 ? "" : "hidden")}
                >
                  <p className="question">5. Similique ullam quia optio?</p>
                  <div className="poll poll-horizontal">
                    <label className="container">
                      1
                      <input
                        type="radio"
                        name="q5-poll"
                        onClick={handleSetQ5Answer}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      2
                      <input
                        type="radio"
                        name="q5-poll"
                        onClick={handleSetQ5Answer}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      3
                      <input
                        type="radio"
                        name="q5-poll"
                        onClick={handleSetQ5Answer}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      4
                      <input
                        type="radio"
                        name="q5-poll"
                        onClick={handleSetQ5Answer}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      5
                      <input
                        type="radio"
                        name="q5-poll"
                        onClick={handleSetQ5Answer}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>

                  <p className="question">6. Lorem ipsum dolor sit?</p>
                  <p className="sub-question">Select up to 3 items.</p>
                  <div>
                    <label className="container">
                      Cat
                      <input
                        onClick={(e) => checkQ6(e, 0)}
                        type="checkbox"
                        name="q6-poll"
                      />
                      <span className="checkmark checkbox"></span>
                    </label>
                    <label className="container">
                      Dog
                      <input
                        onClick={(e) => checkQ6(e, 1)}
                        type="checkbox"
                        name="q6-poll"
                      />
                      <span className="checkmark checkbox"></span>
                    </label>
                    <label className="container">
                      Horse
                      <input
                        onClick={(e) => checkQ6(e, 2)}
                        type="checkbox"
                        name="q6-poll"
                      />
                      <span className="checkmark checkbox"></span>
                    </label>
                    <label className="container">
                      Pig
                      <input
                        onClick={(e) => checkQ6(e, 3)}
                        type="checkbox"
                        name="q6-poll"
                      />
                      <span className="checkmark checkbox"></span>
                    </label>
                  </div>

                  <p className="question">7. Aya ra su tero?</p>
                  <div className="poll">
                    <label className="container">
                      Lorem, ipsum dolor
                      <input
                        type="radio"
                        name="q7-poll"
                        onClick={handleSetQ7Answer}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Ullam quia
                      <input
                        type="radio"
                        name="q7-poll"
                        onClick={handleSetQ7Answer}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Suspendisse est justo
                      <input
                        type="radio"
                        name="q7-poll"
                        onClick={handleSetQ7Answer}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Pellentesque
                      <input
                        type="radio"
                        name="q7-poll"
                        onClick={handleSetQ7Answer}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Praesent tempus
                      <input
                        type="radio"
                        name="q7-poll"
                        onClick={handleSetQ7Answer}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>

                  <p className="question">8. Lorem ipsum dolor sit?</p>
                  <p className="sub-question">Select up to 5 items.</p>
                  <div>
                    <label className="container">
                      A
                      <input
                        type="checkbox"
                        name="q8-poll"
                        onClick={(e) => checkQ8(e, 0)}
                      />
                      <span className="checkmark checkbox"></span>
                    </label>
                    <label className="container">
                      B
                      <input
                        type="checkbox"
                        name="q8-poll"
                        onClick={(e) => checkQ8(e, 1)}
                      />
                      <span className="checkmark checkbox"></span>
                    </label>
                    <label className="container">
                      C
                      <input
                        type="checkbox"
                        name="q8-poll"
                        onClick={(e) => checkQ8(e, 2)}
                      />
                      <span className="checkmark checkbox"></span>
                    </label>
                    <label className="container">
                      D
                      <input
                        type="checkbox"
                        name="q8-poll"
                        onClick={(e) => checkQ8(e, 3)}
                      />
                      <span className="checkmark checkbox"></span>
                    </label>
                    <label className="container">
                      E
                      <input
                        type="checkbox"
                        name="q8-poll"
                        onClick={(e) => checkQ8(e, 4)}
                      />
                      <span className="checkmark checkbox"></span>
                    </label>
                    <label className="container">
                      F
                      <input
                        type="checkbox"
                        name="q8-poll"
                        onClick={(e) => checkQ8(e, 5)}
                      />
                      <span className="checkmark checkbox"></span>
                    </label>
                    <label className="container">
                      G
                      <input
                        type="checkbox"
                        name="q8-poll"
                        onClick={(e) => checkQ8(e, 6)}
                      />
                      <span className="checkmark checkbox"></span>
                    </label>
                    <label className="container">
                      H
                      <input
                        type="checkbox"
                        name="q8-poll"
                        onClick={(e) => checkQ8(e, 7)}
                      />
                      <span className="checkmark checkbox"></span>
                    </label>
                  </div>
                </div>

                <div
                  id="content3"
                  className={"content " + (page === 2 ? "" : "hidden")}
                >
                  <p className="question">9. Lorem ipsum dolor sit amet.</p>
                  <p className="sub-question">
                    Score how strongly you support the claim.
                  </p>
                  <div className="range-selector">
                    <p>{q9slider}</p>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={q9slider}
                      onChange={(e) => setQ9Slider(e.target.value)}
                    />
                  </div>
                  <p className="question">10. Lorem ipsum dolor sit?</p>
                  <div className="poll">
                    <label className="container">
                      A
                      <input
                        type="radio"
                        name="q10-poll"
                        value="A"
                        onClick={(e) => handleSetQ10Answer(e)}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      B
                      <input
                        type="radio"
                        name="q10-poll"
                        value="B"
                        onClick={handleSetQ10Answer}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      C
                      <input
                        type="radio"
                        name="q10-poll"
                        value="C"
                        onClick={handleSetQ10Answer}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      D
                      <input
                        type="radio"
                        name="q10-poll"
                        value="D"
                        onClick={handleSetQ10Answer}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Other
                      <input
                        type="radio"
                        name="q10-poll"
                        value="Other"
                        onClick={handleSetQ10Answer}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <input
                    type="text"
                    id="q10-other-input"
                    className={
                      `other-input ` +
                      (q10Answered === "Other" ? "visible" : "")
                    }
                  />
                </div>
                <div className="bottom-bar">
                  {page > 0 ? (
                    <button
                      type="button"
                      className="button-prev"
                      onClick={prevPageBtn}
                    >
                      back
                    </button>
                  ) : null}
                  <div className="step-dots">
                    <i className="step-dot active"></i>
                    <i className={"step-dot " + (page > 0 ? "active" : "")}></i>
                    <i className={"step-dot " + (page > 1 ? "active" : "")}></i>
                  </div>
                  <button
                    type="button"
                    onClick={nextPageBtn}
                    disabled={
                      page === 2 &&
                      !(
                        q1Answered &&
                        q2Answered &&
                        q3Answered &&
                        q4_1Answered &&
                        q4_2Answered &&
                        q4_3Answered &&
                        q4_4Answered &&
                        q4_5Answered &&
                        q5Answered &&
                        q6Count.length > 0 &&
                        q7Answered &&
                        q8Count.length > 0 &&
                        q10Answered
                      )
                    }
                    className="button-next"
                  >
                    {page < 2 ? "next" : "finish"}
                  </button>
                </div>
              </section>
            </div>
          </form>
        ) : (
          <div id="thanks" className="thank-you">
            <p className="thank-you-title">Thank you</p>
            <p className="thank-you-subtitle">
              We are grateful to you for filling in the survey.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
