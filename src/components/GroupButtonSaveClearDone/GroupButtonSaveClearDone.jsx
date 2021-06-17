import style from './GroupButtonSaveClearDone.module.scss';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import operations from '../../redux/dashboard/dashboard-operations';
import { onClickBtnCreate } from '../../redux/dashboard/dashboard-actions';
import { editCard } from '../../redux/dashboard/dashboard-actions';
import getShowCardDone from '../CardDone/getShowCardDone';

export default function GroupButtonSaveClearDone({
  isCreate,
  isEdit,
  category,
  difficulty,
  title,
  time,
  cancelСhanges,
  id,
  toggleModalDelete,
  changeEdit,
  challenge,
}) {
  const state = { category, difficulty, title, time, challenge };

  const dispatch = useDispatch();

  const handleClickElementCreate = () => {
    const categoryToUpperCase = state.category.toUpperCase();
    const difficultyToUpperCase = state.difficulty.toUpperCase();

    dispatch(
      operations.addCard({
        ...state,
        category: categoryToUpperCase,
        difficulty: difficultyToUpperCase,
      }),
    );
    dispatch(onClickBtnCreate(false));
    dispatch(editCard(false));
  };

  const handleClickElementSave = e => {
    const categoryToUpperCase = state.category.toUpperCase();
    const difficultyToUpperCase = state.difficulty.toUpperCase();

    dispatch(
      operations.updateCard({
        ...state,
        id,
        category: categoryToUpperCase,
        difficulty: difficultyToUpperCase,
      }),
    );
    setTimeout(() => {
      changeEdit(false);
      dispatch(onClickBtnCreate(false));
      dispatch(editCard(false));
    }, 500);
  };

  return (
    <>
      {isCreate && (
        <div className={style.GroupButtonSaveClearDone__ButtonGroup}>
          <Button
            className={style.GroupButtonSaveClearDone__ButtonSvgClear}
            type="button"
            content="icon-clear"
            onClick={cancelСhanges}
            isActive={false}
          />
          <Button
            className={style.GroupButtonSaveClearDone__ButtonSvgCreate}
            type="button"
            content="create"
            onClick={handleClickElementCreate}
            isActive={true}
          />
        </div>
      )}
      {/* isEdit */}
      {isEdit && (
        <div className={style.GroupButtonSaveClearDone__ButtonGroup}>
          <Button
            type="button"
            content="icon-save"
            onClick={handleClickElementSave}
            isActive={false}
          />
          <Button
            type="button"
            content="icon-clear"
            onClick={toggleModalDelete}
          />
          <Button
            type="button"
            content="icon-done"
            onClick={() => getShowCardDone(id)}
            isActive={false}
          />
        </div>
      )}
    </>
  );
}
