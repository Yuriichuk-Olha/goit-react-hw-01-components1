import PropTypes from 'prop-types';
import FriendList from "./FriendList";
import css from './Friends.module.css';


export default function FriendListItem({friends}){
    return (
        <div>
            <ul className={css.section}>
            {friends.map(friend=>(
                <li key={friend.id}>

                    <FriendList
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                    name={friend.name}
                    />
                </li>
            ))}
            </ul>
        </div>
    )
}
FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
};