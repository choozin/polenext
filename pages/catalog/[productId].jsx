import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import Page from '../../components/Page';
import { productList } from '../../lib/productList';

import "@fontsource/bebas-neue";
import "@fontsource/permanent-marker";
import "@fontsource/shadows-into-light";
import "@fontsource/special-elite";

const Product = () => {
    const router = useRouter()
    const { productId } = router.query;

    const [product, setProduct] = useState({
        title: 'Loading...'
    });

    useEffect(() => {
        setProduct(productList.find(p => p.id === productId));
    }, [productId])

    return (
        <Page
            title={product && product.title}
        >
            <div>
                <div
                    style={{
                        width: '700px',
                        maxWidth: '92vw',
                        display: 'flex',
                        flexWrap: 'wrap',
                    }}>
                    <div style={{
                        width: '300px',
                        height: '300px',
                        border: 'dotted 1px white',
                        margin: '20px',
                    }}>
                    </div>
                    <div
                        style={{
                            maxWidth: '300px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                        }}>
                        <div>
                            <p>Price: {product && product.price}</p>
                            <p>Product Number: </p>
                        </div>
                        <p>Volume: {product && product.quantities &&
                            product.quantities.map((qty, index) => <button key={index}>{qty}{index !== product.quantities.length - 1 && ', '}</button>)
                        }
                        </p>
                        <label>Quantity<select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                        </select></label>
                        <button>Add to Cart</button>
                    </div>
                </div>
                <div
                    style={{
                        width: '700px',
                        maxWidth: '92vw',
                        paddingLeft: '1rem',
                        backgroundColor: 'white',
                        border: 'solid 0.5rem purple',
                    }}>
                    <p>Description: {product && product.description}</p>
                    <p>Material: {product && product.material}</p>
                    <p>Material Manufacturer: {product && product.manufacturer}</p>
                </div>
            </div>
        </Page>
    )
}

export default Product;