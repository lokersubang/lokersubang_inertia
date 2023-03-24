import { Link } from "@inertiajs/inertia-react";
import moment from "moment/moment";
import "moment/locale/id";
import React from "react";

export default function Post(props) {
    return (
        <div>
            <div className="d-flex text-muted pt-3">
                <Link href={route("post.show", props.slug)} className="mr-2">
                    <img
                        src={props.img}
                        alt={props.title}
                        width={121}
                        height={20}
                        loading="lazy"
                        className="bd-placeholder-img flex-shrink-0 me-2 rounded shadow-sm p-2 object-center w-30 h-30"
                    />
                </Link>

                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div className="d-flex justify-content-between mt-2">
                        <Link
                            href={route("post.show", props.slug)}
                            className="text-slate-900 hover:text-green-400"
                        >
                            <strong className="text-gray-dark ">
                                {/* <div className="text-success">subang</div> */}
                                <div className="d-block mt-1 leading-relaxed">
                                    {props.title}
                                </div>
                            </strong>
                        </Link>
                    </div>
                    <span className="d-block mt-1">
                        {/* <small>{moment(props.time).locale("id").fromNow()}</small>*/}
                        <small>
                            {moment(props.time)
                                .locale("id")
                                .format("DD MMMM YYYY")}{" "}
                            by{" "}
                            <Link
                                href="https://lokersubang.com"
                                className="text-decoration-none text-primary"
                            >
                                Loker Subang
                            </Link>
                        </small>
                    </span>
                </div>
            </div>
        </div>
    );
}
