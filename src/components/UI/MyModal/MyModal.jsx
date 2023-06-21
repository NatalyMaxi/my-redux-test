import classes from './MyModal.module.css';

const MyModal = ({ children, visible, setVisible }) => {
  const modalClasses = [classes.myModal]
  const modalContentClasses = [classes.myModalContent]

  if (visible) {
    modalClasses.push(classes.active)
    modalContentClasses.push(classes.active)
  }

  return (
    <div
      className={modalClasses.join(' ')}
      onClick={() => setVisible(false)}>
      <div
        className={modalContentClasses.join(' ')}
        onClick={(evt) => evt.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default MyModal;
