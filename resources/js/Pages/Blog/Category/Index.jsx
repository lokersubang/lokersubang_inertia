import Ads from "@/Components/Ads";
import Content from "@/Layouts/Content";
import HomeLayout from "@/Layouts/HomeLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import React from "react";

const Index = ({ categories }) => {
    return (
        <div>
            <Head>
                <title>Semua Kategori</title>

                <link rel="canonical" href="https://lokersubang.com/kategori" />
                <link rel="icon" href="/img/icon.ico" />
            </Head>
            {/* <Ads dataAdSlot="7521179607" /> */}
            <div className="p-4 rounded bg-white shadow-sm mt-3">
                <Content>
                    <h2>Semua Kategori</h2>
                    <ul>
                        {categories.map((loker) => (
                            <li>
                                <Link
                                    className="text-decoration-none hover:text-green-400 font-bold text-slate-600"
                                    href={route("category.show", loker.slug)}
                                    // href={`/?kategori=${loker.slug}`}
                                >
                                    {" "}
                                    {loker.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Content>
            </div>
        </div>
    );
};

export default Index;

Index.layout = (page) => <HomeLayout children={page} />;
