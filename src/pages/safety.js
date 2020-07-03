import React from "react";
import Layout from "../components/layout";
import Helmet from "react-helmet";

import Lottie from "lottie-react-web";
import animation1 from "../Lottie/17896-wash-your-hands.json";
import animation2 from "../Lottie/18389-social-distancing.json";
import animation3 from "../Lottie/17699-covid-19.json";
import animation4 from "../Lottie/17895-wear-mask.json";
import animation5 from "../Lottie/18289-stay-home-stay-safe-red.json";
import animation6 from "../Lottie/17902-covid19.json";
import animation7 from "../Lottie/18246-covid-19-get-punched.json";
import animation8 from "../Lottie/17900-namaste-no-shake-hands.json";

export default function Blog() {
  return (
    <Layout>
      <Helmet>
        <title>
          Safety and Prevention | Stop Covid19 Safety and prevention from
          Covid19
        </title>
        <meta
          name="description"
          content="A collection of safety and preventive measures isssued by WHO to stay safe from Covid19 and coroavirus."
        />
      </Helmet>
      <div className="container">
        <h4 className="safety-h2">
          To prevent infection and to slow transmission of COVID-19, do the
          following:
        </h4>
        <div className="safety-page">
          <div className="card">
            <div className="card-head">
              {" "}
              <Lottie
                width={250}
                options={{
                  animationData: animation1,
                }}
              />
            </div>
            <div className="card-body">
              <p>
                Wash your hands regularly with soap and water, or clean them
                with alcohol-based hand rub.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              {" "}
              <Lottie
                width={250}
                options={{
                  animationData: animation2,
                }}
              />
            </div>
            <div className="card-body">
              <p>
                Maintain at least 2 metre distance between you and people
                coughing or sneezing.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              {" "}
              <Lottie
                width={250}
                options={{
                  animationData: animation3,
                }}
              />
            </div>
            <div className="card-body">
              <p>Avoid touching your face.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              {" "}
              <Lottie
                width={250}
                options={{
                  animationData: animation4,
                }}
              />
            </div>
            <div className="card-body">
              <p>Cover your mouth and nose when coughing or sneezing.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              {" "}
              <Lottie
                width={250}
                options={{
                  animationData: animation5,
                }}
              />
            </div>
            <div className="card-body">
              <p>Stay home if you feel unwell.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              {" "}
              <Lottie
                width={250}
                options={{
                  animationData: animation6,
                }}
              />
            </div>
            <div className="card-body">
              <p>
                Refrain from smoking and other activities that weaken the lungs.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              {" "}
              <Lottie
                width={250}
                options={{
                  animationData: animation7,
                }}
              />
            </div>
            <div className="card-body">
              <p>
                Practice physical distancing by avoiding unnecessary travel and
                staying away from large groups of people.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              {" "}
              <Lottie
                width={250}
                options={{
                  animationData: animation8,
                }}
              />
            </div>
            <div className="card-body">
              <p>Namaste . No handshakes.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
