import Typography from "@material-ui/core/Typography";
import React from "react";

export default function CharacterModel({ FFXIVData, onHome }) {
    if (FFXIVData && onHome == false) {
        return (
            <div className="char-model-container">
                <img
                    className="char-model"
                    src={FFXIVData.Character.Portrait}
                    alt="character portrait"
                />
            </div>
        );
    } else {
        return null;
    }
}
