import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import operations from '../../redux/dashboard/dashboard-operations';
import selectors from '../../redux/dashboard/dasboard-selectors';
import s from './DashboardList.module.scss';
import sorter from '../DashboardList/sorter';
import DashboardListItem from '../DashboardListItem/DashboardListItem';
import MenuDone from '../MenuDone/MenuDone';
import EmptyTodos from '../EmptyTodos/EmptyTodods';
import Card from '../Card/Card';
// import Button from '../Button/Button';
import CardDone from '../CardDone/CardDone';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import transition from './anim.module.scss';

const DashboardList = () => {
  const dispatch = useDispatch();

  const isVisible = useSelector(selectors.isVisibleCard);

  useEffect(() => {
    dispatch(operations.fetchCards());
  }, [dispatch]);
  const cards = useSelector(selectors.getAllCards);

  const todayList = [];
  const tomorrowList = [];
  const doneList = [];
  const challengeList = [];

  sorter(cards, todayList, tomorrowList, doneList, challengeList);

  return (
    <>
      <main className={s.todoListMain}>
        <div className={s.todoListDiv}>
          <CSSTransition
            in={
              todayList.length === 0 &&
              tomorrowList.length === 0 &&
              challengeList.length === 0 &&
              !isVisible
            }
            appear
            timeout={300}
            classNames={s}
            unmountOnExit
          >
            <EmptyTodos />
          </CSSTransition>
          <CSSTransition
            appear
            in={todayList.length > 0 || isVisible}
            timeout={300}
            classNames={transition}
            unmountOnExit
          >
            <div>
              <p className={s.todoListTitle}>TODAY</p>
              <TransitionGroup component="ul" className={s.todoList}>
                {isVisible && (
                  <CSSTransition
                    timeout={300}
                    classNames={s}
                    unmountOnExit
                    key="card"
                  >
                    <li>
                      <Card day="Today" />
                    </li>
                  </CSSTransition>
                )}
                {todayList.length > 0 &&
                  todayList.map(
                    ({ title, _id, time, category, difficulty, challenge }) => (
                      <CSSTransition
                        timeout={300}
                        classNames={s}
                        unmountOnExit
                        key={_id}
                      >
                        <li className={s.itemTodo}>
                          <CardDone id={_id} titleTodo={title} />
                          {_id === todayList[0]._id ? (
                            <DashboardListItem
                              category={category}
                              difficulty={difficulty}
                              title={title}
                              time={time}
                              id={_id}
                              day="Today"
                              challengeStyle={challenge}
                              hot="true"
                            />
                          ) : (
                            <DashboardListItem
                              category={category}
                              difficulty={difficulty}
                              title={title}
                              time={time}
                              id={_id}
                              day="Today"
                              challengeStyle={challenge}
                            />
                          )}
                        </li>
                      </CSSTransition>
                    ),
                  )}
              </TransitionGroup>
            </div>
          </CSSTransition>
          <CSSTransition
            appear
            in={tomorrowList.length > 0}
            timeout={300}
            classNames={s}
            unmountOnExit
          >
            <div>
              <p className={s.todoListTitle}>TOMORROW</p>
              <TransitionGroup component="ul" className={s.todoList}>
                {tomorrowList.map(
                  ({ title, _id, time, category, difficulty, challenge }) => (
                    <CSSTransition
                      timeout={300}
                      classNames={s}
                      unmountOnExit
                      key={_id}
                    >
                      <li className={s.itemTodo}>
                        <CardDone id={_id} titleTodo={title} />
                        <DashboardListItem
                          category={category}
                          difficulty={difficulty}
                          title={title}
                          time={time}
                          id={_id}
                          day="Tomorrow"
                          challengeStyle={challenge}
                        />
                      </li>
                    </CSSTransition>
                  ),
                )}
              </TransitionGroup>
            </div>
          </CSSTransition>
          <CSSTransition
            appear
            in={challengeList.length > 0}
            timeout={300}
            classNames={s}
            unmountOnExit
          >
            <div>
              <p className={s.todoListTitle}>CHALLENGES</p>
              <TransitionGroup component="ul" className={s.todoList}>
                {challengeList.map(
                  ({ title, _id, time, category, difficulty, challenge }) => (
                    <CSSTransition
                      timeout={300}
                      classNames={s}
                      unmountOnExit
                      key={_id}
                    >
                      <li className={s.itemTodo}>
                        <CardDone id={_id} titleTodo={title} />
                        <DashboardListItem
                          category={category}
                          difficulty={difficulty}
                          title={title}
                          time={time}
                          id={_id}
                          day="By"
                          challengeStyle={challenge}
                        />
                      </li>
                    </CSSTransition>
                  ),
                )}
              </TransitionGroup>
            </div>
          </CSSTransition>
          <MenuDone todos={doneList} />
        </div>
      </main>
    </>
  );
};

export default DashboardList;
