import {topics} from "../store/mydata";
import VK from "../assets/Icon_kv Copy 3.png";
import OK from "../assets/icon_ok copy 3.svg";
import FB from "../assets/Icon_fb Copy 6.png";
import TW from "../assets/Icon_fb Copy 7.png";
import GooglePlay from "../assets/GooglePlay.svg";
import AppStore from "../assets/AppStore.svg";


export default function Footer () {
    return (
        <footer>
            <div className='footer-logo'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='topics'>
                {topics.map(({ name, subtopics, order }) => {
                    return (
                        <div style={{order: order}} key={order}>
                            <div>{name}</div>
                            <ul>{subtopics.map((st, i) => <li key={i}><a href='#'>{st}</a></li>)}</ul>
                        </div>
                    );
                })}
                <div className='footer-circle' style={{order: 3}}></div>
            </div>
            <div className='links'>
                <div className='links-box'>
                    <img src={OK} alt='OK'/>
                    <img src={FB} alt='FB'/>
                    <img src={TW} alt='TW'/>
                    <img src={VK} alt='VK'/>
                </div>
                <div className='apps'>
                    <a href='#'><img src={GooglePlay} alt='Google Play'/></a>
                    <a href='#'><img src={AppStore} alt='App Store'/></a>
                </div>
            </div>
        </footer>
    );
}