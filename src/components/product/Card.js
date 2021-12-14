import { Link } from 'react-router-dom'


export const Card = ({
    id,
    ProductName,
    desc,
    preparacion,
}) => {

    const imagePath = `/assets/${id}.jpg`;

    return (
        <div className="col-12 col-sm-10 col-md-4 col-lg-3 my-3 animate__animated animate__fadeIn">
            <div className="card shadow card-height-custom">
                
                <div className="row my-3">
                    <div className="col-12  text-center my-auto">
                        <img src={ imagePath } className="img-fluid my-auto rounded" alt={ProductName} />
                    </div>
                    <div className="col-12">

                        <div className="card-body">

                            <h5 className="card-title fw-bolder color">{ProductName}</h5>
                            <p className="card-text fw-bold">{desc}</p>
                            <Link className='btn btn-success btn-block' to={`/Product/${id}`}>
                                Ver
                            </Link>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
