import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getProductById } from '../../selectors/getProductById';


export const Product = () => {
    const { ProductId } = useParams();
    const navigate = useNavigate()

    const Product = useMemo( () => getProductById(ProductId), [ ProductId ]);
    
    

    const handleReturn = () => {
        navigate( -1 );
    }


    if (!Product) {
        return <Navigate to='/' />
    }
    
    const {
        id,
        ProductName,
        preparacion,
    } = Product;

    const imagePath = `https://s3.us-east-2.amazonaws.com/biitacora.develop.com/starbucks/${ id }.jpg`;

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-10 my-auto text-center">
                <img 
                    src={ imagePath } 
                    alt={ ProductName }
                    className="img-thumbnail animate__animated animate__fadeInRight my-auto"
                />
            </div>

            <div className="col-10 col-md-6 col-lg-8 mt-3 animate__animated animate__fadeInLeft text-center">
                <h3>{ Product.ProductName }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item my-2"> { preparacion } </li>
                </ul>

                <button
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Regresar 
                </button>

            </div>

        </div>
    )
}
