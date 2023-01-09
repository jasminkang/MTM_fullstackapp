import React from "react";
import PageTitle from "../components/PageTitle";
import Services from "../components/Services";

const services = () => {
  return (
    <div>
      <PageTitle
        heading="Services"
        message="Something about trained and eligible for health rebate"
      ></PageTitle>
      <Services />
    </div>
  );
};

export default services;
