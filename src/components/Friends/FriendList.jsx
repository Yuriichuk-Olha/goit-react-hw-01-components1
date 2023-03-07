import PropTypes from 'prop-types';
import css from './Friends.module.css';



export default function FriendList({avatar, name, isOnline}){
    return (
        <li className={css.item}>
        <span className={isOnline ? css.online :css.offline}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" height="48" />
        <p className={css.name}>{name}</p>
        </li>
    )
};

FriendList.propTypes = {
    friends:PropTypes.arrayOf(
        PropTypes.shape({
            isOnline:PropTypes.string.isRequired,
            avatar:PropTypes.string.isRequired,
            name:PropTypes.bool.isRequired
        
        })
    )
};