import React from 'react'
import Container from 'reactstrap'
import { IngrediencesContext } from '../Providers/IngrediencesProvider'
import Ingredience from './Ingredience'

const Ingrediences = props => {
    const [state] = useContext(IngrediencesContext);
    return (
        <Container className="list">
            {state.ingrediences.map((item) => (<Ingredience name={item}/>))};
        </Container>
    )
}

export default Ingrediences;