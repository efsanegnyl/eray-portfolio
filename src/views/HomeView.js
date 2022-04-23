import React , { useState } from "react";
import Layout from "../components/partials/layout";
import {NavLink} from "react-router-dom";
import {FiGithub, FiInstagram} from "react-icons/fi";
import {RiTwitterLine} from "react-icons/ri";
import {MdAlternateEmail, MdDateRange, MdLocationOn} from "react-icons/md";
import {RiLinkedinLine} from "react-icons/ri";
import { FloatingLettersTextBuilder } from 'react-animated-text-builders';
import { BlinkingCursorTextBuilder } from 'react-animated-text-builders';
import  image from '../assets/images/image.png';
function HomeView() {
    const [hide, setHide] = useState(false);
    const windowWidth = window.innerWidth;
    console.log(windowWidth);
    return (
        <Layout>
            <div className="flex  md:flex-row flex-col  md:items-center  min-h-screen">
                <div className="scale-image bg-primary-orange"/>
                <div className="md:w-5/12  min-h-full flex  justify-center p-10 z-20 ">
                  <div className="relative">
                      <img src={image} className="md:rounded-2xl image rounded-full "  alt=""/>
                  </div>
                    <div className="bg-primary-dark-800   w-1/3 absolute md:left-10 md:bottom-8  md:top-auto top-72    ml-2  rounded-full">
                        <ul className="flex justify-around  text-white text-xl p-2 ">
                                <li className="home-icons">
                                    <a
                                        href="https://mobile.twitter.com/eraybulutlar"
                                        target="_blank"
                                    >
                                        <RiTwitterLine/>
                                    </a>
                                </li>
                                <li className="home-icons">
                                    <a
                                        href="https://tr.linkedin.com/in/eray-bulut-255644196"
                                        target="_blank"
                                    >
                                        <RiLinkedinLine />
                                    </a>
                                </li>
                                <li className="home-icons">
                                    <a href="https://github.com/eraybulut" target="_blank">
                                        <FiGithub />
                                    </a>
                                </li>
                            </ul>
                    </div>
                </div>
                <div className=" home-details md:w-7/12  mx-14   min-h-full flex flex-col justify-center ">
                    <h1 className="font-semibold flex uppercase text-primary-orange md:text-5xl  text-2xl  mx-16">

                       <BlinkingCursorTextBuilder
                           cursorStyle={{"backgroundColor": "#4454e2", }}
                        >
                           Ben Eray Bulut
                        </BlinkingCursorTextBuilder>
                        <br/>

                    </h1>
                    <span className="text-primary-light ml-16 mb-5 md:text-2xl">Android Developer</span>

                    <p className="leading-7 md:pr-36 mb-24">
                        Bilgisayar ve teknoloji alanında öğrenmeyi ve kendimi geliştirmeyi seven biriyim .
                        Aktif olarak Java ile android uygulama gelistiriyor , bu alanda ilerlemek icin ogrenmeye ve gelismeye devam ediyorum.
                    </p>

                        <div className="mr-10 ">
                            <ul className=" md:flex justify-between">
                                <li className="flex items-center mb-2">
                                    <MdDateRange className="mr-2  text-primary-orange" />
                                    <span className="">16.10.2001</span>
                                </li>
                                <li className="flex items-center mb-2">

                                    <MdAlternateEmail className="mr-2 text-primary-orange " />
                                    <span>eraybulutlar@gmail.com</span>
                                </li>
                                <li className="flex items-center">
                                    <MdLocationOn className="mr-2 text-primary-orange " />
                                    <span>İstanbul , Türkiye</span>
                                </li>
                            </ul>
                        </div>
                </div>
                <div>

                </div>

            </div>
        </Layout>
    );
}

export default HomeView;
