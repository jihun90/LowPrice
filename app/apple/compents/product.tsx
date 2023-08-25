

type prop = { name : string, price : number }

export default function Product(prop : prop)
{
    return (
    <ul>
        <li>{prop.name}</li>
        <li>{prop.price}</li>
    </ul>)
}