import styled from 'styled-components'
import Topics from './Topics'
import Links from './Links'

export default function Footer() {
    return (
        <FooterWrapper>
            <LogoWrapper>
                <div></div>
                <div></div>
                <div></div>
            </LogoWrapper>
            <Topics />
            <Links />
        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
    width: 100%;
    padding-right: 6.66%;
    padding-left: 6.66%;
    padding-bottom: 63px;
    background-color: white;
`

const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 32px;
    div {
        background-color: #e4002b;
        width: 32px;
        height: 72px;
    }
`
