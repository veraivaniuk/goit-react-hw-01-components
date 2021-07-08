import s from "./FriendListItem.module.css";
import PropTypes from 'prop-types'; 

export default function FriendListItem ({ avatar, name, isOnline, id })  {
  return (<li key={id} className={s.item}>
              <span className={s.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }} ></span>
              <img className={s.avatar} src={avatar} alt="avatar" width="48" />
              <p className={s.name}>{name}</p>
          </li>)
}



FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired, 
  isOnline: PropTypes.bool.isRequired, 
  id: PropTypes.number.isRequired,
}