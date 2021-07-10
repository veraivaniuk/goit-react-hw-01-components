import s from './Profile.module.css'
import PropTypes from 'prop-types'; 

function Profile ({name, tag, location, avatar = "https://image.flaticon.com/icons/png/512/2609/2609282.png", stats}) {

    return <div className={s.profile}>
    <div>
      <img
        src={avatar}
        alt="Аватар пользователя"
        className={s.avatar}
      />
      <p className={s.name}>{name}</p>
      <p className={s.tag}>@{tag}</p>
      <p className={s.location}>{location}</p>
    </div>
  
    <ul className={s.stats}>
      <li key = {stats.followers} className={s.list}>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}> {stats.followers}</span>
      </li>
      <li key = {stats.views} className={s.list}>
        <span className={s.label}>Views</span>
        <span className={s.quantity}> {stats.views}</span>
      </li>
      <li key = {stats.likes} className={s.list}>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}> {stats.likes}</span>
      </li>
    </ul>
  </div>
}


Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired, 
  location: PropTypes.string.isRequired, 
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
}

export default Profile;
