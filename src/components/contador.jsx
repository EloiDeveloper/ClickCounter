import React from "react";
import "../css/styles.css";

function Contador({ numClicks }) {
    return(
        <div className="contador">
            {numClicks + " €"}
        </div>
    );
}

export default Contador;