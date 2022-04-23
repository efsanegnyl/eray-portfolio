import React  from "react";
import Layout from "../components/partials/layout";
import {AiOutlineMail} from "react-icons/ai";
import {FiGithub, FiInstagram} from "react-icons/fi";

import {RiLinkedinLine} from "react-icons/ri";
function ContactView() {
    return (
        <Layout>
            <div className="pt-20">
                <h1 className="text-center md:text-5xl text-3xl font-bold  mb-20 text-primary-orange">İletişim
                    <span className="title-bg ">İletişim</span>
                </h1>
                <div className="container flex flex-col items-center ">

                    <a href="mailto:eraybulutlar@gmail.com" target="_blank">
                        <div className="flex hover:text-primary-orange mb-10 items-center cursor-pointer">
                            <AiOutlineMail className="font-bold text-3xl    "/>
                            <p className="pl-5">eraybulutlar@gmail.com</p>
                        </div>
                    </a>

                    <a
                        href="https://tr.linkedin.com/in/eray-bulut-255644196"
                        target="_blank"
                    >
                        <div className="flex mb-10 hover:text-primary-orange items-center ">
                            <RiLinkedinLine className="font-bold text-3xl" />
                            <p className="pl-5"> Eray Bulut</p>
                        </div>
                    </a>



                    <a href="https://github.com/eraybulut">
                        <div className="flex mb-10 hover:text-primary-orange items-center ">
                            <FiGithub className="font-bold text-3xl  cursor-pointer  "/>
                            <p className="pl-5">Eray Bulut</p>
                        </div>
                    </a>
                </div>

            </div>
        </Layout>
    );
}

export default ContactView;
