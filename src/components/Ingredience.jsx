import React from 'react'
import { IngrediencesContext } from '../Providers/IngrediencesProvider';

const Ingredience = () => {
    const [state, dispatch] = useContext(IngrediencesContext);
    ingrediences = {
        ing1: { name:"salám", category: "maso"},
        ing2: { name:"rok stařená šunka", category: "maso"},
        ing3: { name:"oliheň", category: "mořské plody"},
        ing4: { name:"salám", category: "zelenina"},
        ing5: { name:"kapusta", category: "zelenina"},
    }
};

export default Ingredience;
