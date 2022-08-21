import { Card, Container } from 'react-bootstrap'
import { MenuListType } from '../../Pages/Menus'

interface ICardProps{
    itemList:MenuListType
}

const MenuCardComp = ({itemList}:ICardProps) => {
  return (
    <Container style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",placeItems:"center"}} >
    {itemList.map(item=>{
        return <Card key={item.id} style={{width:"18rem"}} >
            <Card.Img variant="left" src={item.img} style={{width:"100%",height:"200px",objectFit:"cover"}} />
            <Card.Header style={{textTransform:"capitalize"}} className="bg-secondary text-white font-weight-bold" >{item.title}</Card.Header>
            <Card.Text  >{item.desc.length > 100 ? `${item.desc.substring(0,100)} ...` : item.desc}</Card.Text>
            <Card.Subtitle className="text-warning fs-4">${item.price}</Card.Subtitle>
        </Card>
    })}
    </Container>
  )
}

export default MenuCardComp;