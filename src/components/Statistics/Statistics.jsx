import React from "react";
import css from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
    <>
        <ul className={css.statistics}>
            <li className={css.statistics__item}>
                <p>Good: {good}</p>
            </li>
            <li className={css.statistics__item}>
                <p>Neutral: {neutral}</p>
            </li>
            <li className={css.statistics__item}>
                <p>Bad: {bad}</p>
            </li>
            <li className={css.statistics__item}>
                <p>Total: {total}</p>
            </li>
            <li className={css.statistics__item}>
                <p>Positive feedback: {positivePercentage}%</p>
            </li>
        </ul>
    </>)
}

export default Statistics;