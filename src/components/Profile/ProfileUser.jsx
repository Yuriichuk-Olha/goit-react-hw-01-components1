import Profile from "./Profile"

export default function ProfileUser({users}) {
    console.log(users);
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
