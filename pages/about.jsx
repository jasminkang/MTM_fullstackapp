
import React from "react";
import PageTitle from "../components/PageTitle";
import About from "../components/About";

const about = () => {
  return (
    <div>
      <PageTitle
        heading="About"
        message="this is what I'm all about and why you should come to me"
      ></PageTitle>
      <About />
    </div>
  );
};

export default about;