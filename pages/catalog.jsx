import Link from 'next/link';

import Catalog from '../components/Catalog';
import Page from '../components/Page';

const catalog = () => {
    return (
        <Page
            title='Browse Our Catalog'
        >
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <div
                    style={{
                        width: '400px',
                        maxWidth: '100vw',
                        padding: '0.5rem',
                        textAlign: 'center',
                        color: '#DDD', 
                    }}>
                    <p>If there&apos;s a custom print job you can&apos;t find listed below,<br/>please <Link href='/contact'><span style={{ color: '#4BD', cursor: 'pointer', }}>contact us here.</span></Link><br/><br/>We&apos;ll find you a solution!</p>
                </div>

                <Catalog />
            </div>

        </Page>
    )
}

export default catalog;