import React, { useState, useEffect, useRef } from "react";
// import logo from './logo.svg';
import "./App.css";

function App() {
  const boxref = useRef<HTMLDivElement>(null);
  const contref = useRef<HTMLDivElement>(null);
  const isClicked = useRef<boolean>(false);
  const cords = useRef<{
    startx: number;
    starty: number;
    lastx: number;
    lasty: number;
  }>({ startx: 0, starty: 0, lastx: 0, lasty: 0 });

  const [mapper, setMapper] = useState("");
  const [mapCounter, setmapCounter] = useState(1);
  const [Targetmapper, setTargetMapper] = useState("");

  const texthandler = (event: any) => {
    // alert(event.target.id + "." + event.target.innerText);
    let mapValue = event.target.id + "." + event.target.innerText;

    let previousSelect = event.target.innerText.split("-");

    if (previousSelect.length === 1) {
      // setbgColorSrc("red");
      setMapper("$." + mapValue + "-M" + mapCounter);

      event.target.innerText = event.target.innerText + "-M" + mapCounter;
    } else {
      setbgColorSrc("");
      setMapper("");
      event.target.innerText = previousSelect[0];
    }
    // alert(event.target.tagName);      // BUTTON
  };

  const [bgColorSrc, setbgColorSrc] = useState("");
  const [totalMapping, settotalMapping] = useState("");

  const [bgColor, setbgColor] = useState("");

  const textTargethandler = (event: any) => {
    // alert(event.target.id + "." + event.target.innerText);
    let mapValue = event.target.id + "." + event.target.innerText;

    let previousSelect = event.target.innerText.split("-");
    if (previousSelect.length === 1) {
      // setbgColor("red");
      // alert( event.target.innerHTML);
      setTargetMapper("$." +mapValue + "-M" + mapCounter);
      settotalMapping(
         totalMapping + mapper + " --> $." + mapValue + "-M" + mapCounter + "|"
      );

      event.target.innerText = event.target.innerText + "-M" + mapCounter;
      setmapCounter(mapCounter + 1);
    } else {
      setbgColor("");
      setTargetMapper("");
      event.target.innerText = previousSelect[0];
      let reMapping = "";
      totalMapping.split("|").map((mp: string) => {
        if (mp.indexOf(mapValue) > -1) {
          // alert(event.target.id);
        } else {
          reMapping += mp + "|";
        }
      });
      if (reMapping !== "") {
        settotalMapping(reMapping);
      }
    }
    // alert(event.target.tagName);      // BUTTON
  };

  useEffect(() => {
    if (!boxref.current || !contref.current) return;

    const box = boxref.current;
    const cont = contref.current;

    const onMouseUp = (e: MouseEvent) => {
      isClicked.current = false;
      cords.current.lastx = box.offsetTop;
      cords.current.lasty = box.offsetLeft;
    };
    const onMouseDown = (e: MouseEvent) => {
      isClicked.current = true;
      cords.current.startx = e.clientX;
      cords.current.starty = e.clientY;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return;

      const nextx = e.clientX - cords.current.startx + cords.current.lastx;
      const nexty = e.clientY - cords.current.starty + cords.current.lasty;

      box.style.top = `${nexty}px`;
      box.style.left = `${nextx}px`;
    };

    box.addEventListener("mousedown", onMouseDown);
    box.addEventListener("mouseup", onMouseUp);
    cont.addEventListener("mousemove", onMouseMove);

    const cleanUP = () => {
      box.removeEventListener("mousedown", onMouseDown);
      box.removeEventListener("mouseup", onMouseUp);
    };

    return cleanUP;
  }, []);

  return (
    <main>
      <table>
        <tbody>
          <tr>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <div className="container">
                        {/* <div className='box' ref={boxref}>Mango 1</div> */}
                        <ul className="root">
                          <li>
                            <details open>
                              <summary>Mango 1</summary>
                              <ul>
                                <li>
                                  <div>
                                    <div id="Mango 1" onClick={texthandler}>
                                      Mango 1 leaf 1
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div id="Mango 1" onClick={texthandler}>
                                    Mango 1 leaf 2
                                  </div>
                                </li>
                                <li>
                                  <div id="Mango 1" onClick={texthandler}>
                                    Mango 1 leaf 3
                                  </div>
                                </li>
                                <li>
                                  <div id="Mango 1" onClick={texthandler}>
                                    Mango 1 leaf 4
                                  </div>
                                </li>
                                <li>
                                  <div id="Mango 1" onClick={texthandler}>
                                    Mango 1 leaf 5
                                  </div>
                                  <details open>
                                    <summary>Mango 1 leaf 5.1</summary>
                                    <ul>
                                      <li>
                                        <div>
                                          <div
                                            id="Mango 1 leaf 5.1"
                                            onClick={texthandler}
                                          >
                                            Mango 1 leaf 5.1.1
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div
                                          id="Mango 1 leaf 5.1"
                                          onClick={texthandler}
                                        >
                                          Mango 1 leaf 5.1.2
                                        </div>
                                      </li>
                                      <li>
                                        <div
                                          id="Mango 1 leaf 5.1"
                                          onClick={texthandler}
                                        >
                                          Mango 1 leaf 5.1.3
                                        </div>
                                      </li>
                                      <li>
                                        <div
                                          id="Mango 1 leaf 5.1"
                                          onClick={texthandler}
                                        >
                                          Mango 1 leaf 5.1.4
                                        </div>
                                      </li>
                                      <li>
                                        <div
                                          id="Mango 1 leaf 5.1"
                                          onClick={texthandler}
                                        >
                                          Mango 1 leaf 5.1.5
                                        </div>
                                      </li>
                                    </ul>
                                  </details>
                                </li>
                              </ul>
                            </details>
                          </li>
                          <li>
                            <details open>
                              <summary>Mango 2</summary>
                              <ul>
                                <li>
                                  <div id="Mango 2" onClick={texthandler}>
                                    Mango 2 leaf 1
                                  </div>
                                </li>
                                <li>
                                  <div id="Mango 2" onClick={texthandler}>
                                    Mango 2 leaf 2
                                  </div>
                                </li>
                                <li>
                                  <div id="Mango 2" onClick={texthandler}>
                                    Mango 2 leaf 3
                                  </div>
                                </li>
                                <li>
                                  <div id="Mango 2" onClick={texthandler}>
                                    Mango 2 leaf 4
                                  </div>
                                </li>
                                <li>
                                  <div id="Mango 2" onClick={texthandler}>
                                    Mango 2 leaf 5
                                  </div>
                                </li>
                              </ul>
                            </details>
                          </li>

                          <li>
                            <details open>
                              <summary>Mango 3</summary>
                              <ul>
                                <li>
                                  <div id="Mango 3" onClick={texthandler}>
                                    Mango 3 leaf 1
                                  </div>
                                  <details open>
                                    <summary>Mango 3 leaf 1</summary>
                                    <ul>
                                      <li>
                                        <div id="Mango 3" onClick={texthandler}>
                                          Mango 3.1 leaf 1
                                        </div>
                                      </li>
                                      <li>
                                        <div id="Mango 3" onClick={texthandler}>
                                          Mango 3.1 leaf 2
                                        </div>
                                      </li>
                                      <li>
                                        <div id="Mango 3" onClick={texthandler}>
                                          Mango 3.1 leaf 3
                                        </div>
                                      </li>
                                      <li>
                                        <div id="Mango 3" onClick={texthandler}>
                                          Mango 3.1 leaf 4
                                        </div>
                                      </li>
                                      <li>
                                        <div id="Mango 3" onClick={texthandler}>
                                          Mango 3.1 leaf 5
                                        </div>
                                      </li>
                                    </ul>
                                  </details>
                                </li>
                                <li>
                                  <div id="Mango 3" onClick={texthandler}>
                                    Mango 3 leaf 3
                                  </div>
                                </li>
                                <li>
                                  <div id="Mango 3" onClick={texthandler}>
                                    Mango 3 leaf 4
                                  </div>
                                </li>
                                <li>
                                  <div id="Mango 3" onClick={texthandler}>
                                    Mango 3 leaf 5
                                  </div>
                                </li>
                              </ul>
                            </details>
                          </li>

                          <li>Mango 4</li>
                          <li>
                            <details open>
                              <summary>Mango 5</summary>
                              <ul>
                                <li>
                                  <div id="Mango 5" onClick={texthandler}>
                                    Mango 5 leaf 1
                                  </div>
                                </li>
                                <li>
                                  <div id="Mango 5" onClick={texthandler}>
                                    Mango 5 leaf 2
                                  </div>
                                </li>
                                <li>
                                  <div id="Mango 5" onClick={texthandler}>
                                    Mango 5 leaf 3
                                  </div>
                                </li>
                                <li>
                                  <div id="Mango 5" onClick={texthandler}>
                                    Mango 5 leaf 4
                                  </div>
                                </li>
                                <li>
                                  <div id="Mango 5" onClick={texthandler}>
                                    Mango 5 leaf 5
                                  </div>
                                </li>
                              </ul>
                            </details>
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td>
                      <div className="container" ref={contref}>
                        {/* <div className='box' ref={boxref}>Apple 1</div> */}
                        <ul className="root">
                          <li>
                            <details open>
                              <summary>Apple 1</summary>
                              <ul>
                                <li>
                                  <div>
                                    <div
                                      id="Apple 1"
                                      onClick={textTargethandler}
                                    >
                                      Apple 1 leaf 1
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div id="Apple 1" onClick={textTargethandler}>
                                    Apple 1 leaf 2
                                  </div>
                                </li>
                                <li>
                                  <div>
                                    <div
                                      id="Apple 1"
                                      onClick={textTargethandler}
                                    >
                                      Apple 1 leaf 3
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div id="Apple 1" onClick={textTargethandler}>
                                    Apple 1 leaf 4
                                  </div>
                                </li>
                                <li>
                                  <div id="Apple 1" onClick={textTargethandler}>
                                    Apple 1 leaf 5
                                  </div>
                                </li>
                              </ul>
                            </details>
                          </li>
                          <li>
                            <details open>
                              <summary>Apple 2</summary>
                              <ul>
                                <li>
                                  <div id="Apple 2" onClick={textTargethandler}>
                                    Apple 2 leaf 1
                                  </div>
                                </li>
                                <li>
                                  <div id="Apple 2" onClick={textTargethandler}>
                                    Apple 2 leaf 2
                                  </div>
                                </li>
                                <li>
                                  <div id="Apple 2" onClick={textTargethandler}>
                                    Apple 2 leaf 3
                                  </div>
                                </li>
                                <li>
                                  <div id="Apple 2" onClick={textTargethandler}>
                                    Apple 2 leaf 4
                                  </div>
                                </li>
                                <li>
                                  <div id="Apple 2" onClick={textTargethandler}>
                                    Apple 2 leaf 5
                                  </div>
                                </li>
                              </ul>
                            </details>
                          </li>

                          <li>
                            <details open>
                              <summary>Apple 3</summary>
                              <ul>
                                <li>
                                  Apple 3 leaf 1
                                  <details open>
                                    <summary>Apple 3 leaf 1</summary>
                                    <ul>
                                      <li>
                                        <div
                                          id="Apple 3.Apple 3 leaf 1"
                                          onClick={textTargethandler}
                                        >
                                          Apple 3.1 leaf 1
                                        </div>
                                      </li>
                                      <li>
                                        <div
                                          id="Apple 3.Apple 3 leaf 1"
                                          onClick={textTargethandler}
                                        >
                                          Apple 3.1 leaf 2
                                        </div>
                                      </li>
                                      <li>
                                        <div
                                          id="Apple 3.Apple 3 leaf 1"
                                          onClick={textTargethandler}
                                        >
                                          Apple 3,1 leaf 3
                                        </div>
                                      </li>
                                      <li>
                                        <div
                                          id="Apple 3.Apple 3 leaf 1"
                                          onClick={textTargethandler}
                                        >
                                          Apple 3.1 leaf 4
                                        </div>
                                      </li>
                                      <li>
                                        <div
                                          id="Apple 3.Apple 3 leaf 1"
                                          onClick={textTargethandler}
                                        >
                                          Apple 3.1 leaf 5
                                        </div>
                                      </li>
                                    </ul>
                                  </details>
                                </li>
                                <li>
                                  <div
                                    id="Apple 3.leaf 3"
                                    onClick={textTargethandler}
                                  >
                                    Apple 3 leaf 3
                                  </div>
                                </li>
                                <li>
                                  <div
                                    id="Apple 3.leaf 4"
                                    onClick={textTargethandler}
                                  >
                                    Apple 3 leaf 4
                                  </div>
                                </li>
                                <li>
                                  <div
                                    id="Apple 3.leaf 5"
                                    onClick={textTargethandler}
                                  >
                                    Apple 3 leaf 5
                                  </div>
                                </li>
                              </ul>
                            </details>
                          </li>

                          <li>
                            <div id="Apple 4" onClick={textTargethandler}>
                              Apple 4
                            </div>
                          </li>
                          <li>
                            <details open>
                              <summary>Apple 5</summary>
                              <ul>
                                <li>
                                  <div id="Apple 5" onClick={textTargethandler}>
                                    Apple 5 leaf 1
                                  </div>
                                </li>
                                <li>
                                  <div id="Apple 5" onClick={textTargethandler}>
                                    Apple 5 leaf 2
                                  </div>
                                </li>
                                <li>
                                  <div id="Apple 5" onClick={textTargethandler}>
                                    Apple 5 leaf 3
                                  </div>
                                </li>
                                <li>
                                  <div id="Apple 5" onClick={textTargethandler}>
                                    Apple 5 leaf 4
                                  </div>
                                </li>
                                <li>
                                  <div id="Apple 5" onClick={textTargethandler}>
                                    Apple 5 leaf 5
                                  </div>
                                </li>
                              </ul>
                            </details>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <br />
              <br />
              <table style={{ paddingLeft: 500 }}>
                <tbody>
                <tr><td colSpan={3}>Current Selection</td></tr>
                  <tr>
                    <td>{mapper}</td>
                    <td>--{">"}</td>
                    <td>{Targetmapper}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      <table style={{ paddingLeft: 100 }}>
        <tbody>
          <tr><td>Selection History</td></tr>
          <tr>
            <td>
              {totalMapping.split("|").map((msp) => (
                <pre style={{backgroundColor: "greenyellow", fontSize: 20}}>{msp}</pre>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default App;
