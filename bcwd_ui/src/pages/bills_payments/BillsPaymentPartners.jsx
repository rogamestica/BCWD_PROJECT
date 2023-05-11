import { Container } from "react-bootstrap";
import Banner from "../../components/Banner";
import '../../static/css/billspayment/billpaymentpartners.css';

import Pagination from "../../components/Pagination";
import Breadcrumb from "../../components/Breadcrumb";


const BillsPaymentPartners = () => {
    return  (
      <>
      <Banner title={"Bills Payment Partners"}/>
      <Container>
      <Breadcrumb
          paths={[
            { name: "Home", url: "/" },
            { name: "Bill Payment Partners", url: "/billspaymentpartners" },
            // { name: "About us", url: "/news/about" },
          ]}
        />

      <div className="container">
      <div style={{border: "1px solid blue", padding: "5px", margin: "10px", }} >
          <p>Mobile.</p>
        </div>
       

      </div>
      <p>Reminders before paying your water bill:</p>
      <ul>
        <li>Examine your bill carefully upon receipt. If no complaint is made within 60 days of receipt, the bill is considered true and correct.</li>
        <li>Always bring your Statement of Account when paying.</li>
        <li>Check payments should be payable to Maynilad Water Services, Inc. Do not forget to write your Contract Account Number, Account Name, Service Address, and Contact Number at the back of the check.</li>
        <li>Make sure to pay your bills at any Maynilad-accredited payment channels.</li>
        <li>Before leaving the payment counter of our accredited payment facilities, check the details indicated in the payment stub/machine validation to make sure that the correct payment was posted.</li>
      </ul>

      
      </Container>
      <Pagination />
      </>
      
    );
  };
  
  export default BillsPaymentPartners;
