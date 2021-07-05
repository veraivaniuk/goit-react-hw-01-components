import PropTypes from 'prop-types'; 

export default function Profile ({name, tag, location, avatar = "https://image.flaticon.com/icons/png/512/2609/2609282.png", stats}) {
    return <div className="profile">
    <div className="description">
      <img
        src={avatar}
        alt="Аватар пользователя"
        className="avatar"
      />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
  
    <ul className="stats">
      <li key = {5}>
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li key = {6}>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li key = {7}>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
}

Profile.prototype = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired, 
  location: PropTypes.string.isRequired, 
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
}
