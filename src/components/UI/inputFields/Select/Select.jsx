import classes from './Select.module.css';

const Select = ({ children, id, value, onChange, ...rest }) => {

  return (
    <select
      className={classes.select}
      id={id}
      value={value}
      onChange={onChange}
      {...rest}
    >
      {children}
    </select>
  )
}

export default Select;
