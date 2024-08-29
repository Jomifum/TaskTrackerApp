import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
    const tagStyle = {
        "Assistance for patient": { backgroundColor: "#fda821" },
        "Insurance": { backgroundColor: "#15d4c8" },
        "Medical Forms": { backgroundColor: "#ffd12c" },
        "Applications": { backgroundColor: "#4cdafc" },
        default: { backgroundColor: "#f9f9f9" },
    };

    return (
        <button
            type='button'
            className='tag'
            style={selected ? tagStyle[tagName] : tagStyle.default}
            onClick={() => selectTag(tagName)}>
            {tagName}
        </button>
    );
};

export default Tag;
