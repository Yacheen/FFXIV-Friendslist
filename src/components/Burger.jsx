import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { gsap } from "gsap";
export default function Burger({}) {
    const [sidebarToggled, setSidebarToggled] = useState("sidebarUntoggled");

    const toggleNavBurger = () => {
        if (sidebarToggled === "sidebarToggled") {
            setSidebarToggled("sidebarUntoggled");
            gsap.to(".side-bar-container", {
                duration: 0.4,
                x: "-150%",
                ease: "in",
            });
        } else {
            setSidebarToggled("sidebarToggled");
            gsap.to(".side-bar-container", {
                duration: 0.4,
                x: "0%",
                ease: "in",
            });
        }
    };
    return (
        <div
            className={`${sidebarToggled} nav-burger`}
            onClick={() => toggleNavBurger()}
        >
            {sidebarToggled === "sidebarToggled" ? (
                <CloseIcon fontSize="large" />
            ) : (
                <MenuIcon fontSize="large" />
            )}
        </div>
    );
}
