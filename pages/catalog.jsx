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
                        padding: '0.5rem',
                        textAlign: 'center',
                    }}>
                    <p>Please take a moment to browse our catalog. We&apos;re sure you&apos;ll find what you&apos;re looking for!</p>
                </div>

                <Catalog />
            </div>

        </Page>
    )
}

export default catalog;