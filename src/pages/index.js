import React, { useEffect } from "react";
import Helmet from "react-helmet";

import { Link } from "gatsby";
import Layout from "../components/layout";
import CaseCount from "../components/CaseCount";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import Helpline from "../components/Helpline";

import Lottie from "lottie-react-web";
import animation1 from "../Lottie/18795-coronavirus.json";
import animation2 from "../Lottie/14916-prueba-doctores-freepik.json";
import animation3 from "../Lottie/17686-wash-your-hands-regularly.json";
import animation4 from "../Lottie/20546-i-stay-at-home.json";
import animation5 from "../Lottie/17898-sneezing.json";

const IndexPage = () => {
  useEffect(() => {
    const notify = () => toast("🦄👻 Gentle Reminder : Wash your hands.");
    notify();
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Stop Covid19 | Everything you need to know about Covid19</title>
        <meta
          name="description"
          content="Everything you need to know about coronavirus and Covid19 disease and how to stay safe from Covid19"
        />
      </Helmet>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <CaseCount />
      <div className="container">
        <div className="section-safe">
          <div className="p-text">
            <h1 style={{ color: "#6f00ff", margin: 0 }}>
              Stay home, Stay safe.
            </h1>
            <p style={{ opacity: 0.7, margin: 0 }}>
              Coronavirus disease (COVID-19) is an infectious disease caused by
              a newly discovered coronavirus.
            </p>
            <p>
              We have gathered everything you need to know about Covid-19.Follow
              the guidelines and stay safe.
            </p>
          </div>
          <div className="lottie-safe">
            <Lottie
              width={380}
              options={{
                animationData: animation1,
              }}
            />
          </div>
        </div>
        <div className="section-respect">
          <h3>
            <span>Respect and cooperate</span>
          </h3>
          <div className="respect-grid">
            <div className="text-p">
              <ul>
                <li>Care for elders and respect Covid -19 warriors.</li>
                <li>Do not discriminate with covid-19 patients.</li>
                <li>Stay safe and keep others safe.</li>
              </ul>
            </div>
            <div className="lottie">
              <Lottie
                width={350}
                options={{
                  animationData: animation2,
                }}
              />
            </div>
          </div>
        </div>
        <div className="section-safety">
          <h3>
            <span>Safety and Precaution</span>
          </h3>
          <div className="safety-grid">
            <div className="text-p">
              <p>
                Don’t fear! Check out the safety tips and precaution measures to
                keep the virus at bay. Remember You all have a responsibility to
                knock out Covid-19 disease.
              </p>
              <Link to="/safety">
                Safety measures{" "}
                <FontAwesomeIcon icon={faChevronRight} fixedWidth />
              </Link>
            </div>
            <div className="lottie">
              <Lottie
                width={320}
                options={{
                  animationData: animation3,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section-blog">
        <div className="container">
          <div className="text-p">
            <p>
              <span>Check</span> out our blog to see what people around the
              globe think of Covid-19.
            </p>
            <Link to="/blog">
              Blog <FontAwesomeIcon icon={faChevronRight} fixedWidth />
            </Link>
          </div>
          <div className="lottie">
            <Lottie
              width={320}
              options={{
                animationData: animation4,
              }}
            />
          </div>
        </div>
      </div>{" "}
      <div className="container">
        <div className="section-symptom">
          <h3>
            <span>Watch out the Symptoms</span>
          </h3>
          <div className="symptom-grid">
            <div className="text-p">
              <p>
                Check out the list of symptoms recognized by WHO to seek out
                medical attention when required. <br></br>
                <span style={{ fontWeight: "600" }}>
                  Don’t be late. Treat Immediately
                </span>
              </p>
              <Link to="/symptoms">
                Symptoms <FontAwesomeIcon icon={faChevronRight} fixedWidth />
              </Link>
            </div>
            <div className="lottie">
              <Lottie
                width={320}
                options={{
                  animationData: animation5,
                }}
              />
            </div>
          </div>
        </div>
        <Helpline />
      </div>
    </Layout>
  );
};

export default IndexPage;
