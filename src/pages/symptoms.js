import React from "react";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import { Link } from "gatsby";

import Lottie from "lottie-react-web";
import animation1 from "../Lottie/16942-a-kid-with-fever-un-chico-con-fiebre.json";

export default function Blog() {
  return (
    <Layout>
      <Helmet>
        <title>Symptoms | Stop Covid19 Symptoms related to Covid19</title>
        <meta
          name="description"
          content="List of Symptoms which develops in Covid19 and Coronavirus disease."
        />
      </Helmet>
      <div className="container">
        <div className="symptom-page">
          <h4>
            COVID-19 affects different people in different ways. Most infected
            people will develop mild to moderate illness and recover without
            hospitalization.
          </h4>
          <div className="symptom-list">
            <div className="list-text">
              <ul className="most">
                <h3>Most common symptoms:</h3>
                <li>Fever</li>
                <li>Dry Cough</li>
                <li>Tiredness</li>
              </ul>
              <ul className="less">
                <h3>Less common symptoms:</h3>
                <li>Aches and pains.</li>
                <li>Sore throat.</li>
                <li>Diarrhoea.</li>
                <li>Conjunctivitis.</li>
                <li>Headache.</li>
                <li>Loss of taste or smell.</li>
                <li>A rash on skin, or discolouration of fingers and toes.</li>
              </ul>
              <ul className="serious">
                <h3>Serious symptoms:</h3>
                <li>Difficulty breathing or shortness of breath.</li>
                <li>Chest pain or pressure.</li>
                <li>Loss of speech or movement.</li>
              </ul>
            </div>
            <div className="symptom-img">
              <Lottie
                width={300}
                options={{
                  animationData: animation1,
                }}
              />
            </div>
          </div>
          <div className="symptom-p">
            <p>
              Seek immediate medical attention if you have serious symptoms.
              Always call before visiting your doctor or health facility.{" "}
              <br></br>
              <Link to="/helpline">Go to Helpline</Link>
            </p>

            <p>
              People with mild symptoms who are otherwise healthy should manage
              their symptoms at home.{" "}
            </p>

            <p>
              On average it takes 5–6 days from when someone is infected with
              the virus for symptoms to show, however it can take up to 14 days.{" "}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
