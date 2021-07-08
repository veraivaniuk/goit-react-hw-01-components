import s from "./FriendList.module.css";
import FriendListItem from "./friendListItem/FriendListItem"

export default function FriendList ({friends})  {
    return (<ul className={s.list}>           
            {friends.map(({id, avatar, name, isOnline}) => 
                    (<FriendListItem 
                        key={id} 
                        avatar={avatar} 
                        name={name} 
                        isOnline={isOnline}
                    />)
                )
            }
        </ul>);
}


