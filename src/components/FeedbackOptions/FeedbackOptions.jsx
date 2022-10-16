import React from "react";
import css from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    options.map((option, index) => {
        return (<button className={css.feedback__btn} type="button" onClick={onLeaveFeedback} key={index}>{option}</button>)
    })
);

export default FeedbackOptions;