import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import Lottie from "lottie-react-web";
import animation6 from "../Lottie/4452-dr-consultation.json";

export default function Helpline() {
  return (
    <div className="section-helpline">
      <h2>
        <span>Helping Hands</span>
      </h2>
      <p>In case of emergency, don't panic. You are just a call away.</p>
      <div className="helpline-grid">
        <div className="button-group">
          <a className="a-green" href="abcd">
            Helpline Number : +91-11-23978046
          </a>
          <a className="a-green" href="abcd">
            Toll Free : 1075
          </a>
          <a className="a-green" href="abcd">
            Helpline Email ID : ncov2019@gov.in
          </a>
          <a className="a-green" href="abcd">
            Aarogya Setu IVRS : 1921
          </a>
          <a className="arogyasetu" href="abcd">
            Download Arogya setu app{" "}
            <FontAwesomeIcon icon={faPlay} fixedWidth />
          </a>
        </div>
        <div className="lottie">
          <Lottie
            width={320}
            options={{
              animationData: animation6,
            }}
          />
        </div>
      </div>
    </div>
  );
}
