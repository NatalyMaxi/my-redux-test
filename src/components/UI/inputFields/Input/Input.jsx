import classes from './Input.module.css';

const Input = ({ id, type, name, value, onChange, ...rest }) => {

  return (
    <input
      className={classes.input}
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      {...rest}
    />
  )
}

export default Input;
