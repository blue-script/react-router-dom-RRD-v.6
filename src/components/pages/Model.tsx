import {adidasArr, AdidasItem} from "./Adidas";
import {useParams} from "react-router-dom";
import {pumaArr, PumaItem} from "./Puma";

type ObjType = {
    [key: string]: AdidasItem[] | PumaItem[]
}

export const Model = () => {
    const {modelName, modelId} = useParams()
    const obj: ObjType = {'adidas': adidasArr, 'puma': pumaArr}
    const currentModel = modelName && modelName in obj && obj[modelName].find(el => el.id === Number(modelId))
    return (
        <div style={{textAlign: 'center'}}>
            {!currentModel
                ? <h2>Модель отсутствует</h2>
                : <>
                    <h2>{currentModel.model}</h2>
                    <h4>{currentModel.collection}</h4>
                    <h3>{currentModel.price}</h3>
                    <img src={currentModel.picture} alt={currentModel.model} style={{width: '400px'}}/>
                </>
            }
        </div>
    )
}