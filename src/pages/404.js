import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import Lottie from "lottie-react-web";
import animation from "../3146-404page.json";
import { Link } from "gatsby";

const notFound = () => {
  return (
    <Layout>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <div style={{ textAlign: "center", padding: "1vh 0", lineHeight: "1.5" }}>
        <Lottie
          height={350}
          width={700}
          options={{
            animationData: animation,
          }}
        />
        <p>
          Either you are in a wrong page or you have lost. <br></br>Put on a
          mask. Lets go back <Link to="/">home</Link> safely
        </p>
      </div>
    </Layout>
  );
};

export default notFound;
