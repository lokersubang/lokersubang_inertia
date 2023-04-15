import Ads from "@/Components/Ads";
import Jumbotron from "@/Components/Jumbotron";
import Pagination from "@/Components/Pagination";
import HomeLayout from "@/Layouts/HomeLayout";
import Post from "@/Layouts/Post";
import { Head } from "@inertiajs/inertia-react";

const Index = (props) => {
    const { data: lokers, links, from } = props.lokers;
    const { title } = props;
    return (
        <div>
            <Head>
                <title>
                    Loker Subang - Informasi Lowongan Kerja Subang dan
                    Sekitarnya
                </title>
                <meta
                    name="keywords"
                    content="loker subang, loker subang 2023, info loker subang, loker karawang, loker purwakarta, loker indramayu, loker majalengka, loker bandung, lowongan kerja subang"
                />
                <meta
                    name="description"
                    content="Informasi lowongan kerja Subang dan Sekitarnya. Info loker subang terbaru dan terupdate setiap hari Daerah Subang, Purwakarta, Karawang, Majalengka, Indramayu, Cikarang, Bekasi dan Bandung"
                />
                <link rel="canonical" href="https://lokersubang.com/" />
                <meta name="author" content="Dadan Nurmaulana" />
                <link rel="icon" href="/img/icon.ico" />
                <meta property="og:type" content="article" />
                <meta
                    property="og:description"
                    content="Informasi lowongan kerja Subang dan Sekitarnya. Info loker subang terbaru dan terupdate setiap hari"
                />
                <meta
                    property="og:title"
                    content="Loker Subang - Informasi Lowongan Kerja Subang dan
                    Sekitarnya"
                />
                <meta property="og:url" content="https:/lokersubang.com" />
                <meta property="og:image" content="/img/icon.png" />
            </Head>
            {/* <Ads dataAdSlot="7521179607" /> */}
            <Jumbotron />
            <div className=" mt-3 mb-3">
                <div className="prose max-w-none text-lg text-blue-900">
                    <h3 className="border-b pb-2 border-dashed  m-0 fw-bold">
                        Loker Terbaru
                    </h3>
                </div>
                <div className="row mb-3">
                    {lokers.length !== 0 ? (
                        lokers.map((loker) => (
                            <div className="col-md-6" key={loker.id}>
                                <Post
                                    title={loker.title}
                                    // img={loker.image}
                                    img={loker.image ?? "/img/404.jpg"}
                                    time={loker.created_at}
                                    slug={loker.slug}
                                />
                            </div>
                        ))
                    ) : (
                        <div className="col-md-6 mt-3">
                            <div className="alert alert-warning">
                                <h1 className="font-bold">
                                    Lowongan Tidak Ditemukan !
                                </h1>
                            </div>
                        </div>
                    )}
                </div>
                <Pagination links={links} />
            </div>
        </div>
    );
};

export default Index;

Index.layout = (page) => <HomeLayout children={page} />;
