import PropTypes from 'prop-types';
import Profile from "./Profile"

export default function ProfileUser({users}) {
    return (
    <div>
        {users.map(user=>(
            <li key={user.username}>
        
        <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
            followers={user.followers}
            views={user.views}
            likes={user.likes}
        />
        </li>
        )
        )}
        
    </div>
    )
}

ProfileUser.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
        }),
    ),
};