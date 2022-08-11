import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import { motion, AnimatePresence } from 'framer-motion';

import Page from '../../components/Page';
import QuoteDialogue from '../../components/QuoteDialogue';
import { productList } from '../../lib/productList';

import "@fontsource/bebas-neue";
import "@fontsource/permanent-marker";
import "@fontsource/shadows-into-light";
import "@fontsource/special-elite";
import "@fontsource/stardos-stencil";

const ImagePreview = ({ close, images, imageIndex, title }) => {


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
            zIndex: '100',
        }}>
            <div style={{
                width: '95vw',
                maxWidth: '800px',
                height: '100%',
                minHeight: '400px',
                maxHeight: '88vh',
                border: 'solid 1rem white',
                background: 'rgba(0,0,0,1)',
                zIndex: '100',
                overflow: 'hidden',
                position: 'relative',
            }}>
                <div style={{
                    fontSize: '1.5rem',
                    padding: '1rem',
                    right: '0',
                    bottom: '0',
                    border: 'none',
                    position: 'absolute',
                    borderTopLeftRadius: '1rem',
                    backgroundColor: '#444',
                    color: '#DDD',
                    cursor: 'pointer',
                    zIndex: '40',
                }}
                    onClick={() => close(false)}>Close</div>

                <Image src={images && images.length > 0 ? images[imageIndex] : '/img/common/image_not_found.png'} layout='fill' objectFit='contain' alt={title} />
            </div>
            <div style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '0',
                left: '0',
                opacity: '0',
                zIndex: '50',
            }} onClick={() => props.close(false)} />
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
    const [isQuoteDialogueOpen, setIsQuoteDialogueOpen] = useState(false)

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        setProduct(productList.find(p => p.id === productId));
    }, [productId])

    return (
        <Page
            title={product && product.title}
            backgroundColor="#222" //"#634938"
            backgroundImage="url('/img/textures/purty-wood.png')" //"url('/img/textures/cardboard.png')"
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
                        maxWidth: '300px',
                        margin: '20px',
                    }}>

                        <div style={{
                            position: 'relative',
                            width: '300px',
                            minHeight: '226px',
                            border: 'solid 1px white',
                            backgroundColor: 'black',
                            margin: '0 auto',
                            marginBottom: '1rem',
                            cursor: 'zoom-in',
                        }}
                            onClick={() => setIsImagePreviewOpen(true)} >
                            <Image src={product && product.images && product.images.length > 0 ? product.images[currentImageIndex] : '/img/common/image_not_found.png'} layout='fill' objectFit='contain' alt={product && product.title} />
                        </div>
                        {
                            isImagePreviewOpen && <ImagePreview close={() => setIsImagePreviewOpen()} images={product && product.images && product.images.length > 0 && product.images} imageIndex={currentImageIndex} title={product && product.title && product.title} />
                        }

                        <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                            {product && product.images && product.images.length > 0 && product.images.map((image, index) => {
                                return <motion.div
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.97 }}
                                    style={{ width: '50px', height: '38px', backgroundColor: 'rgba(1,1,1,0.5)', margin: '10px', border: '1px solid white', cursor: 'pointer', position: 'relative' }}
                                    onClick={() => setCurrentImageIndex(index)} >
                                    <Image src={image} layout='fill' objectFit="contain" />
                                </motion.div>
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
                            <div style={{ width: '100%', display: 'flex', }}>
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
                                    }}
                                    onClick={() => setIsQuoteDialogueOpen(true)}>Get Your Quote</motion.button>
                                <Link href='/submit-a-file'><motion.button
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        maxWidth: '280px',
                                        fontSize: '1.5rem',
                                        margin: '0 auto',
                                        marginBottom: '2rem',
                                        padding: '0.5rem',
                                        background: 'rgba(32,32,196, 0.5)',
                                        border: 'solid 2px #CCF',
                                        borderRadius: '1rem',
                                        color: '#CCF',
                                        fontFamily: 'Bebas Neue',
                                    }}
                                >Send Us A File</motion.button></Link>
                            </div>
                            {
                                isQuoteDialogueOpen && <QuoteDialogue close={() => setIsQuoteDialogueOpen(false)} product={product} />
                            }
                            <table style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '0.1rem',
                                boxShadow: "0rem 0.2rem 0.5rem 0.5rem #333",
                                backgroundColor: "white",
                                backgroundImage: "url('/img/textures/paper.png')",
                            }}>
                                {product && product.sizes && product.sizes.length > 0 && <>
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
                                    <td style={{ borderTop: '1px solid black' }} colSpan='2' />
                                </>}
                                {product && product.materials && product.materials.length > 0 && <>
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
                                    <td style={{ borderTop: '1px solid black' }} colSpan='2' />
                                </>}
                                {product && product.materialColors && product.materialColors.length > 0 && <>
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
                                    <td style={{ borderTop: '1px solid black' }} colSpan='2' />
                                </>}
                                {product && product.printColors && product.printColors.length > 0 && <>
                                    <tr>
                                        <td>{product && product.printLabel ? product.printLabel : 'Print Colour'}:</td>
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
                                    <td style={{ borderTop: '1px solid #000' }} colSpan='2' />
                                </>}
                                {product && product.quantities && product.quantities.length > 0 && <>
                                    <tr>
                                        <td>{product && product.quantitiesLabel}:</td>
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
                                    <td style={{ borderTop: '1px solid black' }} colSpan='2' />
                                </>}
                                {product && product.minimumOrderQuantity && <>
                                    <tr>
                                        <td style={{ width: '200px', maxWidth: '40%' }}>Minimum Order Quantity:</td>
                                        <td style={{ width: '380px', maxWidth: '57%', textAlign: 'center', }}>{product && product.minimumOrderQuantity}&nbsp;(No Maximum)</td>
                                    </tr>
                                </>}
                            </table>

                        </div>
                    </div>
                </div>
                <div
                    style={{
                        maxWidth: '92vw',
                        padding: '1.5rem',
                        paddingTop: '0.25rem',
                        backgroundColor: "#FFF",
                        backgroundImage: "url('/img/textures/notebook-dark.png')",
                        margin: '0 auto',
                        marginTop: '2rem',
                        marginBottom: '2rem',
                        textAlign: 'center',
                    }}>
                    <h3 style={{ paddingTop: '1rem' }}>About {product && product.title}</h3>
                    <p>{product && product.description}</p>
                    <p>**Please note, our prefered method of payment is via e-transfer. We will provide you with the receiving address via email when you request your quote. <br />Other payment methods also available upon request.**</p>
                </div>
            </div>
        </Page>
    )
}

export default Product;