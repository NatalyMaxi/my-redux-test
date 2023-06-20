import classes from './MySelect.module.css';

const MySelect = ({ options, defaultValue, value, onChange }) => {


  return (
    <select
      className={classes.select}
      value={value}
      onChange={(evt) => onChange(evt.target.value)}
    >
      <option className={`${classes.option} ${classes.optionDisabled}`} disabled value=''>{defaultValue}</option>
      {
        options.map((option) =>
          <option className={classes.option} key={option.value} value={option.value}>{option.name}</option>
        )
      }
    </select>
  )
}

export default MySelect;
