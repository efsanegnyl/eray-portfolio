import React  from "react";
import Layout from "../components/partials/layout";

function ProjectView() {
    return (
        <Layout>
        <div className="pt-20">
            <h1 className="text-center md:text-5xl text-3xl font-bold  mb-20 text-primary-orange">Projelerim
                <span className="title-bg ">Projeler</span>
            </h1>


            <div className="flex flex-wrap md:px-44 px-8">
                <div className="md:w-1/2 px-2 py-4  ">
                    <a href="/" target="_blank" className="min-h-full">
                        <div
                            className=" hover:scale-95 cursor-pointer min-h-full duration-100 rounded-xl bg-[#171923]  mb-5  ">
                            <div className="mb-3 rounded-xl">
                                <img src="	https://tunis.ibthemespro.com/img/projects/project-1.jpg" alt="" className="rounded-t-xl" />
                            </div>
                            <div className="px-4">
                                <h2 className="text-primary-orange mb-2 font-semibold ">
                                    deneme
                                </h2>
                                <h2 className="pb-6">deneme</h2>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="md:w-1/2 px-2 py-4  ">
                    <a href="/" target="_blank" className="min-h-full">
                        <div
                            className=" hover:scale-95 cursor-pointer min-h-full duration-100 rounded-xl bg-[#171923]  mb-5  ">
                            <div className="mb-3 rounded-xl">
                                <img src="	https://tunis.ibthemespro.com/img/projects/project-1.jpg" alt="" className="rounded-t-xl" />
                            </div>
                            <div className="px-4">
                                <h2 className="text-primary-orange mb-2 font-semibold ">
                                    deneme
                                </h2>
                                <h2 className="pb-6">deneme</h2>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="md:w-1/2 px-2 py-4  ">
                    <a href="/" target="_blank" className="min-h-full">
                        <div
                            className=" hover:scale-95 cursor-pointer min-h-full duration-100 rounded-xl bg-[#171923]  mb-5  ">
                            <div className="mb-3 rounded-xl">
                                <img src="	https://tunis.ibthemespro.com/img/projects/project-1.jpg" alt="" className="rounded-t-xl" />
                            </div>
                            <div className="px-4">
                                <h2 className="text-primary-orange mb-2 font-semibold ">
                                    deneme
                                </h2>
                                <h2 className="pb-6">deneme</h2>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

        </div>
        </Layout>
    );
}

export default ProjectView;
