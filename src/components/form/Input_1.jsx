import styles from './Input_1.module.css';

function Input({ type, text, name, placeholder, value, handleOnChange }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input
                maxLength="10"
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value} required
            />
        </div>
    )
}

export default Input