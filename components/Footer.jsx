import { useEffect, useState } from 'react';

const Footer = () => {


    return (
        <div style={{
            width: '100vw',
            overflow: 'hidden',
            display: 'flex',
            backgroundColor: '#333',
            color: 'white',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
        }}>
            <div style={{
                padding: '1rem',
            }}>
                <span>Pole Printing Inc.</span><br/>
                <span>89 King St. E</span><br/>
                <span>Forest, ON</span><br/>
                <span>519 786 5112</span><br/>
            </div>
            <div style={{
                padding: '1rem',
            }}>
                <span>Sitemap</span><br/>
                <span>Privacy Policy</span><br/>
                <span></span><br/>
                <span>Copyright Pole Printing Inc. 2022</span><br/>
            </div>
        </div>
    )
}


export default Footer;