import React from "react";

const ServicesSection = () => {
  return (
    <div className="container p-lg-5 p-0">
      <h2 className="text-center text-primary pt-4">Our Services</h2>

      <div className="service-section">

        <div className="card">
        <i className="bi bi-windows"></i>
          <div className="card-body">
            <h5 className="card-title">Architectural Glass Work</h5>
            <a href="/services#services-list" className="btn btn-primary">
              More Details
            </a>
          </div>
        </div>
        <div className="card">
        <i className="bi bi-layers"></i>
          <div className="card-body">
            <h5 className="card-title">Architectural Aluminum Work</h5>
            <a href="/services#services-list" className="btn btn-primary">
              More Details
            </a>
          </div>
        </div>
        <div className="card">
        <i className="bi bi-tools"></i>
          <div className="card-body">
            <h5 className="card-title">Construction</h5>
            <a href="/services#services-list" className="btn btn-primary">
              More Details
            </a>
          </div>
        </div>
        <div className="card">
        <i className="bi bi-house-door"></i>
          <div className="card-body">
            <h5 className="card-title">Interior Design</h5>
            <a href="/services#services-list" className="btn btn-primary">
              More Details
            </a>
          </div>
        </div>
        <div className="card">
          <i className="bi bi-buildings"></i>
          <div className="card-body">
            <h5 className="card-title">Exterior Design</h5>
            <a href="/services#services-list" className="btn btn-primary">
              More Details
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ServicesSection;
