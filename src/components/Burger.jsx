import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

export default function Burger({ sidebarToggled }) {
    return (
        <>
            {sidebarToggled === "sidebarToggled" ? (
                <CloseIcon fontSize="large" />
            ) : (
                <MenuIcon fontSize="large" />
            )}
        </>
    );
}
