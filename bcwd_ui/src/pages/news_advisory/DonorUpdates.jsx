import Banner from "../../components/Banner";
import DonorsCard from "../../components/DonorsCard";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Pagination from "../../components/Pagination";
import Breadcrumb from "../../components/Breadcrumb";

const DonorUpdates = () => {
  return (
    <>
      <Banner title={"Donor Updates"} />
      <Container>
        <Breadcrumb
          paths={[
            { name: "Home", url: "/" },
            { name: "Donor Updates", url: "/donorupdates" },
            // { name: "About us", url: "/news/about" },
          ]}
        />




        <Row lg={3} sm={2} xs={1} className="justify-content-center px-4">
          <Col>
            <DonorsCard />
          </Col>
          <Col>
            <DonorsCard />
          </Col>
          <Col>
            <DonorsCard />
          </Col>
          <Col>
            <DonorsCard />
          </Col>
          <Col>
            <DonorsCard />
          </Col>
          <Col>
            <DonorsCard />
          </Col>


        </Row>

      </Container>

      <Pagination />
    </>
  );
};

export default DonorUpdates;

