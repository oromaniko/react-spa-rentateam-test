import OK from '../../assets/icon_ok copy 3.svg'
import FB from '../../assets/Icon_fb Copy 6.png'
import TW from '../../assets/Icon_fb Copy 7.png'
import VK from '../../assets/Icon_kv Copy 3.png'
import GooglePlay from '../../assets/GooglePlay.svg'
import AppStore from '../../assets/AppStore.svg'
import styled from 'styled-components'

export default function Links() {
    return (
        <LinksContainer>
            <LinksWrapper>
                <img src={OK} alt='OK' />
                <img src={FB} alt='FB' />
                <img src={TW} alt='TW' />
                <img src={VK} alt='VK' />
            </LinksWrapper>
            <AppsWrapper>
                <a href='src/Components/footer/Footer#'>
                    <img src={GooglePlay} alt='Google Play' />
                </a>
                <a href='src/Components/footer/Footer#'>
                    <img src={AppStore} alt='App Store' />
                </a>
            </AppsWrapper>
        </LinksContainer>
    )
}

const LinksContainer = styled.div`
    width: 100%;
    margin-top: 120px;
    position: relative;
`

const LinksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;
`

const AppsWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    gap: 16px;
`
