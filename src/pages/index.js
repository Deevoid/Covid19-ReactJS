import React, { useEffect } from "react";
import Layout from "../components/layout";
import CaseCount from "../components/CaseCount";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Lottie from "lottie-react-web";
import animation1 from "../Lottie/18795-coronavirus.json";
import animation2 from "../Lottie/14916-prueba-doctores-freepik.json";
import animation3 from "../Lottie/18795-coronavirus.json";
import animation4 from "../Lottie/18795-coronavirus.json";
import animation5 from "../Lottie/18795-coronavirus.json";
import animation6 from "../Lottie/18795-coronavirus.json";
import animation7 from "../Lottie/18795-coronavirus.json";

const IndexPage = () => {
  useEffect(() => {
    const notify = () => toast("🦄👻 Gentle Reminder : Wash your hands.");
    notify();
  }, []);

  return (
    <Layout>
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
            <p style={{ opacity: 0.7 }}>
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
                <li>Together we can fight the disease and live free.</li>
              </ul>
            </div>
            <div className="lottie">
              <Lottie
                width={380}
                options={{
                  animationData: animation2,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
