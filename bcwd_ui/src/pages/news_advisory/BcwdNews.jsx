import Banner from "../../components/Banner";
import Cards from "../../components/Cards";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BcwdNews = () => {
  return (
      <>
      <Banner title={"BCWD News"}/>
      <Container className="d-flex justify-content-center">
      <p>Home</p>
          <Row lg={3} sm={2} xs={1} className="p-5">
            <Col>
              <Cards/>
            </Col>
            <Col>
              <Cards/>
            </Col>
            <Col>
              <Cards/>
            </Col>
            <Col>
              <Cards/>
            </Col>
            <Col>
              <Cards/>
            </Col>
            <Col>
              <Cards/>
            </Col>
            <Col>
              <Cards/>
            </Col>
            <Col>
              <Cards/>
            </Col>
            <Col>
              <Cards/>
            </Col>
          </Row>

      </Container>
      </>
    );
  };
  
  export default BcwdNews;