
import React from 'react'
import heart from '../../assets/Heart1.png'

function PokemonDescription({id,name,image,type,favorites,showHeartDescr,setShowHeartDescr,allDescr}) {

    
  
  function addOrDeleteFavor(params) {
    if(params) {
      favorites((currentList)=> [...currentList , {id: id ,name: name, image: image, type:type , favor: true}]);
      setShowHeartDescr(!params)
    } else {
      const todos = JSON.parse(localStorage.getItem('poki'));
      
      todos.forEach((item,index) => {
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
       <div className = "view-description">
        <div className = "view-description__name">{name}</div> 
        <div className = "view-description__image"><img src={image} alt="" /></div>
        <div className = "view-description__type">Class:{type}</div>
        <div className = "view-description__heart" >
            
          <div onClick = {() => addOrDeleteFavor(showHeartDescr) }>
            {<img className ={allDescr.favor ? "view-description__heart--active":"view-description__heart--noactive" } src={heart} alt="heart" onClick = {() => { allDescr.favor = true} }  />} 
          </div>
      
          </div>
       </div>
      </div>
    )
}

export default PokemonDescription
