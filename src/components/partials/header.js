import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {AiFillHome,AiFillMail} from "react-icons/ai";
import {BsFillBriefcaseFill} from "react-icons/bs";
import ReactTooltip from "react-tooltip";


function Header() {

    return (
        <div className="mr-4 flex items-center  absolute right-0 top-0  h-full ">
                    <nav className="h-2/6 ">
                        <ul className="">
                            <li   data-tip data-for="home" className="header-nav-item ">
                                <NavLink to="/" className="p-4">
                                    <AiFillHome className="text-md "/>
                                </NavLink>
                                <ReactTooltip id="home" t place="left" type="light" textColor="#3cdc84" effect="solid">
                                   <p className="text-md font-semibold"> Anasayfa</p>
                                </ReactTooltip>
                            </li>

                            <li data-tip data-for="portfolio" className="header-nav-item ">
                                <NavLink to="/projects" className="p-4">
                                    <BsFillBriefcaseFill className="text-md "/>
                                </NavLink>
                                <ReactTooltip id="portfolio" t place="left" type="light" textColor="#3cdc84" effect="solid">
                                    <p className="text-md font-semibold"> Portfolyo</p>
                                </ReactTooltip>
                            </li>
                            <li  data-tip data-for="contact" className="header-nav-item ">
                                <NavLink to="/contact" className="p-4">
                                    <AiFillMail className="text-md "/>
                                </NavLink>
                                <ReactTooltip id="contact" t place="left" type="light" textColor="#3cdc84" effect="solid">
                                    <p className="text-md font-semibold"> İletişim</p>
                                </ReactTooltip>
                            </li>
                        </ul>

                    </nav>

        </div>
    );
}

export default Header;
