import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Banner from "../../components/Banner";


import Pagination from "../../components/Pagination";
import Breadcrumb from "../../components/Breadcrumb";

import '../../static/css/billspayment/billcalculator.css';

const WaterBillCalculator = () => {
  const [consumption, setConsumption] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [cubicMeter, setCubicMeter] = useState(true);

  const handleChange = (event) => {
    setConsumption(parseFloat(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let total = 0;
    if (cubicMeter) {
      total = consumption * 35;
    } else {
      if (consumption <= 1000) {
        total = 100;
      } else if (consumption <= 2000) {
        total = (consumption - 1000) * 0.2 + 100;
      } else if (consumption <= 3000) {
        total = (consumption - 2000) * 0.25 + 300;
      } else if (consumption <= 5000) {
        total = (consumption - 3000) * 0.3 + 550;
      } else {
        total = (consumption - 5000) * 0.35 + 1300;
      }
    }
    setTotalAmount(total);
  };

  const handleUnitChange = (event) => {
    setCubicMeter(event.target.value === "cubic_meter");
  };

  return (
    <>
      <Banner title={"Water Bill Calculator"} />

      <Container className="mt-4">
      <Breadcrumb
          paths={[
            { name: "Home", url: "/" },
            { name: "Bill Calculator", url: "/billcalculator" },
            // { name: "About us", url: "/news/about" },
          ]}
        />
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUnit">
            <Form.Label>Unit of measurement</Form.Label>
            <Form.Check type="radio" label="Cubic Meter" value="cubic_meter" onChange={handleUnitChange} checked={cubicMeter} />
          </Form.Group>
          <Form.Group controlId="formConsumption">
            <Form.Label>Consumption</Form.Label>
            <Form.Control type="number" placeholder="Enter your consumption" step={cubicMeter ? 1 : 10} value={consumption} onChange={handleChange} />
            {cubicMeter ? <Form.Text className="text-muted">* 1 cubic meter = 35 gallons</Form.Text> : <Form.Text className="text-muted">* Consumption is in gallons</Form.Text>}
          </Form.Group>
          <Button variant="primary" type="submit">
            Calculate
          </Button>
        </Form>
        {totalAmount > 0 && (
          <Alert variant="success" className="mt-4">
            Your total bill is Php {totalAmount.toFixed(2)}
          </Alert>
        )}
      </Container>
      <Pagination />
    </>
  );
};

export default WaterBillCalculator;
