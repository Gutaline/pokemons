
import React from 'react'
import heart from '../../assets/Heart1.png'

function PokemonDescription({id,name,image,type,favorites,heartVisible,showHeartDescr,setShowHeartDescr,allDescr}) {
 function ApiOrlocal(params) {
   if(params) {

       return <div className = "view-description">
        <div className = "view-description__name">{name}</div> 
        <div className = "view-description__image"><img src={image} alt="" /></div>
        <div className = "view-description__type">Class:{type}</div>
        <div className = "view-description__heart" >
            
          <div
          onClick = {() => {
            favorites((currentList)=> [...currentList , {id: id ,name: name, image: image, type:type}])
          }} 
          >
            {heartVisible ?<div> </div> :<img className ={showHeartDescr ? "view-description__heart" : "disable"} src={heart} alt="heart" onClick = {() => {setShowHeartDescr(false); allDescr.favor = true} }  />} 
            </div>
      
          </div>
       </div>
   }else {
     return <div>FFFFFFFFFFFFFFFFFFFFFFFFFFF</div>
   }

 }
 

    return (
      <div>
        {ApiOrlocal(true)}
      </div>
    )
}

export default PokemonDescription
