import { Container } from "react-bootstrap";
import Banner from "../../components/Banner";

import Pagination from "../../components/Pagination";
import Breadcrumb from "../../components/Breadcrumb";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../static/css/company/aboutus.css';
import image from '../../static/img/no-image.png';

const AboutUs = () => {
    return (
      <>
      <Banner title={"About US"}/>
      <Container>
      <Breadcrumb
          paths={[
            { name: "Company", url: "#" },
            { name: "About Us", url: "/aboutus" },
            // { name: "About us", url: "/news/about" },
          ]}
        />
        <h3> CORE STRATEGY</h3>
        <p>Efficient and effective management of all resources for sustainable water supply in Butuan City.</p>

          
        <Row>
          <Col> 
          <div className="container mytext" style={{background:"#318CE7" }}>
            {/* Card content goes here */}
            <h2>Vision</h2>
            <p>A leader in the water and sanitation industry advancing integrated water resource management.</p>
          </div>
           </Col>
           <Col> 
           <div className="container mytext" style={{background:"#318CE7" }}>
            {/* Card content goes here */}
            <h2>Mission</h2>
            <p>Butuan City Water District a service oriented entity endeavors to preserve the environment, deliver quality service and satisfy its customers.</p>
          </div>
           </Col>
           <Col> 
           <div className="container mytext" style={{background:"#318CE7" }}>
            {/* Card content goes here */}
            <h2>CORE Values</h2>
            <p>C - Commitment</p>
            <p>L - Leadership</p>
            <p>I - Integrity</p>
            <p>E - Excellence</p>
            <p>N - Novelty (Innovation)</p>
            <p>S - Safety</p>
          </div>
           </Col>
        </Row>

        <div className="container background">
        <Row>
          <Col> 
          <div className="">
            {/* Card content goes here */}
            <img src={image} alt="hey" style={{ maxWidth: "100%", maxHeight: "100%" }} />
          </div>
           </Col>
           <Col> 
           <div className="container mytext2" >
            {/* Card content goes here */}
            <h2>Butuan Water District Purpose</h2>
            <p>I. Acquiring, installing, improving, maintaining and operating water supply and distribution system for domestic, industrial, municipal and agricultural uses for residents and lands withind the boundaries of such districts;</p>
            <p>II. Providing, maintaining, and operating waste water collection, treatment and disposal facilities; and</p>
            <p>III. Conducting such other functions and operations incidental to water resource development, utilization and disposal within such districts, as are necessary or incidental to said purpose.</p>
          </div>
           </Col>
           
        </Row>
        </div>
          <div className="head">
          <h1>GOALS</h1>
          </div>
          
        <Row>
          <Col> 
          <div className="container mytext3" >
            {/* Card content goes here */}
            <p>1. Protection, rehabilitation and conservation of Taguibo Watershed Forest Reserve.</p>
          </div>
           </Col>
           <Col> 
           <div className="container mytext3" >
            {/* Card content goes here */}
            <p>4. Reduce Non-Revenue Water to 20%.</p>
          </div>
           </Col>
        </Row>
        <Row>
          <Col> 
          <div className="container mytext3" >
            {/* Card content goes here */}
            <p>2. Sustain quality of water in accordance with PNSDW.</p>
          </div>
           </Col>
           <Col> 
           <div className="container mytext3" >
            {/* Card content goes here */}
            <p>5. Provide fast and efficient water related services for every concessionaires.</p>
          </div>
           </Col>
        </Row>
        <Row>
          <Col> 
          <div className="container mytext3" >
            {/* Card content goes here */}
            <p>3. Increase availablity of water supply to all concessionaires for 24/7.</p>
          </div>
           </Col>
           <Col> 
           <div className="container mytext3" >
            {/* Card content goes here */}
            <p>6. Continuous capacity building and enhance working environment of employees.</p>
          </div>
           </Col>
        </Row>
        <Row>
          <Col> 
          <div className="container mytext3" >
            {/* Card content goes here */}
            <p>7. Establishment of mechanism for Septage Management Program.</p>
          </div>
           </Col>
        </Row>

      </Container>
      <Pagination />
      </>
    );
  };
  
  export default AboutUs;