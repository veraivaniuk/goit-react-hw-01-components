
import PropTypes from 'prop-types'; 

export default function FriendListItem ({ avatar, name, isOnline, id })  {
  return (<li key={id} className="item">
              <span className="status"></span>
              <img className="avatar" src={avatar} alt="avatar" width="48" />
              <p className="name">{name}</p>
          </li>)
           }



FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired, 
  isOnline: PropTypes.bool.isRequired, 
  id: PropTypes.number.isRequired,
}