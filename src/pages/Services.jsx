import React, { useEffect } from "react";
import PageTitle from "../components/services/PageTitle";
import OurService from "../components/services/OurServices";
import ServicesList from "../components/services/ServicesList";
import { useLocation } from "react-router-dom";

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <>
      <PageTitle />
      <div className="m-lg-5 m-2">
        <OurService />
        <div className="m-5" id="services-list"></div>
        <ServicesList />
      </div>
    </>
  );
};

export default Services;
