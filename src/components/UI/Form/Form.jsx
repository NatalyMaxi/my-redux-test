import classes from './Form.module.css';

const Form = ({ children, formTitle, formName }) => {
  return (
    <form className={classes.form} name={formName}>
      <h2 className={classes.formTitle}>{formTitle}</h2>
      {children}
    </form>
)
}

export default Form;
