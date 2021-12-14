import { Card } from './Card';
import { products } from '../../data/products';

export const ProductList = () => {

    return (
        <div className="row m-3 justify-content-center animate__animated animate__fadeIn">
                {
                    products.map( Product => (
                        <Card 
                            key={ Product.id } 
                            { ...Product }
                        />
                    ))
                }
        </div>
    )
}
