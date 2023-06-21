import classes from './ButtonSubmit.module.css';

const ButtonSubmit = ({ children, type, onClick, disabled, ...rest }) => {

  return (
    <button
      className={disabled ? `${classes.button} ${classes.buttonDisabled}` : `${classes.button} ${classes.btn}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}

export default ButtonSubmit;
