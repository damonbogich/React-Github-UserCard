export default function FriendCard(props) {
    console.log(props, 'props from friendcard')
    return (
        <div>
            <h2>Login: {props.login}</h2>
            <img src={props.img}/>
        </div>
    )
}