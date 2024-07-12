import star from '../assets/experiences/star.png';
export default function Card(props){
    const {title,description,price,coverImg,stats,location,openSpots}=props.item;
    let display;
    if(openSpots===0)display='SOLD OUT';
    else if(location==='Online')display='Online';
    return(
        <div className='card'>
            {display && <div className='card-status'>{display}</div>}
            <img src={`./src/assets/experiences/${coverImg}`} className='card-image' alt="" />
            <div className='card-stats'>
                <img src={star} className="star-image" alt="" />
                <span>{stats.rating}</span>
                <span className='gray'>({stats.reviewCount})</span>
                <span className='gray'>•</span>
                <span className='gray'>{location}</span>
            </div>
            <h2 className='card-title'>{title}</h2>
            <div className='card-price'><b>From ${price}</b> / person</div>
        </div>
    )
}