import '../static/css/connectwithus.css';
import connection from '../static/svg/connection.svg';

import Header1 from './Header1';

// LOGO SVG
import facebook from '../static/svg/facebook.svg';
import twitter from '../static/svg/twitter.svg';
import youtube from '../static/svg/youtube.svg';
import linkedin from '../static/svg/linkedin.svg';

const ConnectWithUs = () => {
    return (
        <div className="bg-light py-2">

            <span className="details_AU" >

                <div className='col-6'>
                    <Header1 header="CONNECT WITH US" />
                </div>
                <img className='m-2' src={facebook} alt="fb" />
                <img className='m-2' src={twitter} alt="tweet" />
                <img className='m-2' src={youtube} alt="yt" />
                <img className='m-2' src={linkedin} alt="li" />

            </span>

            <div className="container  d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-6 col-lg-12">
                        <img className="connection" src={connection} alt='hey' />
                    </div>
                </div>


            </div>
        </div>

    );
}

export default ConnectWithUs;

/**
 * <div className="container d-flex justify-content-center m-5">
            <img src={connection} />
            <div className='col-12 pt-3'>

                <div className='col-6'>
                    <Header1 header="CONNECT WITH US" />
                </div>
                <img className='m-2' src={facebook} alt="fb" />
                <img className='m-2' src={twitter} alt="tweet" />
                <img className='m-2' src={youtube} alt="yt" />
                <img className='m-2' src={linkedin} alt="li" />
            </div>
        </div>
 */