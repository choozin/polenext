import { useState, useEffect } from 'react';


const productList = [
    {
        id: '001',
        title: 'Item 1',
        price: '9.99',
        description: 'This is the desc.',
        quantities: ['1', '10', '50', '100'],
        variants: ['original', 'special'],
        images: null, // []
        manufacturer: 'paper co.',
        material: 'standard paper',
        tags: ['trucking'],
    },
    {
        id: '002',
        title: 'Item 2',
        price: '19.99',
        description: 'This is the desc.',
        quantities: ['1', '10', '50', '100'],
        variants: ['original', 'special'],
        images: null, // []
        manufacturer: 'paper co.',
        material: 'standard paper',
        tags: ['trucking'],
    },
]

const ProductBrief = (props) => {

    return (
        <div style={{
            width: '300px',
            height: '400px',
            border: 'solid 1px black',
            borderRadius: '1rem',
            textAlign: 'center',
        }}>
            <div style={{
                width: '200px',
                height: '200px',
                border: 'dotted 1px grey',
                margin: '50px',
            }}>
                <h4>{props.title}</h4>
                <span>{props.price}</span>
            </div>
        </div>
    )
}

const Catalog = () => {

    return (
        <div>

        </div>
    )
}

export default Catalog;