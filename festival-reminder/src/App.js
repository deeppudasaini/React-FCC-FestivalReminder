import React, {useState} from 'react'
import FestivalData from './FestivalListData'
import FestivalSingleList from  './FestivalSingleList'
import './App.css';

function App() {
  const [festival, setFestival] = useState(FestivalData)
  return (
    <div className="App">
     <main>
       <section className="container">
          <h3>
{
  festival.length==0?"No Festivals Left":festival.length+" Festivals to Celebrate"
}
          
          </h3>
          <FestivalSingleList data={festival} />
          <button onClick={()=>
          { 
            setFestival(festival.slice(1))
          }}>
            {festival.length==0?"All Cleared":"Remove one festival"}
            </button>
       </section>
     </main>
    </div>
  );
}

export default App;
