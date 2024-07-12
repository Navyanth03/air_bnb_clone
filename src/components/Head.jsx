import mainImg from '../assets/main_img.png';

export default function Head(){
    return(
        <div id='head-container'>
            <img id='head-img' src={mainImg} alt="an image showing the experiences you can get through airbnb" />
            <div id='head-heading'>Online Experiences</div>
            <div id='head-description'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</div>
        </div>
    )
}