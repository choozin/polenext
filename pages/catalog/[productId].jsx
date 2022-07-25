import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import { motion, AnimatePresence } from 'framer-motion';

import Page from '../../components/Page';
import { productList } from '../../lib/productList';

import "@fontsource/bebas-neue";
import "@fontsource/permanent-marker";
import "@fontsource/shadows-into-light";
import "@fontsource/special-elite";

const GetQuote = (props) => {


    return (
        <span>Get Quote!</span>
    )
}

const ImagePreview = (props) => {


    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            top: '0',
            left: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.7)',
        }}>
            <div style={{
                width: '95vw',
                maxWidth: '800px',
                minHeight: '600px',
                border: 'solid 1rem white',
                background: 'rgba(255,255,255,0.7)',
                zIndex: '100',
            }}>
                <div style={{
                    fontSize: '1.5rem',
                    padding: '1rem',
                    float: 'right',
                    border: 'none',
                    borderBottomLeftRadius: '1rem',
                    backgroundColor: '#444',
                    color: '#DDD',
                    cursor: 'pointer',
                }}
                onClick={() => props.close(false)}>Close</div>
            </div>
            <div style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '0',
                left: '0',
                opacity: '0',
                zIndex: '50',
            }} onClick={() => props.close(false)}/>
        </div>
    )

}

const Product = () => {
    const router = useRouter()
    const { productId } = router.query;

    const [product, setProduct] = useState({
        title: 'Loading...'
    });

    let images = ['1', '2', '3', '4', '5', '6']
    
    const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false)

    useEffect(() => {
        setProduct(productList.find(p => p.id === productId));
    }, [productId])

    return (
        <Page
            title={product && product.title}
            backgroundColor="#2e2d29"
            backgroundImage="url('/img/textures/wood-pattern.png')"
        >
            <div>
                <div
                    style={{
                        width: '100%',
                        maxWidth: '1200px',
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                    }}>
                    <div style={{
                        width: '100%',
                        maxWidth: '320px',
                        margin: '20px',
                    }}>

                        <div style={{
                            width: '300px',
                            height: '300px',
                            border: 'dotted 1px white',
                            backgroundColor: 'rgba(1,1,1,0.1)',
                            margin: '0 auto',
                        }} 
                        onClick={() => setIsImagePreviewOpen(true)}/>
                        {
                            isImagePreviewOpen && <ImagePreview close={() => setIsImagePreviewOpen()}/>
                        }
                        
                        <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                            {images.map((image) => {
                                return <motion.div
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.97 }}
                                    style={{ width: '50px', height: '40px', backgroundColor: 'rgba(1,1,1,0.5)', margin: '10px' }} />
                            })}
                        </div>
                    </div>
                    <div
                        style={{
                            width: '100%',
                            maxWidth: '600px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            padding: '0.25rem',
                            marginTop: '1rem',
                        }}>
                        <div>
                            <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                                <motion.button
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        maxWidth: '280px',
                                        fontSize: '1.5rem',
                                        margin: '0 auto',
                                        marginBottom: '2rem',
                                        padding: '0.5rem',
                                        background: 'rgba(196,160,32, 0.5)',
                                        border: 'solid 2px #FEA',
                                        borderRadius: '1rem',
                                        color: '#FEA',
                                        fontFamily: 'Bebas Neue',
                                    }}>Get Your Quote</motion.button>
                            </div>
                            <table style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '0.3rem',
                                boxShadow: "0rem 0.2rem 0.5rem 0.5rem #333",
                                backgroundColor: "white",
                                backgroundImage: "url('/img/textures/paper.png')",
                            }}>
                                <tr>
                                    <td>Sizes:</td>
                                    <td><ul style={{ listStyleType: 'none', textAlign: 'center' }}>{product && product.sizes && product.sizes.map(
                                        (size) => {
                                            return (
                                                <li key={size}>
                                                    {size}
                                                    <br />
                                                </li>
                                            )
                                        }
                                    )}</ul></td>
                                </tr>
                                <td style={{ height: '1rem', borderBottom: '1px solid black' }} colSpan='2' />
                                <tr>
                                    <td>{product && product.materialLabel}:</td>
                                    <td><ul style={{ listStyleType: 'none', textAlign: 'center' }}>{product && product.materials && product.materials.map(
                                        (material) => {
                                            return (
                                                <li key={material}>
                                                    {material}
                                                    <br />
                                                </li>
                                            )
                                        }
                                    )}</ul></td>
                                </tr>
                                <td style={{ height: '1rem', borderBottom: '1px solid black' }} colSpan='2' />
                                <tr>
                                    <td>Product Colour:</td>
                                    <td style={{ textAlign: 'center' }}>{product && product.materialColors && product.materialColors.map(
                                        (color, index) => {
                                            return (
                                                <div style={{ display: 'inline' }} key={color}>
                                                    {color}
                                                    {index + 1 !== product.materialColors.length && ', '}
                                                </div>
                                            )
                                        }
                                    )}</td>
                                </tr>
                                <td style={{ height: '1rem', borderBottom: '1px solid black' }} colSpan='2' />
                                <tr>
                                    <td>Print Colour:</td>
                                    <td style={{ textAlign: 'center' }}>{product && product.printColors && product.printColors.map(
                                        (color, index) => {
                                            return (
                                                <div style={{ display: 'inline' }} key={color}>
                                                    {color}
                                                    {index + 1 !== product.printColors.length && ', '}
                                                </div>
                                            )
                                        }
                                    )}</td>
                                </tr>
                                <td style={{ height: '1rem', borderBottom: '1px solid #000' }} colSpan='2' />
                                <tr>
                                    <td>Availiable Quantities:</td>
                                    <td style={{ textAlign: 'center' }}>{product && product.quantities && product.quantities.map(
                                        (quantity, index) => {
                                            return (
                                                <div style={{ display: 'inline' }} key={quantity}>
                                                    {quantity}
                                                    {index + 1 !== product.quantities.length && ', '}
                                                </div>
                                            )
                                        }
                                    )}</td>
                                </tr>
                                <td style={{ height: '1rem', borderBottom: '1px solid black' }} colSpan='2' />
                                <tr>
                                    <td style={{ width: '200px', maxWidth: '40%' }}>Minimum Order Quantity:</td>
                                    <td style={{ width: '380px', maxWidth: '57%', textAlign: 'center', }}>{product && product.minimumOrderQuantity}</td>
                                </tr>
                                <tr>
                                    <td style={{ height: '2rem' }} colSpan='2' />
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', color: 'brown' }} colSpan='2' >Product Number: 5555 5555 5555 5555 </td>
                                </tr>
                            </table>

                        </div>
                    </div>
                </div>
                <div
                    style={{
                        maxWidth: '92vw',
                        padding: '1rem',
                        backgroundColor: "#FFF",
                        backgroundImage: "url('/img/textures/notebook-dark.png')",
                        margin: '0 auto',
                        marginTop: '2rem',
                        marginBottom: '2rem',
                        textAlign: 'center',
                    }}>
                    <h3 style={{ paddingTop: '1rem' }}>Description</h3>
                    <p>{product && product.description}</p>
                </div>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                    <motion.button
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            maxWidth: '280px',
                            fontSize: '1.5rem',
                            margin: '0 auto',
                            marginBottom: '2rem',
                            padding: '0.5rem',
                            background: 'rgba(196,160,32, 0.5)',
                            border: 'solid 2px #FEA',
                            borderRadius: '1rem',
                            color: '#FEA',
                            fontFamily: 'Bebas Neue',
                        }}>Get Your Quote</motion.button>
                </div>
            </div>
        </Page>
    )
}

export default Product;