import React from "react";
import "./listName.css";

export default function ListNames() {
    return (
        <div className="list-names">
            <h1> list names </h1>
            <ul>
                <li>
                    mohamed
                    <button>add</button>
                    <button>delete</button>
                </li>
            </ul>
        </div>
    );
}
