import {adidasArr, AdidasItem} from "./Adidas";
import {useParams} from "react-router-dom";
import {pumaArr, PumaItem} from "./Puma";

type ObjType = {
    [key: string]: AdidasItem[] | PumaItem[]
}

export const Model = () => {
    const {modelName, modelId} = useParams()
    const id = Number(modelId)
    const obj: ObjType = {'adidas': adidasArr, 'puma': pumaArr}
    const sneakers = modelName && obj[modelName].find(model => model.id === id)
    if (!sneakers) {
        return (
            <div style={{display: 'flex', justifyContent: 'center', fontWeight: 'bold', fontSize: '40px'}}>
                {'Модель отсутствует'}
            </div>
        )
    }
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px'}}>
            <div>{sneakers.model}</div>
            <div>{sneakers.collection}</div>
            <div>{sneakers.price}</div>
            <div><img src={sneakers.picture} alt={sneakers.model} width={400}/></div>
        </div>
    )
}