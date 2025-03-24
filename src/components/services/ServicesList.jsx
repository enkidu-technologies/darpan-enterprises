import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const ServicesList = () => {
  return (
    <div>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
            <h2>Architectural Glass Work</h2>
        </Accordion.Header>
        <Accordion.Body>
            <i className='bi bi-windows display-1'></i>
            <p className='fw-bold'>Enhance the aesthetics and functionality of your spaces with our premium architectural glass solutions. We offer:</p>
            <ul>
                <li>Glass facades, partitions, and windows</li>
                <li>Toughened & laminated glass installations</li>
                <li>Custom glass solutions for commercial and residential spaces</li>
            </ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <h2>Architectural Aluminum Work</h2>
        </Accordion.Header>
        <Accordion.Body>
        <i className='bi bi-layers display-1'></i>
          <p className='fw-bold'>Our architectural aluminum solutions combine durability and style for modern structures. We provide:</p>
          <ul>
            <li>Aluminum doors, windows, and curtain walls</li>
            <li>Structural glazing and cladding solutions</li>
            <li>Custom aluminum fabrications</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>
        <h2>Construction</h2>
        </Accordion.Header>
        <Accordion.Body>
        <i className='bi bi-tools display-1'></i>
          <p className='fw-bold'>From concept to completion, our construction services ensure high-quality and efficient execution. We specialize in:</p>
          <ul>
            <li>Residential, commercial, and industrial construction</li>
            <li>Renovation and remodeling projects</li>
            <li>Project management and turnkey solutions</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <h2>Interior Design</h2>
        </Accordion.Header>
        <Accordion.Body>
        <i className='bi bi-house-door display-1'></i>
          <p className='fw-bold'>Transform interiors with our innovative interior design solutions that balance aesthetics and functionality. Our services include:</p>
          <ul>
            <li>Space planning and 3D visualization</li>
            <li>Custom furniture and decor solutions</li>
            <li>Lighting, flooring, and ceiling designs</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>
          <h2>Exterior Design</h2>
        </Accordion.Header>
        <Accordion.Body>
        <i className='bi bi-building display-1'></i>
          <p className='fw-bold'>Give your property a distinctive appeal with our exterior design expertise. We offer:</p>
          <ul>
            <li>Facade design and elevation enhancements</li>
            <li>Landscaping and outdoor decor</li>
            <li>Customized outdoor architectural elements</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
    </div>
  )
}

export default ServicesList