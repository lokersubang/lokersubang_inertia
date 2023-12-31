import Content from "@/Layouts/Content";
import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/inertia-react";

const Contact = () => {
    return (
        <div>
            <Head>
                <title>Contact</title>

                <link rel="canonical" href="https://lokersubang.com/contact" />
                <meta name="keywords" content="Contact" />
                <meta
                    name="description"
                    content="Untuk menghubungi kontak loker subang silahkan melalui Email atau Nomor Whatasapp"
                />
                <link rel="icon" href="/img/icon.ico" />
            </Head>
            <div className="p-4 rounded bg-white shadow-sm">
                <Content>
                    <h1>Contact</h1>
                    <p>
                        Untuk informasi tentang lokersubang.com bisa menghubungi
                        via
                        <b> Email</b> atau <b>Nomor WhatsApp</b> Berikut :
                    </p>
                    <ul>
                        <li>redaksilokersubang@gmail.com</li>
                        <li>085814962075</li>
                    </ul>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15862.435301564687!2d107.7008188!3d-6.3150062!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c5a13606d7ac9d2!2slokersubang.com!5e0!3m2!1sid!2sid!4v1672285743099!5m2!1sid!2sid"
                        width={400}
                        height={300}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="img-fluid"
                    />
                </Content>
            </div>
        </div>
    );
};

export default Contact;
Contact.layout = (page) => <HomeLayout children={page} />;
