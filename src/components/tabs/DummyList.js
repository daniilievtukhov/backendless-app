import React from "react";
import Header from "../Header/Header";
import tabs from "../../tabs.json";
import { Link } from "react-router-dom";
import s from "./Tabs.module.scss";

const DummyList = () => (
    <div className={s.container}>
        <Header />
        <table className={s.table}>
            <thead className={s.headers}>
                <tr>
                    <th className={s.headerCell}>ID</th>
                    <th className={s.headerCell}>Title</th>
                    <th className={s.headerCell}>Order</th>
                    <th className={s.headerCell}>Path</th>
                </tr>
            </thead>
            <tbody className={s.maintab}>
                {tabs[2].id === "dummyList" ? (
                    <tr key={tabs[2].id}>
                        <td className={s.cell}>{tabs[2].id}</td>
                        <td className={s.cell}>{tabs[2].title}</td>
                        <td className={s.cell}>{tabs[2].order}</td>
                        <td className={s.cell}>{tabs[2].path}</td>
                    </tr>
                ) : (
                    <tr>
                        <td colSpan="4" className={s.notExist}>
                            This table is not exist :(
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
        <div className={s.btn_block}>
            <Link to={"/backendless-app"}>
                <button className={s.btn}>Go Home</button>
            </Link>
        </div>
    </div>
);

export default DummyList;
