import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { onClickBtnCreate } from '../../redux/dashboard/dashboard-actions';
import ButtonOpenModal from '../ButtonOpenModal/ButtonOpenModal';
import Modal from '../Modal/Modal';
import Level from '../Level/Level';
import Button from '../Button/Button';
import InputTodo from '../InputTodo/InputTodo';
import DateAndTimePickers from '../DateAndTimePickers/DateAndTimePickers';
import Category from '../Category/Category';
import GroupButtonSaveClearDone from '../GroupButtonSaveClearDone/GroupButtonSaveClearDone';
import ModalWindow from '../ModalWindow/ModalWindow';
import TaskEditor from '../TaskEditor/TaskEditor';
import toggleModal from './toggleModal';
import handleChangeState from './handleChangeState';
import s from './Card.module.scss';

const LIST_CATEGORY = [
   'stuff',
   'family',
   'health',
   'learning',
   'leisure',
   'work',
];

const LIST_LEVEL = ['easy', 'normal', 'hard'];

const INITIAL_STATE = {
   category: LIST_CATEGORY[0],
   difficulty: LIST_LEVEL[0],
   time: null,
   title: null,
   challenge: false,
};

const Card = ({
   id,
   isEdit,
   editCategory,
   editDifficulty,
   editTime,
   editTitle,
   changeEdit,
   isChallenge,
   day,
   dayName,
}) => {
   const [showModalCategory, setShowModalCategory] = useState(false);
   const [showModalLevel, setShowModalLevel] = useState(false);
   const [showModalDelete, setShowModalDelete] = useState(false);
   const [category, setСategory] = useState(INITIAL_STATE.category);
   const [difficulty, setDifficulty] = useState(INITIAL_STATE.difficulty);
   const [time, setTime] = useState(INITIAL_STATE.time);
   const [title, setTitle] = useState(INITIAL_STATE.title);
   const [challenge, setChallenge] = useState(INITIAL_STATE.challenge);

   const dispatch = useDispatch();

   useEffect(() => {
      if (isEdit) {
         setСategory(editCategory);
         setDifficulty(editDifficulty);
         setTime(editTime);
         setTitle(editTitle);
         setChallenge(isChallenge);
      }
   }, [editCategory, editDifficulty, editTime, editTitle, isEdit, isChallenge]);

   const cancelСhanges = () => dispatch(onClickBtnCreate(false));

   return (
      <div className={s.card} id="template">
         <div
            className={`${s.group} ${challenge && s.challenge
               }`}
         >
            <div className={s.top}>
               <div className="button">
                  <ButtonOpenModal
                     type="difficulty"
                     title={difficulty}
                     onClick={() => toggleModal('difficulty', setShowModalLevel)}
                     isEdit={true}
                  >
                     {showModalLevel && (
                        <Modal
                           type="level"
                           isChallenge={challenge}
                           onClose={() => toggleModal('difficulty', setShowModalLevel)}
                        >
                           <Level
                              isChallenge={challenge}
                              items={LIST_LEVEL}
                              handleClick={handleChangeState}
                              cb={setDifficulty}
                           />
                        </Modal>
                     )}
                  </ButtonOpenModal>
               </div>

               <div className="star">
                  {challenge ? (
                     <Button
                        onClick={() =>
                           handleChangeState('challenge', false, setChallenge)
                        }
                        content="icon-trophy"
                        type="button"
                     />
                  ) : (
                     <Button
                        onClick={() =>
                           handleChangeState('challenge', true, setChallenge)
                        }
                        content="icon-Vector"
                        type="button"
                     />
                  )}
               </div>
            </div>

            <div className={s.middlle}>
               <InputTodo
                  isEdit={isEdit}
                  title={isEdit && editTitle}
                  getInputText={handleChangeState}
                  cb={setTitle}
                  isChallenge={challenge}
               />
               <DateAndTimePickers
                  isChallenge={challenge}
                  time={editTime}
                  isEdit={isEdit}
                  getDate={handleChangeState}
                  cb={setTime}
                  day={day}
                  dayName={dayName}
               />
            </div>

            <div className={s.bottom}>
               <div
                  className={`${s.buttonBgc} ${s[category]}`}
               >
                  <ButtonOpenModal
                     type="category"
                     title={category}
                     onClick={() => toggleModal('category', setShowModalCategory)}
                     isEdit={true}
                  >
                     {showModalCategory && (
                        <Modal
                           isChallenge={challenge}
                           onClose={() => toggleModal('category', setShowModalCategory)}
                           type="category"
                        >
                           <Category
                              isChallenge={challenge}
                              items={LIST_CATEGORY}
                              handleClick={handleChangeState}
                              cb={setСategory}
                           />
                        </Modal>
                     )}
                  </ButtonOpenModal>
               </div>

               <div className={s.buttonCroup}>
                  <CSSTransition
                     in={true}
                     appear
                     timeout={300}
                     classNames={s}
                     unmountOnExit
                  >
                     <GroupButtonSaveClearDone
                        isCreate={!isEdit && true}
                        isEdit={isEdit && true}
                        category={category}
                        difficulty={difficulty}
                        title={title}
                        time={time}
                        challenge={challenge}
                        cancelСhanges={cancelСhanges}
                        id={id}
                        toggleModalDelete={() =>
                           toggleModal('delete', setShowModalDelete)
                        }
                        changeEdit={changeEdit}
                     />
                  </CSSTransition>
               </div>
            </div>
            {showModalDelete && (
               <Modal
                  onClose={() => toggleModal('delete', setShowModalDelete)}
                  type="delete"
               >
                  <ModalWindow
                     id={id}
                     question={
                        !challenge ? 'Delete this Quest?' : 'Delete this Challenge?'
                     }
                     isOpened={() => toggleModal('delete', setShowModalDelete)}
                  />
               </Modal>
            )}
         </div>
      </div>
   );
};

export default Card;



/*
export default function Challenge({ handleClickCreate }) {

   return (
      <div className={s.card}>
         <div className={s.level}>
            <ul>
               <li>
                  Easy
               </li>
               <li>
                  Normal
               </li>
               <li>
                  Hard
               </li>
            </ul>
            <img src="" alt="star" />
         </div>
         <div className={s.task}>
            <p>Create New Quest</p>
            <TaskEditor />
            <p>Today</p>
         </div>
         <div className={s.bottom}>
            <div className={s.group}>group</div>
            <div className={s.clear}>x</div>
            <div className={s.start}>START</div>
         </div>
      </div>
   )
}*/