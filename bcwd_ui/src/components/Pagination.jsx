import '../static/css/bcwd_news/pagination.css';

const Pagination = () => {
    return (
        <div className="container p-5 d-flex justify-content-end">
            <div className="row">
                <div className="col-md-12">
                    <div className="p-3">
                        <p className="paginate-style"> 1  2  3  ..... 12 next </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pagination;