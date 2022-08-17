import { useEffect, useState } from 'react';
import Link from 'next/link'

const Footer = () => {


    return (
        <div style={{
            width: '100vw',
            overflow: 'hidden',
            display: 'flex',
            background: "url('/img/textures/paper-1.png')",
            backgroundColor: 'white',
            color: '#333',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            opacity: '1',
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
                <Link href='/privacy' passHref><a>Privacy Policy</a></Link><br/>
                <span></span><br/>
                <span>Copyright Pole Printing Inc. 2022</span><br/>
            </div>
        </div>
    )
}


export default Footer;