export default function MyCard(props) {
    console.log(props, 'props from MyCard component')
    return (
        <div>
            <h1>{props.data.Name}</h1>
            <h2>{props.data.City}</h2>
        </div>
    )
}