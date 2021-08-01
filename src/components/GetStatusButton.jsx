import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";

export default function GetStatusButton({
    selectedIndex,
    setFFXIVData,
    selectedButton,
    setSelectedButton,
}) {
    const [isLoading, setIsLoading] = useState(false);

    const fetchFFXIVApi = async () => {
        setIsLoading(true);
        setSelectedButton(true);
        const response = await fetch(
            `https://xivapi.com/character/${selectedIndex}?extended=1`
        );
        const data = await response.json();

        setFFXIVData(data);
        setIsLoading(false);
    };

    return (
        <div className="status-button-container">
            {/* find out how to have selectedIndex not be undefined. its giving me undefined for some reason */}
            <Button
                disabled={selectedButton}
                onClick={fetchFFXIVApi}
                size="large"
                variant="contained"
                color="secondary"
                className="status-button"
            >
                <SearchIcon fontSize="large" />
                {isLoading ? <>Loading... </> : <>View Profile </>}
            </Button>
        </div>
    );
}
