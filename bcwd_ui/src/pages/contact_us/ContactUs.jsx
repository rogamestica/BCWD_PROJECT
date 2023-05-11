import Banner from "../../components/Banner";
import '../../static/css/contactus/contactus.css';
import { Container } from "react-bootstrap";
import Pagination from "../../components/Pagination";
import Breadcrumb from "../../components/Breadcrumb";
import Header1 from "../../components/Header1";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContactUs = () => {
    return (
      <>
      <Banner title={"Contact US"}/>
      <Container>
      <Breadcrumb
          paths={[
            { name: "Company", url: "#" },
            { name: "ContactUs", url: "/contactus" },
          ]}
        />
        <span className="header" >

          <div className='col-6'>
              <Header1 header="WE LOVE TO HELP!" />
          </div>
        </span>
         <Row>
          <Col> 
                <Row>
                <Col> 
                <div className="container mytext" >
                  {/* Card content goes here */}
                  <p>Make an Inquiry</p>
                </div>
                </Col>
                <Col> 
                <div className="container mytext" >
                  {/* Card content goes here */}
                  <p>Apply fro Services</p>
                </div>
                </Col>
                </Row>
                <Row>
                <Col> 
                <div className="container mytext" >
                  {/* Card content goes here */}
                  <p>Send a Compliant</p>
                </div>
                </Col>
                <Col> 
                <div className="container mytext" >
                  {/* Card content goes here */}
                  <p>Other Concerns</p>
                </div>
                </Col>
                </Row>
           </Col>
           <Col> 
           <div className="container mytext2" >
            {/* Card content goes here */}
            <p>Frequently Ask Question (FAQs)</p>
            <p>Custumer Hotline: 342-3145, 341-6375</p>
            <p>bcwd_pr@yahoo.com</p>
            <p>0918 930 4234</p>
            <p>Facebook.com</p>
            <p>Twitter.com</p>
          </div>
           </Col>
        </Row>

      </Container>
      <Pagination />
      </>
    );
  };
  
  export default ContactUs;