import style from './ModalWindow.module.scss';
import { useDispatch } from 'react-redux';
import operations from '../../redux/dashboard/dashboard-operations';
import Button from '../Button/Button';
import { editCard } from '../../redux/dashboard/dashboard-actions';

const ModalWindow = ({ id, isOpened, question }) => {
  const dispatch = useDispatch();

  const handleRemoveTask = async () => {
    await dispatch(operations.deleteTodo(id));
    dispatch(editCard(false));
  };

  return (
    <>
      <span className={`${style.content}`}>{question}</span>
      <div className={`${style.controls}`}>
        <Button
          onClick={isOpened}
          content="cancel"
          className={style.buttonCancel}
        />
        <Button
          onClick={handleRemoveTask}
          content="delete"
          className={style.buttonDelete}
        />
      </div>
    </>
  );
};

export default ModalWindow;
