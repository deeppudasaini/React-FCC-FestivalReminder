import React from 'react'

function FestivalSingleList(props) {
    return (
        <div>
            
            {props.data.map((festival)=>{
                return <article key={festival.id} className="person">
                <img src={festival.image} />
                <div>
                    <h4>
                        {festival.name}
                    </h4>
                    <p>{festival.date}</p>
                </div>
                </article>
            })}
            
        </div>
    )
}

export default FestivalSingleList
