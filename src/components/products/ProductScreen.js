import { ProductList } from '../product/productList'


export const ProductScreen = () => {
    return (
        <div className='text-center'>
            <h1 className='color'>Productos</h1>
            <hr />

            <ProductList />

        </div>
    )
}
