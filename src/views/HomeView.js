import React , { useState } from "react";
import Layout from "../components/partials/layout";
import {NavLink} from "react-router-dom";
import {FiGithub, FiInstagram} from "react-icons/fi";
import {RiTwitterLine} from "react-icons/ri";
import {MdAlternateEmail, MdDateRange, MdLocationOn} from "react-icons/md";
import {RiLinkedinLine} from "react-icons/ri";
import { FloatingLettersTextBuilder } from 'react-animated-text-builders'
import  image from '../assets/images/image.png'
function HomeView() {
    const [hide, setHide] = useState(false)
    return (
        <Layout>
            <div className="flex min-h-screen">
                <div className="scale-image bg-primary-orange"/>
                <div className="w-5/12  min-h-full flex items-center justify-center p-10 z-20 ">
                  <div className="relative">
                      <img src={image} className="rounded-2xl image  " width="100%" alt=""/>
                  </div>
                    <div>
                        <div className="bg-primary-dark-800   w-1/3 absolute left-10 bottom-8   rounded-full">
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
                </div>

                <div className=" home-details w-7/12  mx-14 min-h-full flex flex-col justify-center ">
                    <h1 className="font-semibold flex uppercase text-primary-orange text-5xl   mx-16">
                       Ben
                        <FloatingLettersTextBuilder
                        floatingSpeed={500}
                        lettersAppearanceDelay={250}
                        animationMaxMargin={"200px"}
                        animationMinMargin={"0px"}
                    >   Eray   Bulut
                        </FloatingLettersTextBuilder>
                        <br/>
                    </h1>
                    <span className="text-primary-light ml-16 mb-5 text-2xl">Android Developer</span>

                    <p className="leading-7 pr-36 mb-24">
                        I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
                    </p>
                    <div>
                        <div className="mr-10 ">
                            <ul className=" md:flex justify-between">
                                <li className="flex items-center mb-2">
                                    <MdDateRange className="mr-2  text-primary-orange" />
                                    <span className="">12.04.2000</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <MdAlternateEmail className="mr-2 text-primary-orange " />
                                    <span>mail@deneme.com</span>
                                </li>
                                <li className="flex items-center">
                                    <MdLocationOn className="mr-2 text-primary-orange " />
                                    <span>İstanbul , Türkiye</span>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>

                <div>

                </div>

            </div>
        </Layout>
    );
}

export default HomeView;
