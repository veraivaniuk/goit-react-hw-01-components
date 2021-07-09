import s from "./FriendListItem.module.css";
import PropTypes from 'prop-types'; 

function FriendListItem ({ avatar, name, isOnline, id })  {
  return (<li key={id} className={s.item}>
              <span className={s.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }} ></span>
              <img className={s.avatar} src={avatar} alt="avatar" width="48" />
              <p className={s.name}>{name}</p>
          </li>)
}

export default FriendListItem;