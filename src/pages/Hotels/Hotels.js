import React, { useState } from 'react';
import './Hotels.css';
import { FaAngleDown } from "react-icons/fa";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import alpLagerImg from '../../assets/alpLager.png';
import alaArchaHotel1 from '../../assets/alaArchaHotel1.png';
import alaArchaHotel2 from '../../assets/alaArchaHotel2.png';
import alaArchaHotel3 from '../../assets/alaArchaHotel3.png';
import alaArchaHotel4 from '../../assets/alaArchaHotel4.png';
import alaArchaHotel5 from '../../assets/alaArchaHotel5.png';
import bedroom from '../../assets/bedroom.png';
import breakfast from '../../assets/breakfast.png';
import bathroom from '../../assets/bathroom.png';
import terrace from '../../assets/terrace.png';


 function Hotels() {
    const [hotel, setHotel] = useState("alaArcha");
    let scene ="";
    const alaArcha = (<div className='alaArcha'>
            <div className='rooms'>
                <div className='room'>
                    <div className='image'>
                        <img src={alaArchaHotel1} alt='#'/>
                    </div>
                    <div className='description'>
                        <h3>Номер люкс №7</h3>
                        <p className='capacity'>Вместимость: <span>2 человека</span></p>
                        <div className='price'>
                            <p><span>7000 сом</span></p>
                            <p>1 сутки</p>
                        </div>
                    </div>
                    <div className='icons'>
                        <p><img src={bedroom} alt='#'/> <span>1 спальня</span></p>
                        <p><img src={breakfast} alt='#'/> <span>Завтрак включен</span></p>
                        <p><img src={bathroom} alt='#'/> <span>Cанузел с душевой кабинкой</span></p>
                        <p><img src={terrace} alt='#'/> <span>Веранда</span></p>
                    </div>
                </div>
                <div className='room'>
                    <div className='image'>
                        <img src={alaArchaHotel2} alt='#'/>
                    </div>
                    <div className='description'>
                        <h3>Номер полулюкс №5, 6</h3>
                        <p className='capacity'>Вместимость: <span>2 человека</span></p>
                        <div className='price'>
                            <p><span>7000 сом</span></p>
                            <p>1 сутки</p>
                        </div>
                    </div>
                    <div className='icons'>
                        <p><img src={bedroom} alt='#'/> <span>1 спальня</span></p>
                        <p><img src={breakfast} alt='#'/> <span>Завтрак включен</span></p>
                        <p><img src={bathroom} alt='#'/> <span>Cанузел с душевой кабинкой</span></p>
                        <p><img src={terrace} alt='#'/> <span>Веранда</span></p>
                    </div>
                </div>
                <div className='room'>
                    <div className='image'>
                        <img src={alaArchaHotel3} alt='#'/>
                    </div>
                    <div className='description'>
                        <h3>Номер семейный №8</h3>
                        <p className='capacity'>Вместимость: <span>4 человека</span></p>
                        <div className='price'>
                            <p><span>7000 сом</span></p>
                            <p>1 сутки</p>
                        </div>
                    </div>
                    <div className='icons'>
                        <p><img src={bedroom} alt='#'/> <span>1 спальня</span></p>
                        <p><img src={breakfast} alt='#'/> <span>Завтрак включен</span></p>
                        <p><img src={bathroom} alt='#'/> <span>Cанузел с душевой кабинкой</span></p>
                        <p><img src={terrace} alt='#'/> <span>Веранда</span></p>
                    </div>
                </div>
                <div className='room'>
                    <div className='image'>
                        <img src={alaArchaHotel4} alt='#'/>
                    </div>
                    <div className='description'>
                        <h3>Номера №1,2,3,4</h3>
                        <p className='capacity'>Вместимость: <span>4 человека</span></p>
                        <div className='price'>
                            <p><span>7000 сом</span></p>
                            <p>1 сутки</p>
                        </div>
                    </div>
                    <div className='icons'>
                        <p><img src={bedroom} alt='#'/> <span>1 спальня</span></p>
                        <p><img src={bathroom} alt='#'/> <span>Cанузел с душевой кабинкой</span></p>
                        <p><img src={terrace} alt='#'/> <span>Веранда</span></p>
                    </div>
                </div>
            </div>
            <div className='linen'>
                <h3>Матрас с постельным бельем - 500 сом</h3>
            </div>
            <div className='arrive'>
                <h3>Время заезда: с 13:00 до 12:00 следующего дня</h3>
            </div>
            <div className='otherServices'>
                <div className='image'>
                    <img src={alaArchaHotel5} alt='#'/>
                </div>
                <div className='rooms'>
                    <div className='room'>
                        <h3>Конференц зал</h3>
                        <p className='capacity'>Вместимость: <span>30 человек</span></p>
                        <div className='price'>
                            <p><span className='total'>7000 сом</span></p>
                            <p>(двухместный) - 1 сутки</p>
                            <p>Каждый следю час - <span>1000 сом</span></p>
                            <p>Более 6 часов - <span>6000 сом</span></p>
                        </div>
                    </div>
                    <div className='room bordered'>
                        <h3>Банкетный зал</h3>
                        <p className='capacity'>Вместимость: <span>до 10 человек</span></p>
                        <div className='price'>
                            <p><span className='total'>500 сом</span></p>
                            <p>1 час</p>
                            <p>Каждый следю час - <span>250 сом</span></p>
                            <p><span className='total'>Более 10 мест - 1000 сом</span></p>
                            <p>1 час</p>
                            <p>Каждый следю час - <span>500 сом</span></p>
                        </div>
                    </div>
                    <div>
                        <div className='room unit'>
                            <h3>Каминный зал</h3>
                            <p className='capacity'>Вместимость: <span>до 10 человек</span></p>
                            <div className='price'>
                                <p><span className='total'>500 сом</span></p>
                                <p>1 час</p>
                                <p>Каждый следю час - <span>250 сом</span></p>
                            </div>
                        </div>
                        <div className='room unit upperborder'>
                            <h3>Сауна</h3>
                            <div className='price'>
                                <p><span className='total'>200 сом</span></p>
                                <p>1 час</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    
    const alpLager = (<div className='alpLager'>
            <div className='room'>
                <div className='image'>
                    <img src={alpLagerImg} alt='#'/>
                </div>
                <div className='description'>
                    <h3>Номер №1</h3>
                    <p className='capacity'>Вместимость: <span>2 человека</span></p>
                    <div className='price'>
                        <p><span>2500 сом</span></p>
                        <p>1 сутки</p>
                    </div>
                    <div className='services'>
                        <p>Матрас с постельным бельём- 200 сом</p>
                    </div>
                </div>
            </div>
            <div className='otherServices'>
                <div className='room1'>
                    <h3>Большой торжественный зал</h3>
                    <div className='price'>
                        <p><span>4000 сом</span></p>
                        <p>8 часов</p>
                    </div>
                </div>
                <div className='room2'> 
                    <h3>Малый зал</h3>
                    <div className='price'>
                        <p><span>3000 сом</span></p>
                        <p>8 часов</p>
                    </div>
                </div>
                <div className='room3'>
                    <h3>Большой и малый зал кафе-бара</h3>
                    <div className='price'>
                        <p><span>200 сом</span></p>
                        <p>1 стол - 1 час</p>
                    </div>
                </div>
            </div>
        </div>);

    const akMaral = (<div className='akMaral'>
    <div className='rooms'>
    <div className='room1' >
        <h3>Номер №1</h3>
        <p className='capacity'>Вместимость: <span>2 человека</span></p>
        <div className='price'>
            <p><span>2500 сом</span></p>
            <p>1 сутки</p>
        </div>
    </div>
    <div className='room2' >
        <h3>Номер №2</h3>
        <p className='capacity'>Вместимость: <span>2 человека, большой зал на 10 человек</span></p>
        <div className='price'>
            <p><span>3500 сом</span></p>
            <p>1 сутки</p>
        </div>
    </div>
    <div className='room3' >
        <h3>Номер №1</h3>
        <p className='capacity'>Вместимость: <span>2 человека, малый зал на 4 человека</span></p>
        <div className='price'>
            <p><span>2000 сом</span></p>
            <p>1 сутки</p>
        </div>
    </div>
    </div>
    <div className='linen'>
        <h3>Матрас с постельным бельем - 200 сом</h3>
    </div>
    <div className='conference'>
        <h3>Конференц зал</h3>
        <p className='capacity'>Вместимость: <span>30 человек</span></p>
        <div className='price'>
            <p><span className='totalPrice'>1500 сом</span></p>
            <p>(двухместный) - 1 сутки</p>
            <p>Каждый след. час - <span>1000 сом</span></p>
            <p>Более 6 часов - <span>6000 сом</span></p>
        </div>
    </div>
        </div>);

    let alaArchaClass = "block";
    let alpLagerClass = "block";
    let akMaralClass = "block";
    
    switch(hotel) {
        case "alaArcha":
            scene = alaArcha;
            alaArchaClass += " active"
            break;
        case "alpLager":
            scene = alpLager;
            alpLagerClass += " active"
            break;
        case "akMaral":
            scene = akMaral;
            akMaralClass += " active"
            break;
        default:
            scene = alaArcha;
            alaArchaClass += " active"
            break;
    }

    const alaArchaHandler = () => {
        setHotel("alaArcha");
    }

    const alpLagerHandler = () => {
        setHotel("alpLager");
    }

    const akMaralHandler = () => {
        setHotel("akMaral");
    }

  return (
      
    <div className='hotels'>
        {/* <Header/> */}
        <div className='blocks'>
            <div className={alaArchaClass} onClick={alaArchaHandler}>
                <p>Гостиница "Ала-Арча"</p>
                <h2>Прейскурант</h2>
                <FaAngleDown/>
            </div>
            <div className={alpLagerClass} onClick={alpLagerHandler}>
                <p>Гостиница "Альплагерь"</p>
                <h2>Прейскурант</h2>
                <FaAngleDown/>
            </div>
            <div className={akMaralClass} onClick={akMaralHandler}>
                <p>Гостиница "Ак-Марал"</p>
                <h2>Прейскурант</h2>
                <FaAngleDown/>
            </div>
        </div>
        <div className='container'>
            {scene}
        </div> 
        {/* <Footer/>    */}
    </div>
  )
}

export default Hotels;