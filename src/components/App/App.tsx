import React, {useEffect} from 'react'
import Container from '../Container/Container'

import allPoki from '../../store/allPoki';
import { observer } from 'mobx-react-lite';



export const App:React.FC = observer(() => {

  useEffect(() => {
    allPoki.getPoki();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function checkFavorPoki() {
    const a = JSON.parse(localStorage.getItem('poki')!);
    let favorPoki:number[] = [];

    if (a) {
      a.forEach((item:any, index:number) => {
        favorPoki[index] = item.id;
      });

      allPoki.count.forEach(item => {
        if (favorPoki.includes(item.id)) {
          item.favor = true;
        }
      });
    }
  }
 
 checkFavorPoki();
 
  return (
    <div className="App">
      
      <Container pokemonsList={allPoki.count} />
    </div>
  );
});

export default App;
