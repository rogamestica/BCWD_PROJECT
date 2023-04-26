import '../static/css/descrip.css';

const Paragraph = (props) => {
    const description = props.descript;
    return (

        <p className="descript">{description}</p>

    );
}

export default Paragraph;