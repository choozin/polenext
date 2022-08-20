import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

import { motion, AnimatePresence } from 'framer-motion';

import { productList } from '../lib/productList';


const ProductBrief = (props) => {

    return (
        <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05}} 
            whileTap={{ scale: 0.97 }} 
            style={{
                width: '240px',
                height: '240px',
                textAlign: 'center',
                fontSize: '1.5rem',
                margin: '1rem',
                paddingBottom: '4rem',
                backgroundColor: "#FFF", //"#634938",
                backgroundImage: "url('/img/textures/clean-gray-paper.png')",
                boxShadow: '0.1rem 0.25rem 0.25rem 0.25rem rgba(16,8,4,0.5)',
                textShadow: 'none',
            }}>
            <Link
                passHref
                href={`/catalog/${props.id}`}
                key={props.id}
            >
                <div style={{
                    width: '200px',
                    height: '150px',
                    background: 'rgba(255,255,255,0.1)',
                    margin: '20px',
                    cursor: 'pointer',
                    position: 'relative',
                }}>
                    <a><Image src={props.images ? props.images.length > 0 ? props.images[0] : '/img/common/underconstruction.jpg' : '/img/common/underconstruction.jpg'} layout='fill' objectFit='contain' alt={props.title + ' from Pole Printing'}/></a>
                </div>
            </Link>
            <Link
                passHref
                href={`/catalog/${props.id}`}
                key={props.id}
            >
                <div style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}>

                    <a><h4 style={{margin: '0 auto', }}>{props.title}</h4></a>
                </div>
            </Link>
        </motion.div>
    )
}

const Catalog = () => {

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            color: '#333',
        }}>
            {productList.map((product) => {
                return (product.primaryProduct && <ProductBrief
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    minimumOrderQuantity={product.minimumOrderQuantity}
                    quantities={product.quantities}
                    quantitiesLabel={product.quantitiesLabel}
                    sizes={product.sizes}
                    images={product.images}
                    materials={product.materials}
                    materialLabel={product.materialLabel}
                    materialColors={product.materialColors}
                    printColors={product.printColors}
                    optionalFeatures={product.optionalFeatures}
                    tags={product.tags}
                />)
            })}
        </div>
    )
}

export default Catalog;