import dayjs from 'dayjs';
import { Comment } from '../../types';

type RewiewPropsType = {
  rewiew: Comment;
}
export function Rewiew({rewiew}: RewiewPropsType): JSX.Element {
  const date = dayjs(rewiew.date).format('MMMM YYYY');

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={rewiew.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {rewiew.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rewiew.rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {rewiew.comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{date}</time>
      </div>
    </li>
  );
}


