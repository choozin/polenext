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
                }}>
                    <p>Price: {product && product.price}</p>
                    <p>Description: {product && product.description}</p>
                    <p>Material: {product && product.material}</p>
                    <p>Material Manufacturer: {product && product.manufacturer}</p>
                    <p>Quantities: {product && product.quantities && 
                        product.quantities.map((qty, index) => <span key={index}>{qty}{index !== product.quantities.length-1 && ', '}</span>)
                    }
                    </p>
                </div>
            </div>
        </Page>
    )
}

export default Product;