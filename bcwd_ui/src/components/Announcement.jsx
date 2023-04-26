import noimg from '../static/img/no-image.png'
import MyButton from './MyButton';
import Header1 from "../components/Header1";
import '../static/css/header2.css';
import Paragraph from './Paragraph';

const Announcement = () => {
    const descrip = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";
    return (
        <div className="container d-flex justify-content-center">
            <div className="row p-5">
                <div class="col-4">
                    <div className='container p-4'>
                        <Header1 header="LATEST NEWS" />
                        <h3 className="header2 py-3">Lorem Epsum Epsum LoremLorem Epsum Epsum Lorem</h3>
                        <Paragraph descript={descrip} />
                    </div>
                </div>
                <div className="col-4 pt-4">
                    <div className="row pt-5">

                    </div>
                    <div className="row">
                        <img class="myimage" src={noimg} alt="hey" />
                    </div>
                </div>
                <div class="col-4 px-4">
                    <div className="row pt-1">
                        <div className='container p-4'>
                            <Header1 header="ADVISORIES" />
                        </div>
                    </div>
                    <div className="row pt-1">
                        <div className="col-4">
                            <MyButton className="" name="Emergency" />
                        </div>
                        <div className="col-8">
                            <Paragraph descript="Aug-29-Aug-30 Quezon City, Lamesa Pumping Station" />
                        </div>
                    </div>

                    <div className="row pt-1">
                        <div className="col-4">
                            <MyButton className="" name="Scheduled" />
                        </div>
                        <div className="col-8">
                            <Paragraph descript="Feb-28-Mar-01 , Putatan Water Treatment Plant" />
                        </div>
                    </div>

                    <div className="row pt-1">
                        <div className="col-4">
                            <MyButton className="" name="Rotational" />
                        </div>
                        <div className="col-8">
                            <Paragraph descript="Mar-17-Apr-01 Imus, Patindig Pumping Station" />
                        </div>
                    </div>

                    <div className="row pt-1">
                        <div className="col-auto">
                            <MyButton className="" name="Septic Cleaning" />

                        </div>
                        <div className="col-6">

                            <Paragraph descript="Mar-17-Apr-01 Imus, Patindig Pumping Station" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Announcement;