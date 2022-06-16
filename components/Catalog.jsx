import { useState, useEffect } from 'react';
import Link from 'next/link'


import { productList } from '../lib/productList';


const ProductBrief = (props) => {

    return (
        <div style={{
            width: '240px',
            height: '360px',
            border: 'solid 1px black',
            borderRadius: '1rem',
            textAlign: 'center',
            margin: '1rem',
        }}>
            <div style={{
                width: '200px',
                height: '200px',
                border: 'dotted 1px grey',
                margin: '20px',
            }}>
            </div>
            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}>

                <h4>{props.title}</h4>
                <span style={{ color: 'transparent', textShadow: '0 0 1rem black', }}>{props.price}</span>
                <span>Call for Pricing</span>
                <Link
                    passHref
                    href={`/catalog/${props.id}`}
                    key={props.id}
                >
                    <button>View More</button>
                </Link>
            </div>
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
                return (<ProductBrief key={product.id} id={product.id} title={product.title} price={product.price} />)
            })}
        </div>
    )
}

export default Catalog;