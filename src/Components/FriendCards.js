import FriendCard from './FriendCard';

export default function FriendCards(props) {
    let friends = props.data
    return (
        friends.map(item => {
            return <FriendCard key={item.id} login={item.login} img={item.avatar_url} />
        })
    )
}