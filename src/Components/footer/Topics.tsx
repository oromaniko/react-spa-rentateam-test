import { topics } from '../../store/mydata'
import styled from 'styled-components'

export default function Topics() {
    return (
        <TopicsWrapper>
            {topics.map(({ name, subtopics, order }) => {
                return (
                    <div style={{ order: order }} key={order}>
                        <div>{name}</div>
                        <ul>
                            {subtopics.map((st, i) => (
                                <li key={i}>
                                    <a href='src/Components/footer/Footer#'>
                                        {st}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            })}
            <Circle style={{ order: 3 }}></Circle>
        </TopicsWrapper>
    )
}

const TopicsWrapper = styled.div`
    padding-top: 81px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    position: relative;
    ul {
        list-style: none;
        padding: 0;
        margin-top: 23px;
        font-size: 16px;
    }
    li {
        margin-top: 16px;
    }
    a {
        text-decoration: none;
        color: black;
    }

    @media (max-width: 993px) {
    }
`

const Circle = styled.div`
    background-color: #c4c4c4;
    width: 227px;
    height: 227px;
    border-radius: 120px;

    @media (max-width: 993px) {
        display: none;
    }
`
