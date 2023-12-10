import Jumbotron from "@/Components/Jumbotron";
import Pagination from "@/Components/Pagination";
import HomeLayout from "@/Layouts/HomeLayout";
import Post from "@/Layouts/Post";
import { Head } from "@inertiajs/inertia-react";
import moment from "moment/moment";
import "moment/locale/id";

const Index = (props) => {
  const { data: lokers, links, from } = props.lokers;
  const { title } = props;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://lokersubang.com",
      },
    ],
  };

  const siteLink = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://lokersubang.com/",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://lokersubang.com/?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div>
      <Head>
        <title>{`LOKER SUBANG - Lowongan Kerja Subang Terbaru ${moment().locale("id").format("DD MMMM YYYY")}`}</title>
        <meta
          name="keywords"
          content="loker subang, loker subang 2023, info loker subang, loker karawang, loker purwakarta, loker indramayu, loker majalengka, loker bandung, lowongan kerja subang"
        />
        <meta
          name="description"
          content="Loker Subang adalah website Informasi lowongan kerja Subang dan Sekitarnya. Info loker subang 2023 terbaru dan terupdate setiap hari Daerah Subang, Purwakarta, Karawang, Majalengka, Indramayu, Cikarang, Bekasi dan Bandung"
        />
        {/* <link rel="canonical" href="https://lokersubang.com/" /> */}
        {/* <meta name="author" content="Dadan Nurmaulana" /> */}
        <link rel="icon" href="/img/icon.ico" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Loker Subang adalah website Informasi lowongan kerja Subang dan Sekitarnya. Info loker subang 2023 terbaru dan terupdate setiap hari Daerah Subang, Purwakarta, Karawang, Majalengka, Indramayu, Cikarang, Bekasi dan Bandung"
        />
        <meta property="og:title" content={`LOKER SUBANG - Lowongan Kerja Subang Terbaru ${moment().locale("id").format("DD MMMM YYYY")}`} />
        {/* <meta property="og:url" content="https:/lokersubang.com" /> */}
        <meta property="og:image" content="https://lokersubang.com/storage/photos/1/logo2.png" />
      </Head>
      <Jumbotron />
      <div className="mt-3 mb-3">
        <div className="prose max-w-none text-lg text-blue-900">
          <h3 className="border-b pb-2 border-dashed  m-0 fw-bold">Loker Terbaru</h3>
        </div>

        {/* Schema Sitelink */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteLink),
          }}
        />
        {/* Schema Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumb),
          }}
        />

        <div className="row mb-3">
          {lokers.length !== 0 ? (
            lokers.map((loker) => (
              <div className="col-md-6" key={loker.id}>
                <Post title={loker.title} img={loker.image ?? "/img/404.jpg"} time={loker.created_at} slug={loker.slug} />
              </div>
            ))
          ) : (
            <div className="col-md-6 mt-3">
              <div className="alert alert-warning">
                <h1 className="font-bold">Lowongan Tidak Ditemukan !</h1>
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
