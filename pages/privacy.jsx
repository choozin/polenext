import Link from 'next/link';

import Catalog from '../components/Catalog';
import Page from '../components/Page';

const catalog = () => {
    return (
        <Page
            title='Privacy Policy'
            description='Pole Printing Inc.&apos;s Privacy Policy.'
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
                    <p>Last Updated August 12, 2022</p>
                    <p>Pole Printing Inc. ("us", "we", or "our") operates http://www.poleprinting.com (the
                        "Site"). This page informs you of our policies regarding the collection, use and disclosure of
                        Personal Information we receive from users of the Site.
                    </p>
                    <p>We use your Personal Information only for providing and improving the Site. By using the Site, you
                        agree to the collection and use of information in accordance with this policy.</p>

                    <h4>Information Collection and Use</h4>
                    <p>While using our Site, we may ask you to provide us with certain personally identifiable information
                        that can be used to contact or identify you. Personally identifiable information may include, but is not
                        limited to your name ("Personal Information").
                    </p>
                    <h4>Log Data</h4>
                    <p>Like many site operators, we collect information that your browser sends whenever you visit our Site
                        ("Log Data").</p>
                    <p>
                        This Log Data may include information such as your computer's Internet Protocol ("IP") address,
                        browser type, browser version, the pages of our Site that you visit, the time and date of your visit,
                        the time spent on those pages and other statistics.</p>
                    <p>
                        In addition, we may use third party services such as Google Analytics that collect, monitor and
                        analyze this data.</p>
                    <h4>Communications</h4>
                    <p>We may use your Personal Information to contact you with newsletters, marketing or promotional
                        materials and other information that pertains to our services. If you wish to stop receiving said material,
                        contact us at any time.</p>
                    <h4>Cookies</h4>
                    <p>Cookies are files with small amount of data, which may include an anonymous unique identifier.
                        Cookies are sent to your browser from a web site and stored on your computer's hard drive.</p>
                    <p>Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all
                        cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may
                        not be able to use some portions of our Site.</p>
                    <h4>security</h4>
                    <p>The security of your Personal Information is important to us, but remember that no method of
                        transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to
                        use commercially acceptable means to protect your Personal Information, we cannot guarantee its
                        absolute security.
                    </p>
                    <h4>Changes to this Privacy Policy</h4>
                    <p>This Privacy Policy is effective as of August 12, 2022 and will remain in effect except with respect to any
                        changes in its provisions in the future, which will be in effect immediately after being posted on this
                        page.
                    </p>
                    <p>We reserve the right to update or change our Privacy Policy at any time and you should check this
                        Privacy Policy periodically. Your continued use of the Service after we post any modifications to the
                        Privacy Policy on this page will constitute your acknowledgment of the modifications and your
                        consent to abide and be bound by the modified Privacy Policy.</p>
                    <p>If we make any material changes to this Privacy Policy, we will notify you either through the email
                        address you have provided us, or by placing a prominent notice on our website.
                    </p>
                    <h4>Contact Us</h4>
                    <p>If you have any questions about this Privacy Policy, please <Link href='/contact' passHref><a style={{ color: '#4BD' }}>contact us.</a></Link></p>
                </div>
            </div>

        </Page>
    )
}

export default catalog;