import classes from './Textarea.module.css';

const Textarea = ({ id, name, value, onChange, ...rest }) => {

  return (
    <textarea
      className={classes.textarea}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      {...rest}
    />
  )
}

export default Textarea;
