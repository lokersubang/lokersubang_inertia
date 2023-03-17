import Content from "@/Layouts/Content";
import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/inertia-react";

const About = () => {
    return (
        <div>
            <Head>
                <title>About</title>

       <link
                    rel="canonical"
                    href="https://lokersubang.com/about"
                />
                <meta name="keywords" content="About" />
                <meta name="description" content="Loker Subang adalah situs informasi lowongan kerja subang dimana setiap harinya selalu update Info loker subang terbaru dan terpercaya." />
                <link rel="icon" href="/img/icon.ico" />               
            </Head>
            <div className="p-4 rounded bg-white shadow-sm ">
                <Content>
                    <h1>About</h1>
<p>Loker Subang adalah situs informasi lowongan kerja subang dimana setiap harinya selalu update Info loker subang terbaru dan terpercaya.</p>
<p>Sumber informasi didapatkan dari beberapa referensi seperti situs resmi perusahaan, linkedin, jobstreet, instagram, dan media sosial lainnya.</p>
<p>Setiap postingan yang dibuat loker subang selalu melampirkan sumbernya. Sehingga teman-teman pencaker bisa lebih yakin dan bisa mendapatkan informasi lowongan kerja yang sebenarnya.</p>
<p>Selain itu, loker subang juga membagikan informasi lowongan kerja dari beberapa wilayah lainnya seperti Indramayu, Karawang, Cirebon, Purwakarta, Bandung, Majalengka, Bekasi dan kota lainnya. </p>
<p>Informasi lowongan kerja yang berasal dari selain wilayah Subang akan dikategorikan sebagai Lowongan Kerja Luar Kota.</p>
<p>Dan bagi siapa saja yang ingin membagikan informasi lowongan kerja atau ingin mengiklankan lowongan kerja bisa kontak admin yang tertera. </p>
<p>Membuat postingan di lokersubang.com tidak dipungut biaya apapun alias Gratis 100%. Buat perusahaan atau teman-teman yang ingin membagikan info loker subang bisa juga melalui media sosial kami. </p>




                    <p>
                        Berawal dari banyaknya website informasi lowongan kerja
                        yang memberikan informasi dari sumber tidak jelas.
                        Sehingga membuat para pencari kerja tidak bisa
                        mendapatkan informasi yang mereka harapkan.
                    </p>
                    <p>
                        Tidak sedikit juga banyak oknum yang mengatasnamakan
                        perusahaan untuk kepentingan bisnis. Sehingga banyak
                        para pencari kerja yang dirugikan.
                    </p>
                    <p>
                        Lokersubang.com hadir untuk membantu para pencari kerja
                        untuk bisa mendapatkan informasi lowongan pekerjaan yang
                        jelas dan dapat dipertanggungjawabkan sumbernya.{" "}
                    </p>
                    <p>
                        Maka dari itu harapan dari lokersubang.com adalah bisa
                        membantu para pencari kerja untuk mendapatkan pekerjaan
                        dan juga bisa mengurangi pengangguran terutama untuk
                        wilayah Kabupaten Subang dan Sekitarnya.
                    </p>
                    <strong>By Lokersubang.com</strong>
                </Content>
            </div>
        </div>
    );
};

export default About;

About.layout = (page) => <HomeLayout children={page} />;
