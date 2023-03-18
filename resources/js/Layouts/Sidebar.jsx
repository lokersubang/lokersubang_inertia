import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import Ads from "@/Components/Ads";
import React from "react";

const Sidebar = () => {
    const { list } = usePage().props;

    const { data, setData, get, reset, processing, errors } = useForm({
        search: "",
    });

    function submit(e) {
        e.preventDefault();
        get(route("home"));
    }

    return (
        <div>
            <div className="prose max-w-none">
                <div className="mb-3 p-3 bg-white rounded shadow-sm">
                    <Ads dataAdSlot="7521179607" />
                </div>
                <div className="mb-3 p-5 bg-info rounded shadow-sm">
                    <form onSubmit={submit}>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control rounded-lg border-gray-300"
                                placeholder="Cari lowongan"
                                value={data.search}
                                onChange={(e) =>
                                    setData("search", e.target.value)
                                }
                            />

                            <button
                                type="submit"
                                className="btn bg-dark text-white"
                            >
                                <i className="fa-solid fa-magnifying-glass mt-1"></i>
                            </button>
                        </div>
                    </form>
                </div>

                <div className="mb-3 p-3 bg-body rounded shadow-sm">
                    <h3 className="border-b pb-2 border-dashed  m-0 fw-bold">
                        Lowongan Terbaru
                    </h3>
                    <ul className="list-none">
                        {list.sidebar.map((item) => (
                            <li
                                className="text-relaxed list-disc"
                                key={item.id}
                            >
                                <Link
                                    as="a"
                                    href={route("post.show", item.slug)}
                                    className="text-decoration-none text-gray-700 hover:text-green-400"
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mb-3 p-3 bg-body rounded shadow-sm">
                    <h3 className="border-b pb-2 border-dashed  m-0 fw-bold">
                        Ikuti Kami
                    </h3>
                    <ul>
                        <li>
                            <a
                                href="https://www.facebook.com/websitelokersubang"
                                target="_blank"
                                className="nav-link text-muted text-decoration-none"
                            >
                                <i className="fa-brands text-2xl fa-facebook pr-3"></i>{" "}
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/lokersubang_com/"
                                target="_blank"
                                className="nav-link text-muted text-decoration-none"
                            >
                                <i className="fa-brands text-2xl fa-instagram pr-3"></i>{" "}
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://t.me/loker_subang"
                                target="_blank"
                                className="nav-link text-muted text-decoration-none"
                            >
                                <i className="fa-brands text-2xl fa-telegram pr-3"></i>{" "}
                                Telegram
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/loker_subang"
                                target="_blank"
                                className="nav-link text-muted text-decoration-none"
                            >
                                <i className="fa-brands text-2xl fa-twitter pr-3"></i>{" "}
                                Twitter
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.linkedin.com/in/loker-subang/"
                                target="_blank"
                                className="nav-link text-muted text-decoration-none"
                            >
                                <i className="fa-brands text-2xl fa-linkedin pr-3"></i>{" "}
                                Linkedin
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
