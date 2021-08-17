
import React from 'react'
import heart from '../../assets/Heart1.png'

import {IPoki} from "../../interface";

export const PokemonDescription:React.FC<{
  id: number
  name: string
  image:string
  type: string
  ability: string
  abilityDescr:string
  favorites: (param:any) => void 
  showHeartDescr: boolean
  setShowHeartDescr: (param:boolean) => void
  allDescr: IPoki
  mobile: boolean
  setMobile:(param:boolean) => void


}> = ({id,name,image,type,ability,abilityDescr,favorites,showHeartDescr,setShowHeartDescr,allDescr,mobile,setMobile}) =>{

    
  
  function addOrDeleteFavor(params:boolean) {
    if(params) {
      favorites((currentList:[{}])=> [...currentList , {id: id ,name: name, image: image, type:type , favor: true}]);
      setShowHeartDescr(!params)
    } else {
      const todos = JSON.parse(localStorage.getItem('poki')!);
      
      todos.forEach((item:IPoki,index:number) => {
        if(item.id === id )  {
          todos.splice(index,1);
        }
      })
      favorites(todos);
      setShowHeartDescr(!params);
      allDescr.favor = false;
    } 
  }
 
  
    return (
      <div>
       <div className ={mobile? "view-description__mobile" : "view-description"}>
        <div className = "view-description__name">{name}</div> 
        <div className = "view-description__image"><img src={image} alt="" /></div>
        <div className = "view-description__type">Class:{type}</div>
        <div className = "view-description__ability">Ability: <span>{ability}</span></div>
        <div className = "view-description__abilityDescr"> {abilityDescr}</div>
       
        <div className = "view-description__heart" >

            
          <div onClick = {() => addOrDeleteFavor(showHeartDescr) }>
            {<img className ={allDescr.favor ? "view-description__heart--active":"view-description__heart--noactive" } src={heart} alt="heart" onClick = {() => { allDescr.favor = true} }  />} 
          </div>
          <div className = "view-description__back"><span onClick = {() => {setMobile(false)}}>Назад</span></div>
          </div>
       </div>
      
      </div>
    )
}

export default PokemonDescription
