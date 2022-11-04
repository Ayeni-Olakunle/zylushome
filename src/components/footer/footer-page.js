import React from 'react';
import footerStyles from './footer-page.module.scss'

export default function FooterPage(props) {
    return (
        <section>
            <div className={footerStyles.holdFooter}>
                <div className={footerStyles.holdAbout}>
                    <h2 className={footerStyles.aboutTextH2}>About Us</h2>
                    <p className={footerStyles.aboutText}>
                        Zylus Homes is a leading real estate and investment place
                        dedicated to bringing real estate into the future by helping over 10,000+
                        daily visitors find, research, and multiply profits through our real estate
                        cash back program
                    </p>
                    <p className={footerStyles.aboutTextE}>
                        <a href="mailto:info@zylushomes.com">info@zylushomes.com</a>
                    </p>
                    <p className={footerStyles.aboutTextE}>
                        <a href="tel:+2347061032706">07061032706</a>
                    </p>
                </div>
                <div className={footerStyles.holdAbout}>
                    <h2 className={footerStyles.aboutTextH2}>Quick Links</h2>
                    <ul>
                        <li>Real Estate Videos</li>
                        <li>Our Estates</li>
                        <li>Book an inspection</li>
                        <li>Our Careers</li>
                        <li>Blog</li>
                        <li>Gallery</li>
                        <li>FAQ</li>
                        <li>How To Use Zylus Portal</li>
                        <li>Purchase</li>
                    </ul>
                </div>
                <div className={footerStyles.holdAbout}>
                    <h2 className={footerStyles.aboutTextH2}>Our Location</h2>
                    <p className={footerStyles.aboutText}>Head Office: 31, Theophilus  Oji Street, Lekki Phase 1, Lagos, Nigeria.</p>
                    <p className={footerStyles.aboutText}>Island Corporate Office: 1 Frank Ojadi Close, Checkpoint/Ogidan Bus-stop, Lekki-Epe Expressway, Sangotendo, Lagos, Nigeria.</p>
                    <p className={footerStyles.aboutText}>Island Cooperate Office: Suite 56/57 Road 3 Ikota Shopping Complex, VGC Lekki, Lagos, Nigeria.</p>
                    <p className={footerStyles.aboutText}>Mainland Cooperate Office: 65, Allen Avenue, First Bank Bus-stop, Ikeja, Lagos, Nigeria.</p>
                    <p className={footerStyles.aboutText}>Mainland Cooperate Office : 51/52, Ogba Ijaiye Road, 3rd Floor, by UBA, Ogba Bus-stop, Lagos, Nigeria.</p>
                    <p className={footerStyles.aboutText}>Abuja Cooperate Office: Abia House, Off Ahmadu Bello Way, Abuja.</p>
                    <p className={footerStyles.aboutText}>Abeokuta Office: 3F5, Grace Palace Iyana Mortuary Bustop off leme road, Abeokuta Ogun state</p>
                </div>
            </div>
        </section>
    );
};