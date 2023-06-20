import classes from './PostSearch.module.css';

const PostSearch = ({ value, onChange, placeholder, type }) => {

  return (
    <input
      className={classes.postSearch}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder} />
  )
}

export default PostSearch;
