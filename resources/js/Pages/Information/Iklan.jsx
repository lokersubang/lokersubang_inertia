import Content from "@/Layouts/Content";
import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/inertia-react";
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
                        Lokersubang.com merupakan situs yang menyediakan layanan
                        pasang iklan gratis untuk lowongan kerja di wilayah
                        Subang dan sekitarnya.
                    </p>

                    <p>
                        Dengan pasang iklan di Lokersubang.com, Anda dapat
                        memperluas jangkauan pemasaran lowongan kerja Anda
                        secara online, sehingga dapat lebih mudah menjangkau
                        kandidat potensial yang tepat dan sesuai dengan kriteria
                        yang dibutuhkan.
                    </p>

                    <p>
                        Untuk membuat iklan lowongan kerja di lokersubang.com
                        bisa kontak melalui <strong>Media Sosial</strong> atau{" "}
                        <strong>WhatsApp Kami.</strong>{" "}
                    </p>
                </Content>
            </div>
        </div>
    );
};

export default Iklan;
Iklan.layout = (page) => <HomeLayout children={page} />;
