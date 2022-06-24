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
                    <div
                    style={{
                        width: '100%',
                        marginTop: '1rem',
                    }}>
                        <button
                            style={{
                                width: '128px',
                                padding: '0.5rem',
                                margin: '0 auto',
                            }}>Add to Cart</button>
                    </div>

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