export default function MyCard(props) {
    return (
        <div>
            <h1>{props.data.Name}</h1>
            <h2>{props.data.City}</h2>
        </div>
    )
}