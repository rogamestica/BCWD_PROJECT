import React from "react";
import CarouselBanner from "../components/CarouselBanner";
import Announcement from "../components/Announcement";
import Header3 from "../components/Header3";
import CardWAS from "../components/CardWAS";

const Home = () => {




  return (
    <div>
      <CarouselBanner />
      <Announcement />
      <Header3 header="Water Accounts and Services" />
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-4 p-5">
            <CardWAS title="BILL CALCULATOR" descript="Estimate your monthly water consumption" mylink="https://example.com" />
          </div>
          <div className="col-4 p-5">
            <CardWAS title="WATER BILL INFORMATION" descript="Learn more about your billing statement" mylink="https://example.com" />
          </div>
          <div className="col-4 p-5">
            <CardWAS title="APPLY FOR NEW CONNECTION" descript="Learn more about your billing statement" mylink="https://example.com" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

