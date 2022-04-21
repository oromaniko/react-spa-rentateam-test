import { CategoryType } from '../../types/products'
import styled from 'styled-components'

type CategoriesNavListProps = {
    categories: CategoryType[]
}

export default function CategoriesNavList({
    categories,
}: CategoriesNavListProps) {
    return (
        <StickyContainer>
            <Nav>
                {categories.map(({ id, name }) => (
                    <NavItem key={id} href={`#${name}`}>
                        <span>{name}</span>
                    </NavItem>
                ))}
            </Nav>
        </StickyContainer>
    )
}

const StickyContainer = styled.div`
    width: 100%;
    height: 56px;
    position: sticky;
    top: 0;
    z-index: 100;
`

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    overflow: scroll;
    gap: 40px;
    background-color: white;
    padding: 0 6.66%;
`

const NavItem = styled.a`
    border-bottom: 2px solid transparent;
    box-sizing: border-box;
    color: #9d9d9d;
    display: inline-block;
    font-size: 18px;
    line-height: 24px;
    text-decoration: none;
    padding: 15px 0;
    &:hover {
        color: #e4002b;
        border-color: #e4002b;
    }
`
