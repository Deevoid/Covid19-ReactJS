import React from "react";
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
          <a className="a-green" href="tel:+911123978046">
            Helpline Number : +91-11-23978046
          </a>
          <a className="a-green" href="tel:1075">
            Toll Free : 1075
          </a>
          <a className="a-green" href="mailto:ncov2019@gov.in">
            Helpline Email ID : ncov2019@gov.in
          </a>
          <a className="a-green" href="tel:1921">
            Aarogya Setu IVRS : 1921
          </a>
          <a
            className="arogyasetu"
            target="_blank"
            rel="noopener noreferrer"
            href="https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en_IN"
          >
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
