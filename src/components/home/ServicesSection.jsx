import React from "react";

const ServicesSection = () => {
  return (
    <div className="container px-4 py-5">
      <h2 className="text-center text-primary">Our Services</h2>

      <div className="service-section">

        <div className="card">
        <i className="bi bi-windows"></i>
          <div className="card-body">
            <h5 className="card-title">Architectural Glass Work</h5>
            <a href="#" className="btn btn-primary">
              View
            </a>
          </div>
        </div>
        <div className="card">
        <i className="bi bi-layers"></i>
          <div className="card-body">
            <h5 className="card-title">Architectural Aluminum Work</h5>
            <a href="#" className="btn btn-primary">
              View
            </a>
          </div>
        </div>
        <div className="card">
        <i className="bi bi-tools"></i>
          <div className="card-body">
            <h5 className="card-title">Construction</h5>
            <a href="#" className="btn btn-primary">
              View
            </a>
          </div>
        </div>
        <div className="card">
        <i className="bi bi-house-door"></i>
          <div className="card-body">
            <h5 className="card-title">Interior Design</h5>
            <a href="#" className="btn btn-primary">
              View
            </a>
          </div>
        </div>
        <div className="card">
          <i className="bi bi-buildings"></i>
          <div className="card-body">
            <h5 className="card-title">Exterior Design</h5>
            <a href="#" className="btn btn-primary">
              View
            </a>
          </div>
        </div>
        
        
        
        
      </div>
    </div>
  );
};

export default ServicesSection;
