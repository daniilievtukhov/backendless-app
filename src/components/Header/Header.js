import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import tabs from "../../tabs.json";
import s from "./Header.module.scss";

const Header = () => {
    // const menuItems = useMemo(
    //     () => [
    //         { title: "Dummy Table", link: "/dummyTable" },
    //         { title: "Dummy Chart", link: "/dummyChart" },
    //         { title: "Dummy List", link: "/dummyList" },
    //     ],
    //     []
    // );
    function formatTitleForLink(title) {
        const words = title.split(" ");
        const formattedTitle = words
            .map((word, index) => {
                if (index === 0) {
                    return word.toLowerCase();
                } else {
                    return (
                        word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase()
                    );
                }
            })
            .join("");

        return formattedTitle;
    }

    const menuItems = tabs.map((tab) => ({
        title: tab.title,
        link: `/${formatTitleForLink(tab.title)}`,
    }));
    return (
        <>
            <header className={s.header}>
                <nav className={s.nav}>
                    {menuItems.map(({ title, link }, index) => (
                        <Link
                            to={link}
                            key={index}
                            className={({ isActive }) => {
                                return isActive ? s.active : "";
                            }}
                        >
                            {title}
                        </Link>
                    ))}
                </nav>
            </header>
        </>
    );
};
export default Header;
