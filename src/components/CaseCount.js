import React, { useEffect, useState } from "react";
import axios from "axios";
import Lottie from "lottie-react-web";
import animation from "../Lottie/9764-loader.json";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";
import NumberFormat from "react-number-format";
import { useMediaQuery } from "react-responsive";

export default function Casecount() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [refresh, setRefresh] = useState();

  useEffect(() => {
    async function fetchCases() {
      const covid = await axios({
        url: "https://covidstat.info/graphql",
        method: "post",
        data: {
          query: `
               query {
                  state(countryName: "India", stateName: "Total") {
                      cases
                      active
                      recovered
                      deaths
                  }
              }
               `,
        },
      });
      setRefresh(covid.data.data.state);
    }
    fetchCases();
  }, [refresh]);

  return (
    <div className="container">
      <div className="caseCount">
        <div className="case-card confirmed">
          <h4>Confirmed</h4>
          <div className="data">
            {refresh ? (
              <NumberFormat
                value={refresh.cases}
                displayType={"text"}
                thousandSeparator={true}
                thousandsGroupStyle={"lakh"}
              />
            ) : (
              <Lottie
                options={{
                  height: 100,
                  width: 100,
                  animationData: animation,
                }}
              />
            )}
          </div>
        </div>
        <div className="case-card active">
          <h4>Active</h4>
          <div className="data">
            {refresh ? (
              <NumberFormat
                value={refresh.active}
                displayType={"text"}
                thousandSeparator={true}
                thousandsGroupStyle={"lakh"}
              />
            ) : (
              <Lottie
                options={{
                  animationData: animation,
                }}
              />
            )}
          </div>
        </div>
        <div className="case-card recovered">
          <h4>Recovered</h4>
          <div className="data">
            {refresh ? (
              <NumberFormat
                value={refresh.recovered}
                displayType={"text"}
                thousandSeparator={true}
                thousandsGroupStyle={"lakh"}
              />
            ) : (
              <Lottie
                options={{
                  animationData: animation,
                }}
              />
            )}
          </div>
        </div>
        <div className="case-card deaths">
          <h4>Deaths</h4>
          <div className="data">
            {refresh ? (
              <NumberFormat
                value={refresh.deaths}
                displayType={"text"}
                thousandSeparator={true}
                thousandsGroupStyle={"lakh"}
              />
            ) : (
              <Lottie
                options={{
                  animationData: animation,
                }}
              />
            )}
          </div>
        </div>
      </div>
      <div className="update-data">
        {refresh && (
          <h6>
            Last Updated:{" "}
            <Moment format="MMMM Do YYYY, h:mm a">{refresh.update}</Moment>
          </h6>
        )}
        <button
          data-tip="Refresh"
          data-place="bottom"
          data-effect="solid"
          onClick={() => setRefresh(null)}
        >
          {!isTabletOrMobile && <ReactTooltip />}

          <FontAwesomeIcon icon={faRedo} fixedWidth />
        </button>
      </div>
    </div>
  );
}
