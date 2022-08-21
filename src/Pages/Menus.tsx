// Bootstrap
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Container } from "react-bootstrap";
import MenuCardComp from "../components/menus/MenuCardComp";

// Menu Data
import menu from "../utils/Menus/menus";
import { useState } from 'react';

// Button List

const ButtonList  = [
    {id:1,title:"All",variant:"warning"},
    {id:2,title:"Breakfast",variant:"warning"},
    {id:3,title:"Lunch",variant:"warning"},
    {id:4,title:"Shakes",variant:"warning"},
]
export type MenuListType = typeof menu;


const Menus = () => {
    const [menuList,setMenuList]=useState(menu as MenuListType);
    const handleType=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        const {name} = e.currentTarget;

        if(name.toLowerCase()==="all"){
            setMenuList(menu);
            return;
        }

        const filterMenu=menu.filter(item=>item.category.toLowerCase() === name.toLowerCase());
        setMenuList(filterMenu);
        
    }
  return (
    <Container className="text-center" >
        <h1>Our Menus</h1>
        <ButtonGroup className="gap-3 mb-5" aria-label="Basic example">
            {ButtonList.map(button=>{
                return <Button key={button.id} name={button.title} onClick={handleType} variant={button.variant} >{button.title}</Button>
            })}
        </ButtonGroup>

        <MenuCardComp itemList={menuList} />
    </Container>
  )
}

export default Menus