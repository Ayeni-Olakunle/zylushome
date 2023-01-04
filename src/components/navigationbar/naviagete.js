import React from 'react';
import logo from "../../images/company-logo.png"
import navigationStyle from "./naviagete.module.scss"
import { IoMdArrowDropdown } from 'react-icons/io';
import { HiMenu } from 'react-icons/hi';

export default function Naviagete() {

    return (
        <section>
            <div className={navigationStyle.holdNavigate}>
                <div>
                    <img src={logo} className={navigationStyle.logos} alt="Logo" />
                </div>
                <div className={navigationStyle.menu}>
                    <ul className={navigationStyle.holdParent}>
                        <li>Home</li>
                        <li>
                            <div className={navigationStyle.product}>
                                <span>Our Products</span>
                                <span><IoMdArrowDropdown className={navigationStyle.iconMe} /></span>
                            </div>
                            <ul className={navigationStyle.holdChild}>
                                <li>Houses</li>
                                <li>Lands</li>
                            </ul>
                        </li>
                        <li>Blog</li>
                        <li>Real Estate Videos</li>
                        <li>
                            <div className={navigationStyle.product}>
                                <span>News</span>
                                <span><IoMdArrowDropdown className={navigationStyle.iconMe} /></span>
                            </div>
                            <ul className={navigationStyle.holdChild}>
                                <li>Media</li>
                                <li>FAQ</li>
                                <li>Gallery</li>
                            </ul>
                        </li>
                        <li>
                            <div className={navigationStyle.product}>
                                <span>Who we are</span>
                                <span><IoMdArrowDropdown className={navigationStyle.iconMe} /></span>
                            </div>
                            <ul className={navigationStyle.holdChild}>
                                <li>About us</li>
                                <li>Contact us</li>
                            </ul>
                        </li>
                        <li>
                            <button className={navigationStyle.callUs}>Call us</button>
                        </li>
                    </ul>
                </div>
                <div className={navigationStyle.menu2}>
                    <HiMenu />
                </div>
            </div>
        </section>
    );
}
