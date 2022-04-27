import { CategoryType } from '../../types/products'
import styled from 'styled-components'
import { useScrollspy } from '../../hooks/useScrollSpy'

type CategoriesNavListProps = {
    categories: CategoryType[]
}

export default function CategoriesNavList({
    categories,
}: CategoriesNavListProps) {
    const ids = categories.map(({ name }) => name)
    const activeId = useScrollspy(ids, 430)
    return (
        <StickyContainer>
            <Nav>
                {categories.map(({ id, name }) => (
                    <NavItem
                        key={id}
                        isActive={name === activeId}
                        href={`#${name}`}
                    >
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
    padding: 0 6.66%;
    top: 0;
    z-index: 100;
`

const Nav = styled.nav`
    display: flex;
    justify-content: flex-start;
    overflow: scroll;
    gap: 40px;
    background-color: white;
`

const NavItem = styled.a<{ isActive: boolean }>`
    display: inline-block;
    box-sizing: border-box;
    border-bottom: 2px solid
        ${({ isActive }) => (isActive ? '#e4002b' : 'transparent')};
    color: ${({ isActive }) => (isActive ? '#e4002b' : '#9d9d9d')};
    font-size: 18px;
    line-height: 24px;
    text-decoration: none;
    padding: 15px 0;
    &:hover {
        color: #e4002b;
        border-color: #e4002b;
    }
`
