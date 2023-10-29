import React from "react";
import Header from "../Header/Header";
import s from "./NotFoundPage.module.scss";
import img from "./images/notfound.png";
import { Link } from "react-router-dom";

export function NotFoundPage() {
    return (
        <>
            <Header />
            <section className={s.notfound_block}>
                <div className={s.image}>
                    <img src={img} alt="404" />
                </div>
                <div className={s.text}>This page does not exist</div>
                <div className={s.btn_block}>
                    <Link to={"/backendless-app"}>
                        <button className={s.btn}>Go Home</button>
                    </Link>
                </div>
            </section>
        </>
    );
}
