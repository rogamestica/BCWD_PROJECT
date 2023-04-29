import Banner from "../../components/Banner";
import { Container, Row, Col } from "react-bootstrap";
import Breadcrumb from "../../components/Breadcrumb";
import Paragraph from '../../components/Paragraph';
import Table from 'react-bootstrap/Table';
import Header3 from "../../components/Header3";
import LabTable from "../../components/LabTable";
import '../../static/css/header2.css';
import lab_doh from '../../static/img/lab_doh.jpg';


const WaterQualityResult = () => {
  const indiv_param = [
    {
      "data1": "Temperature",
      "data2": 100.00
    },
    {
      "data1": "Odor",
      "data2": 100.00
    },
    {
      "data1": "Total Dissolved Solids",
      "data2": 250.00
    },
    {
      "data1": "Specific Conductance",
      "data2": 250.00
    },
    {
      "data1": "Turbidity",
      "data2": 250.00
    },
    {
      "data1": "Color",
      "data2": 250.00
    },
    {
      "data1": "Salinity",
      "data2": 250.00
    },
    {
      "data1": "Total Suspended Solids",
      "data2": 250.00
    },
    {
      "data1": "pH",
      "data2": 250.00
    },
    {
      "data1": "Iron",
      "data2": 350.00
    },
    {
      "data1": "Manganese",
      "data2": 400.00
    },
    {
      "data1": "Chloride",
      "data2": 400.00
    },
    {
      "data1": "Sulfate",
      "data2": 400.00
    },
    {
      "data1": "Total Hardness",
      "data2": 400.00
    },
    {
      "data1": "Magnesium Hardness",
      "data2": 200.00
    },
    {
      "data1": "Calcium Hardness",
      "data2": 300.00
    },
    {
      "data1": "Nitrate",
      "data2": 500.00
    },
    {
      "data1": "Fluoride",
      "data2": 400.00
    },
    {
      "data1": "Chlorine Residual",
      "data2": 300.00
    },
    {
      "data1": "Copper",
      "data2": 400.00
    }
  ];

  const other_test = [{ "data1": "Appearance", "data2": "Sensory" }, { "data1": "Odor/Taste", "data2": "Sensory" }, { "data1": "Temperature", "data2": "Electrode" }, { "data1": "Specific Conductance", "data2": "Electrode" }, { "data1": "Salinity", "data2": "Electrode" }, { "data1": "pH", "data2": "Electrometric" }, { "data1": "Total Dissolved Solids", "data2": "Electrode" }, { "data1": "Turbidity", "data2": "Turbidimetric" }, { "data1": "color", "data2": "PtCo Colorimetric" }, { "data1": "Sulfate", "data2": "Turbidimetric" }, { "data1": "Chloride", "data2": "Argentometric Titration" }, { "data1": "Nitrate", "data2": "Cadmium Reduction" }, { "data1": "Arsenic", "data2": "AAS" }, { "data1": "Cadmium", "data2": "AAS" }, { "data1": "Lead", "data2": "AAS" }, { "data1": "Iron", "data2": "AAS/Colorimetric" }, { "data1": "Manganese", "data2": "AAS/Colorimetric" }, { "data1": "Copper", "data2": "AAS/Colorimetric" }, { "data1": "Chromium", "data2": "AAS" }, { "data1": "Potassium", "data2": "AAS" }, { "data1": "Calcium", "data2": "AAS" }, { "data1": "Sodium", "data2": "AAS" }, { "data1": "Total Hardness", "data2": "EDTA Titration" }, { "data1": "Calcium Hardness", "data2": "EDTA Titration" }, { "data1": "Magnesium Hardness", "data2": "EDTA Titration" }, { "data1": "Fluoride", "data2": "SPADNS" }, { "data1": "Chlorine Residual", "data2": "DPD Colorimetric" }]
  return (
    <>
      <Banner title={"Water Quality Result"} />
      <Breadcrumb paths={[
        { name: "Home", url: "/" },
        { name: "Water Quality Result", url: "/waterqualityresult" },
      ]} />

      <Container className="px-4 pb-5">
        <Row className="mx-4">
          <Col xs={12} className="mt-3">
            <h3 className="header2">Rates Effectivity: Feb. 8, 2021</h3>
            <Paragraph descript="BCWD Water passed the quality standards set by Philippine National Standards for Drinking Water (PNSDW). Results of regular bacteriological, physical and chemical analyses assure consumers that the water being distributed by Butuan City Water District (BCWD) is clean, safe and potable." />
          </Col>


          <Col xs={12} className="mt-3">
            <Paragraph descript="BCWD had long set-up its own state-of-the-art laboratory facilities and equipment manned by licensed chemist and laboratory technician. This water testing laboratory is a duly Department of Health (DOH) accredited laboratory for physical, chemical and biological analyses." />
          </Col>

          <Row className="my-5">
            <Col xs={6} xl={12} className="mt-3 d-flex justify-content-center">
              <img src={lab_doh} />
            </Col>
          </Row>

          <Col xs={12} className="mt-3">
            <Header3 header="Laboratory Charges" />

            <Row>
              <Col xs={6} xl={12} className="my-3">
                <h3 className="header2">Bacteriological Analysis Charges</h3>
                <Table striped bordered>
                  <thead>
                    <tr>
                      <th>Parameter</th>
                      <th>Cost Per Sample</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>MTFT (total & fecal)</td>
                      <td>700.00</td>
                    </tr>
                    <tr>
                      <td>Enzyme Substrate (total & fecal)</td>
                      <td>900.00</td>
                    </tr>
                    <tr>
                      <td>HPC</td>
                      <td>300.00</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>

            <Row>

              <Col xs={6} xl={12} className="mt-3">
                <h3 className="header2">Physical and Chemical Analysis</h3>
                <Table striped bordered>
                  <thead>
                    <tr>
                      <th colSpan={2}>Parameter</th>
                      <th>Cost Per Sample</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={2}>A. Mandatory Parameters<br />
                        Arsenic, Cadmium, Lead, Nitrate, color, Turbidity, pH & Total dissolved solids
                      </td>
                      <td>
                        <Table bordered >

                          <tbody>
                            <tr>
                              <td>Water Districts</td>
                              <td>3000.00</td>
                            </tr>
                            <tr>
                              <td>Refilling Stations/Non-Water Districts</td>
                              <td>4,500.00</td>
                            </tr>
                            <tr>
                              <td>Mining Firms</td>
                              <td>4,500.00</td>
                            </tr>

                          </tbody>
                        </Table>
                      </td>
                    </tr>

                    <tr>
                      <td colSpan={2}>B. Primary & Secondary Parameters<br />
                        Temperature, Color, Odor, TDS, Sp. Conductance, Salinity, Total Suspended Solids, Turbidity, pH, Iron, Chloride, Sulfate, Total hardness, Calcium hardness, Flouride & Nitrate
                      </td>
                      <td>
                        <Table bordered >

                          <tbody>
                            <tr>
                              <td>Water Districts</td>
                              <td>3000.00</td>
                            </tr>
                            <tr>
                              <td>Refilling Stations/Non-Water Districts</td>
                              <td>4,500.00</td>
                            </tr>
                            <tr>
                              <td>Mining Firms</td>
                              <td>4,500.00</td>
                            </tr>

                          </tbody>
                        </Table>
                      </td>
                    </tr>

                  </tbody>
                </Table>
              </Col>
            </Row>

            <Row>
              <Col xs={6} xl={12} className="mt-3">
                <h3 className="header2">Individual Parameter</h3>
                <LabTable datas={indiv_param} column1="Parameter" column2="Cost Per Sample" />
              </Col>
            </Row>
            <Row className="pb-5 mb-5">
              <Col xs={6} xl={12} className="mt-3">
                <h3 className="header2">Pnsdw 2017 Required Tests
                  And Other Test Parameters</h3>
                <LabTable datas={other_test} column1="Test" column2="Method" />
              </Col>
            </Row>

          </Col>


        </Row>
      </Container>

    </>
  );
};

export default WaterQualityResult;
