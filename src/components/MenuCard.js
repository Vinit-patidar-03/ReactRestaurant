/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Menu from './MenuAPI'
import Items from './Items';
import Navbar from './Navbar';

const MenuCard = () => {
    const uniqueList = [ ...new Set(Menu.map((elem)=>
        {
            return elem.category
        })),"All"]

    const [MenuItem,setMenuItem] = useState(Menu);
    const [Timings,setTimings] = useState(uniqueList);

    const filterItems = (category)=>
    {
        if(category==="All")
        {
            return setMenuItem(Menu);
        }
       let Items = Menu.filter((elem)=>
        {
           return elem.category === category
        })
        setMenuItem(Items);
    }
  return (
    <>
    <Navbar Timings={Timings} filterItems={filterItems}/>
    <div className='d-flex justify-content-center my-5 flex-wrap'>
    {MenuItem.map((elem)=>
        {
            return (<Items image={elem.image} name={elem.name} desc={elem.description} price={elem.price} key={elem.id}/>)
        })
    }
    </div>
    </>
  )
}

export default MenuCard