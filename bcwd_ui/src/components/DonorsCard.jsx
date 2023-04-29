import Card from 'react-bootstrap/Card';
import Image from '../static/img/donor.png';
import '../static/css/donorscard.css';

// components
import Paragraph from './Paragraph';
import ButtonWAS from './ButtonWAS';

const DonorsCard = () => {
    return (
        <div className='container p-4 py-5'>
            <Card className='donorscard py-4'>
                <Card.Img variant="top" src={Image} className="donor-border-image" />
            </Card>
            <ButtonWAS mylink="#" name="READ MORE..." />
        </div>
    );
}

export default DonorsCard;