import s from "./CardList.module.scss";

export default function CardList({ cards }) {
  return (
    <>
      {cards &&
        cards.map((card) => {
          const { _id, title, difficulty, date, time, status, type } = card;

          return (
            <li className={s.container} key={_id}>
              <div className={s.difficulty}>{difficulty}</div>
              <div className={s.status}>{status}</div>
              <div className={s.title}>{title}</div>
              <div className={s.date}>{date}</div>
              <div className={s.time}>{time}</div>
              <div className={s.status}>{status}</div>
              <div className={s.type}>{type}</div>
            </li>
          );
        })}
    </>
  );
}
