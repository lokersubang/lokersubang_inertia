import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Footer() {
    const tahun = new Date().getFullYear();
    return (
        <div>
            <footer className="py-3 mb-5 mt-3">
                <ul className="nav justify-content-center border-b border-green-400 border-dashed pb-3 mb-3">
                    {/* <li className="nav-item">
                        <Link
                            href={route("disclaimer")}
                            className="nav-link text-decoration-none text-muted"
                            as="a"
                        >
                            Disclaimer
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            href={route("privacyPolicy")}
                            className="nav-link text-muted"
                            as="a"
                        >
                            Privacy Policy
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            href={route("termOfService")}
                            className="nav-link text-decoration-none text-muted"
                            as="a"
                        >
                            Term Of Service
                        </Link>
                    </li> */}
                </ul>
                <p className="text-center text-muted ">
                    &copy; {tahun} lokersubang.com
                </p>
            </footer>
        </div>
    );
}
