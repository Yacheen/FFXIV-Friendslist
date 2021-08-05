import Typography from "@material-ui/core/Typography";
import React from "react";

export default function CharacterModel(props) {
    if (props.FFXIVData) {
        return (
            <div className="char-model-container">
                <img
                    className="char-model"
                    src={props.FFXIVData.Character.Portrait}
                    alt="character portrait"
                />
            </div>
        );
    } else {
        return null;
    }
}
