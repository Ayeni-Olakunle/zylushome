import React from 'react';
import landPageStyle from "./landingPage.module.scss"
import house from "../../images/house.png"
import aboutus from "../../images/aboutus.jpg"
import { Link } from 'react-router-dom';
import { FaGreaterThan } from "react-icons/fa"

export default function LandPage() {
    return (
        <section>
            <div className={landPageStyle.holdLandPage}>
                <div className={landPageStyle.holdLandPage2}>
                    <div className={landPageStyle.houseText}>
                        <h1>Find a house to suit your budget and lifestyle</h1>
                        <p>We are committed to building strong, sustainable, proactive and long term relationships with both corporate and private clients. We strive to deliver the best results and maximum satisfaction</p>
                        <button>Find Properties</button>
                    </div>
                    <div>
                        <img src={house} alt="House" className={landPageStyle.houseImage} />
                    </div>
                </div>
            </div>
            <div>
                <div className={landPageStyle.holdAbout}>
                    <div className={landPageStyle.holdAbout2}>
                        <div>
                            <img src={aboutus} alt="House" className={landPageStyle.aboutusImage} />
                        </div>
                        <div className={landPageStyle.aboutText}>
                            <h1 className={landPageStyle.aboutText2}>About us</h1>
                            <h1 className={landPageStyle.aboutText3}>EXPERIENCE LIFE IN FULL BLOOM, ONLY WITH ZYLUS HOMES.</h1>
                            <p>Zylus Homes is a leading provider of real estate and property development services. We also offer consultancy services across rural, commercial and residential property.</p>
                            <p>Our philosophy is an expression of our commitment which is to <strong>“at all times deliver quality services with accountability and professionalism”.</strong></p>
                            <button>About us</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={landPageStyle.holdFeatured}>
                <div className={landPageStyle.holdFeatured2}>
                    <h1>Our Featured Estates</h1>
                    <div className={landPageStyle.holdList}>
                        <div className={landPageStyle.holdbox}>
                            <div>
                                <img src='https://www.zylushomes.com/wp-content/uploads/2022/04/zylus-Lekki-pride-iii.jpg' alt='products' className={landPageStyle.boxImage} />
                            </div>
                            <div className={landPageStyle.LekkiP2Me}>
                                <h3 className={landPageStyle.LekkiP}>LEKKI PRIDE III</h3>
                                <p>
                                    Lekki Pride Phase III  offers exciting projects tailored to meet your highest standards,
                                    with excellently designed luxury homes, that brings comfort, luxury and appreciation overtime.
                                </p>
                                <button className={landPageStyle.vLand}>View Land</button>
                            </div>
                        </div>
                        <div className={landPageStyle.holdbox}>
                            <div>
                                <img src='https://www.zylushomes.com/wp-content/uploads/2021/08/eti-ile-court-zylus-group-international.jpg' alt='products' className={landPageStyle.boxImage} />
                            </div>
                            <div className={landPageStyle.LekkiP2Me}>
                                <h3 className={landPageStyle.LekkiP}>ETI-ILE COURT</h3>
                                <p>
                                    <span>ETILÈ COURT</span> is a private estate specially crafted to suit all the features of your dream home. It offers an enclave of a luxurious yet affordable
                                </p>
                                <button className={landPageStyle.vLand}>View Land</button>
                            </div>
                        </div>
                        <div className={landPageStyle.holdbox}>
                            <div>
                                <img src='https://www.zylushomes.com/wp-content/uploads/2021/08/New-treasure-park-estate-zylus-group-international.jpg' alt='products' className={landPageStyle.boxImage} />
                            </div>
                            <div className={landPageStyle.LekkiP2Me}>
                                <h3 className={landPageStyle.LekkiP}>TREASURE PARK</h3>
                                <p>
                                    <span>TREASURE PARK</span> is an estate with everything in one place – nature, comfort, recreation, and a clear vision to create a fulfilling life experience for all.
                                </p>
                                <button className={landPageStyle.vLand}>View Land</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to="product">
                            <button className={landPageStyle.seeAllLand}>
                                See All Lands
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <div className={landPageStyle.holdAbout}>
                    <div className={landPageStyle.holdBlog}>
                        <div className={landPageStyle.aboutText}>
                            <h1 className={landPageStyle.aboutText2}>Featured Blog Post</h1>
                            <p>Off-plan property purchase means that you are buying into the concept and design of the development with the hopes that the project execution process will be a favorable one and that the end product matches your expectation. </p>
                            <button>Read More here</button>
                        </div>
                        <div>
                            <img src="https://www.zylushomes.com/wp-content/uploads/2022/07/f0bc5912-79e2-4293-a43d-2aeb06496498.jpg" alt="House" className={landPageStyle.aboutusImage} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={landPageStyle.holdFeatured}>
                <div className={landPageStyle.holdFeatured2}>
                    <h1>FEATURED HOUSES</h1>
                    <div className={landPageStyle.holdList}>
                        <div className={landPageStyle.holdbox2}>
                            <div>
                                <img src='https://www.zylushomes.com/wp-content/uploads/2022/04/zylus-Lekki-pride-iii.jpg' alt='products' className={landPageStyle.boxImage} />
                            </div>
                            <div className={landPageStyle.holdTextMe}>
                                <h3 className={landPageStyle.LekkiP2}>LEKKI PRIDE II</h3>
                                <div className={landPageStyle.vLandButin}>
                                    <p><strong>Lekki Pride II</strong> offers apartments tailored to meet your highest standards.</p>
                                    <button className={landPageStyle.vLand2}>View House</button>
                                </div>
                            </div>
                        </div>
                        <div className={landPageStyle.holdbox2}>
                            <div>
                                <img src='https://www.zylushomes.com/wp-content/uploads/2021/08/eti-ile-court-zylus-group-international.jpg' alt='products' className={landPageStyle.boxImage} />
                            </div>
                            <div className={landPageStyle.holdTextMe}>
                                <h3 className={landPageStyle.LekkiP2}>ETI-ILE COURT</h3>
                                <div>
                                    <div className={landPageStyle.vLandButin}>
                                        <p><strong>Zylus Court Extension </strong>features elegantly designed bungalows and terraces plus BQs and is the place you need to be.</p>
                                        <button className={landPageStyle.vLand2}>View House</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={landPageStyle.holdbox2}>
                            <div>
                                <img src='https://www.zylushomes.com/wp-content/uploads/2021/08/New-treasure-park-estate-zylus-group-international.jpg' alt='products' className={landPageStyle.boxImage} />
                            </div>
                            <div className={landPageStyle.holdTextMe}>
                                <h3 className={landPageStyle.LekkiP2}>TREASURE PARK</h3>
                                <div className={landPageStyle.holdTextMe}>
                                    <div className={landPageStyle.vLandButin}>
                                        <p><strong>Zylus Court</strong> offers a well-planned environment with green gardens and modern infrastructure.</p>
                                        <button className={landPageStyle.vLand2}>View House</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={landPageStyle.holdAbout}>
                    <div className={landPageStyle.holdAbout2}>
                        <div>
                            <img src="https://www.zylushomes.com/wp-content/uploads/2022/07/Lekki-Pride-1-latest-zyluhomes.jpg" alt="House" className={landPageStyle.aboutusImage} />
                        </div>
                        <div className={landPageStyle.aboutText}>
                            <h1 className={landPageStyle.aboutText2}>Featured Blog Post</h1>
                            <p className={landPageStyle.addNo}>Off-plan property purchase means that you are buying into the concept and design of the development with the hopes that the project execution process will be a favorable one and that the end product matches your expectation. </p>
                            <button>Read more here</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
