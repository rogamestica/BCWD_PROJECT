
const Banner = (props) => {
    
    const title = props.title;

    return (
        <section className="banner">
        
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <div className='text-white'>
                    <h1 className='mb-3'>{title}</h1>
                    </div>
                
            </div>
        </section>
    );

}

export default Banner;