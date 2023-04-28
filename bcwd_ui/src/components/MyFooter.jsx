import Navbar from 'react-bootstrap/Navbar';
import logo3 from '../static/img/logo3.png';
import '../static/css/footer.css';

//component
import FootHeader from './FootHeader';

const MyFooter = () => {
    return (
        <footer className="text-white text-center text-lg-start" style={{ backgroundColor: '#174569' }}>
            {/* Grid container */}
            <div className="container p-4">
                {/* Grid row */}
                <div className="row mt-4">
                    {/* Grid column */}
                    <div className="col-lg-6 col-md-12 mb-5 mb-md-0">
                        <Navbar.Brand href="/">
                            <img
                                src={logo3}
                                width="150"
                                height="150"
                                className="d-inline-block align-top"
                                alt="BCWD 1974"
                            />
                        </Navbar.Brand>


                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <p className='footer'>
                                        ©2013 Butuan City Water District, Inc.
                                    </p>

                                    <p className='footer'>
                                        Jose Rosales Ave, Butuan City, Agusan Del Norte, 8600. Philippines
                                    </p>
                                    <p className='footer'>
                                        Customer hotline: 1626
                                        Toll-free hotline: 1800-1000-WATER

                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                    {/* Grid column */}

                    {/* Grid column */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-4">

                        <div className='container'>
                            <FootHeader header="QUICK LINKS" />
                            <div className='row py-2'>
                                <div className='col-lg-8'>
                                    <p className='footer'>
                                        Service Advisories
                                    </p>

                                    <p className='footer'>
                                        How to your Water Bill
                                    </p>
                                    <p className='footer'>
                                        Bills Payment Partners
                                    </p>
                                    <p className='footer'>
                                        FAQs
                                    </p>
                                    <p className='footer'>
                                        Contact Us
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-4">
                        <div className='container'>
                            <FootHeader header="About BCWD" />
                            <div className='row py-2'>
                                <div className='col-lg-8'>
                                    <p className='footer'>
                                        Our Company
                                    </p>

                                    <p className='footer'>
                                        Careers
                                    </p>
                                    <p className='footer'>
                                        Advocacy
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="text-center p-3" style={{ backgroundColor: "#5E5B5B" }}>
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-2'>
                            <p className='footer-last'>
                                Terms and Conditions
                            </p>
                        </div>
                        <div className='col-lg-2'>
                            <p className='footer-last'>
                                Privacy Policy
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


    );
}

export default MyFooter;