import { Typography, Paper } from "@material-ui/core";
import React from "react";

export default function Stats(props) {
  const allowedAttributes = [
    "Vitality",
    "Strength",
    "Dexterity",
    "Intelligence",
    "Critical Hit",
    "Determination",
    "Direct Hit Rate",
    "Spell Speed",
    "Mind",
    "Piety",
    "Tenacity",
  ];
  if (props.FFXIVData) {
    //
    return (
      <Paper className="char-stats-content">
        <Typography className="char-stats-attributes">Attributes</Typography>
        <div className="char-stats-name-and-value-container">
          {Object.values(props.FFXIVData.Character.GearSet.Attributes).map(
            (attributeInfo, i) => {
              return (
                <div className="char-stats-name-and-value">
                  {allowedAttributes.forEach((allowedAttribute) => {
                    Object.values(attributeInfo).map((key, i) => {
                      if (key.Name == allowedAttribute) {
                        console.log(key.Name);
                        return (
                          <Typography className="char-stats-name">
                            {key.Name}
                          </Typography>
                        );
                      }
                      <Typography className="char-stats-value">
                        {attributeInfo.Value}
                      </Typography>;
                    });
                  })}
                </div>
              );
            }
          )}
        </div>
      </Paper>
    );
  } else {
    return (
      <div className="char-stats-content">
        <Typography variant="h3">No stats to show yet..</Typography>
      </div>
    );
  }
}
