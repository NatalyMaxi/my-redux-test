import classes from './Label.module.css';

const Label = ({ children, htmlFor, ...rest }) => {

  return (
    <label
      className={classes.label}
      htmlFor={htmlFor}
      {...rest}
    >
      {children}
    </label>
  )
}

export default Label;
