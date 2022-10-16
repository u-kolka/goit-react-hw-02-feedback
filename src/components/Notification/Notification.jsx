import css from "./Notification.module.css";

const Notification = ({ message }) => {
    return (
        <>
        <span className={css.notify__info}>{message}</span>
        <p>No feedback given</p>
        </>
    );
};

export default Notification;