import React, { useEffect } from "react";
import Layout from "../components/layout";
import CaseCount from "../components/CaseCount";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IndexPage = () => {
  useEffect(() => {
    const notify = () => toast("🦄 Gentle Reminder : Wash your hands.");
    notify();
  }, []);

  return (
    <Layout>
      <CaseCount />
      <div className="container">Index Page</div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Layout>
  );
};

export default IndexPage;
