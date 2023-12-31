import Ads from "@/Components/Ads";
import Content from "@/Layouts/Content";
import HomeLayout from "@/Layouts/HomeLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import moment from "moment/moment";
import "moment/locale/id";
import { IconUserEdit } from "@tabler/icons-react";
import { IconClock } from "@tabler/icons-react";

const Show = ({ article }) => {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    image: [article.image],
    datePublished: moment(article.created_at).format(),
    dateModified: moment(article.created_at).format(),
    author: [
      {
        "@type": "Person",
        name: "Dadan Nurmaulana",
        url: "https://web.facebook.com/dadannurmaulana",
      },
    ],
  };

  const job1 = {
    "@context": "https://schema.org",
    "@type": "JobPost",
    headline: article.title,
    description: article.body,
    image: [article.image],
    datePublished: article.created_at,
    dateModified: article.updated_at,
    author: [
      {
        "@type": "Person",
        name: "Dadan Nurmaulana",
        url: "https://web.facebook.com/dadannurmaulana",
      },
      {
        "@type": "Person",
        name: "Dadan Nurmaulana",
        url: "https://web.facebook.com/dadannurmaulana",
      },
    ],
  };

  const job2 = {
    "@context": "http://schema.org/",
    "@type": "JobPosting",
    title: article.title,
    description: article.body,
    url: `${article.slug}.html`,
    datePosted: article.created_at,
    validThrough: "2024-03-18T00:00",
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: article.company,
      sameAs: `https://lokersubang.com/${article.slug}.html`,
      logo: article.image,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: article.address,
        addressLocality: article.address,
        addressRegion: "Jawa Barat",
        postalCode: "41256",
        addressCountry: "Indonesia",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "IDR",
      value: {
        "@type": "QuantitativeValue",
        value: (() => {
          if (article.address === "Karawang") return "5000000";
          if (article.address === "Subang") return "1800000 - 4000000";
          if (article.address === "Purwakarta") return "2000000 - 4500000";
          if (article.address === "Bekasi") return "2000000 - 5000000";
          if (article.address === "Cikarang") return "2000000 - 5000000";
          if (article.address === "Bandung") return "2000000 - 4500000";
          if (article.address === "Indramayu") return "1800000 - 3500000";
          if (article.address === "Majalengka") return "2000000 - 3500000";
          if (article.address === "Cirebon") return "2000000 - 4000000";
          else return "2000000 - 4000000";
        })(),
        unitText: "MONTH",
      },
    },
  };

  const ratingData = {
    "@context": "https://schema.org/",
    "@type": "Book",
    name: "Artikel lokersubang.com",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "1728",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `https://lokersubang.com`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: article.category.name,
        item: `https://lokersubang.com/kategori/${article.category.slug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://lokersubang.com/${article.slug}.html`,
      },
    ],
  };

  return (
    <div>
      <Head>
        <title>{article.title}</title>
        {/* <link
                    rel="canonical"
                    href={`https://lokersubang.com/${article.slug}.html`}
                /> */}
        <meta name="keywords" content={article.title} />
        <meta name="description" content={article.description} />
        <link rel="icon" href="/img/icon.ico" />
        {/* <meta property="og:type" content="article" /> */}
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        {/* <meta property="og:url" content={article.slug} /> */}
        <meta property="og:image" content={article.image} />
      </Head>

      <div className="alert alert-warning" role="alert">
        <marquee>
          <i className="fas fa-bullhorn" /> Tahapan seleksi
          <strong> TIDAK DIPUNGUT BIAYA APAPUN !</strong>
        </marquee>
      </div>
      <div className="p-4 rounded bg-white shadow-sm ">
        <nav aria-label="breadcrumb ">
          <ol className="breadcrumb">
            <li className="breadcrumb-item text-sm">Home</li>
            <li className="breadcrumb-item text-sm">
              <Link href={`https://lokersubang.com/kategori/${article.category.slug}`}> {article.category.name}</Link>
            </li>
            <li className="breadcrumb-item active text-sm">{article.title}</li>
          </ol>
        </nav>
        {article.category_id == 9 || article.category_id == 8 ? (
          <>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(articleData),
              }}
            />
          </>
        ) : (
          <>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(job1),
              }}
            />
          </>
        )}
        <Content>
          <h1 className="mb-3">{article.title}</h1>
          <span className="text-sm pe-4">
            <IconClock className="inline block p-1" />
            {/*{moment(article.created_at).locale("id").fromNow()}*/}
            {moment(article.created_at).locale("id").format("DD MMMM YYYY")}
          </span>
          <span className="text-sm">
            <IconUserEdit className="inline-block py-1" /> Loker Subang
            {/* {article.user.name} */}
          </span>
          <div className="border-dashed border-b mb-3 mt-2 border-green-600" />
          <img src={article.image} alt={article.title} className="img-fluid mt-2 rounded" loading="lazy" />
          <div dangerouslySetInnerHTML={{ __html: article.body }} />{" "}
          {article.category_id == 9 || article.category_id == 8 ? (
            <div />
          ) : (
            <>
              <div className="p-3 mb-3 mt-3 text-white bg-danger rounded">
                <h2 className="text-white mt-0">Penting !!!</h2>
                <p>
                  Apabila dalam proses recuitment terdapat pemungutan biaya atau disarankan menggunakan jasa travel dan sebagainya. Di harapkan
                  teman-teman tidak mengikutinya dan abaikan saja.
                </p>
                <p>
                  Pihak lokersubang.com tidak menyarankan itu semua. Karena pada dasarnya, proses recruitment tidak memungut biaya sepeserpun. Kecuali
                  biaya akomodasi untuk mendatangi lokasi tes, maka itu tanggung jawab pribadi masing-masing.
                </p>
                <p>Dan apabila terjadi penipuan dll. lokersubang.com tidak akan bertanggung jawab.</p>
              </div>
            </>
          )}
          <div className="border-dotted border-b mt-2 border-green-600" />
          <div className="mt-3">
            <div className="d-flex align-items-center  my-3 bg-white rounded">
              <a href="#">
                <img className="me-3" loading="lazy" src="/img/icon.png" alt="lokersubang.com" width={70} />
              </a>
              <div className="lh-1">
                <h5 className="leading-normal mb-2">
                  <a href="https://web.facebook.com/dadannurmaulana" className="text-decoration-none">
                    {article.user.name}
                  </a>
                </h5>
                <span className="small text-muted lh-base">Berbagi informasi lowongan pekerjaan subang dan sekitarnya.</span>
              </div>
            </div>
            <div className="border-dotted border-b mt-2 border-green-600" />
          </div>
        </Content>
        {article.category_id == 9 || article.category_id == 8 ? (
          <>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(articleData),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(ratingData),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(breadcrumbData),
              }}
            />
          </>
        ) : (
          <>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(job2),
              }}
            />
            {/* <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify(ratingData),
                            }}
                        />
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify(breadcrumbData),
                            }}
                        /> */}
          </>
        )}
      </div>
    </div>
  );
};

export default Show;
Show.layout = (page) => <HomeLayout children={page} />;
