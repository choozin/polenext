import Catalog from '../components/Catalog';
import Page from '../components/Page';

const catalog = () => {
    return (
        <Page
            title='Our Catalog'
        >
            <div
                style={{
                    width: '1000px',
                    maxWidth: '92vw',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <div
                    style={{
                        width: '400px',
                        padding: '0.5rem',
                        textAlign: 'center',
                    }}>
                    <p>Please take a moment to browse our catalog. We're sure you'll find what you're looking for!</p>
                </div>

                <Catalog />
            </div>

        </Page>
    )
}

export default catalog;