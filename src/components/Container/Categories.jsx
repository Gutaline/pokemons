import React from 'react';
import heart from '../../assets/Heart1.png'

const Categories = ({myProps}) => {
 
  const [visibleAbilites, setVisibleAbilites] = React.useState(false); // Эти стейты нужны ,Чтобы кнопки выдвигались
  const [visibleClass, setVisibleClass] = React.useState(false);// Эти стейты нужны ,Чтобы кнопки выдвигались


  let ab = myProps;

  
  
  const [test, setTest] = React.useState(); // Тут хранится отсортированный массив по классам

  

  return (
    <div className="categories">
      <img className="categories-img"src={heart} alt="heart" />
      <h1>Избранное</h1>
      <div className="title">Категории</div>
      <ul className="categoriesList">
        <li onClick = {()=> setVisibleAbilites(!visibleAbilites)}>Cпособности
         {visibleAbilites &&
           <ul>
              <li>Overgroth</li>
              <li>Fire</li>
           </ul> 
         }
          
        </li>
        <li onClick = {()=> setVisibleClass(!visibleClass)}>Классы
          {visibleClass &&
            <ul>
                <li>Grasss</li>
                <li >Fire</li>
                <li>Water</li>
                <li>Bug</li>
                <li>Normal</li>
            </ul> 
          }
        </li>
      </ul>
    </div>
  );
};

export default Categories;
