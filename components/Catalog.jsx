import { useState, useEffect } from 'react';
import Link from 'next/link'


import { productList } from '../lib/productList';


const ProductBrief = (props) => {

    return (
        <div style={{
            width: '240px',
            height: '420px',
            border: 'solid 1px black',
            borderRadius: '1rem',
            textAlign: 'center',
            margin: '1rem',
            paddingBottom: '4rem',
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
        </div>
    )
}

const Catalog = () => {

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
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