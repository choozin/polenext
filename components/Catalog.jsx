import { useState, useEffect } from 'react';
import Link from 'next/link'

import { motion, AnimatePresence } from 'framer-motion';

import { productList } from '../lib/productList';


const ProductBrief = (props) => {

    return (
        <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05}} 
            whileTap={{ scale: 0.97 }} 
            exit={{ scale: 1 }} 
            style={{
                width: '240px',
                height: '320px',
                textAlign: 'center',
                fontSize: '1.5rem',
                margin: '1rem',
                paddingBottom: '4rem',
                backgroundColor: "#FFF", //"#634938",
                backgroundImage: "url('/img/textures/clean-gray-paper.png')",
                boxShadow: '0.1rem 0.25rem 0.25rem 0.25rem rgba(16,8,4,0.5)',
            }}>
            <Link
                passHref
                href={`/catalog/${props.id}`}
                key={props.id}
            >
                <div style={{
                    width: '200px',
                    height: '200px',
                    border: 'dotted 1px grey',
                    background: 'rgba(255,255,255,0.1)',
                    margin: '20px',
                    cursor: 'pointer',
                }}>
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

                    <h4>{props.title}</h4>
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
                return (<ProductBrief
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