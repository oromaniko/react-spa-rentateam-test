import ItemsList from './ItemsList'
import { CategoryType } from '../../types/products'
import styled from 'styled-components'

type CategoriesListProps = {
    categories: CategoryType[]
}

export default function CategoriesList({ categories }: CategoriesListProps) {
    return (
        <>
            {categories.map(({ id, name, products }, i) => {
                if (products.length === 0) {
                    return null
                }
                const bg = i % 2 === 0
                return (
                    <Section bg={bg} key={id} id={name}>
                        <CategoryWrapper>
                            <div>
                                <span>{name}</span>
                            </div>
                            <ItemsList productsId={products} />
                        </CategoryWrapper>
                    </Section>
                )
            })}
        </>
    )
}

const Section = styled.section<{ bg: boolean }>`
    background-color: ${({ bg }) => (bg ? '#F7F6F5' : 'white')};
    padding-top: 40px;
    padding-bottom: 40px;
`
const CategoryWrapper = styled.div`
    margin: auto;
    padding: 0 6.66%;
`
