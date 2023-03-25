import Content from "@/Layouts/Content";
import HomeLayout from "@/Layouts/HomeLayout";
import React from "react";

const Iklan = () => {
    return (
        <div>
            <Head>
                <title>Pasang Iklan</title>
                <link
                    rel="canonical"
                    href="https://lokersubang.com/pasang-iklan"
                />
                <meta name="keyword" content="pasang iklan loker" />
                <meta
                    name="description"
                    content="Pasang Iklan Loker di Lokersubang.com gratis tanpa dipungut biaya apapun"
                />
                <link rel="icon" href="/img/icon.ico" />
            </Head>
            <div className="p-4 rounded bg-white shadow-sm ">
                <Content>
                    <h1>Pasang Iklan Di Lokersubang.com</h1>

                    <p>
                        Pasang iklan lowongan kerja di Lokersubang.com gratis
                        tanpa dipungut biaya apapun. Dan apabila ada yang ingin
                        membagikan info loker subang bisa kontak langsung ke
                        media sosial kami atau melalui kontak WhatsApp.
                    </p>
                    <p>
                        Iklan yang ditampilkan akan dilihat oleh lebih dari
                        10.000 pengunjung tiap bulannnya.
                    </p>
                    <p>Ini akan membantu menemukan jobseeker yang dicari </p>
                </Content>
            </div>
        </div>
    );
};

export default Iklan;
Iklan.layout = (page) => <HomeLayout children={page} />;
