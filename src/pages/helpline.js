import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/layout";
import Helpline from "../components/Helpline";

export default function Blog() {
  return (
    <Layout>
      <Helmet>
        <title>Helpline | Stop Covid19</title>
        <meta
          name="description"
          content="Know how to ask for help in an emergency during this pandemic. Dial the helpline number. Stay safe."
        />
      </Helmet>
      <div className="container">
        <Helpline />
      </div>
    </Layout>
  );
}
