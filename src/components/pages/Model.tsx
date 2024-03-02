import {adidasArr, AdidasItem} from "./Adidas";
import {useParams} from "react-router-dom";
import {pumaArr, PumaItem} from "./Puma";
import {Error404} from "./Error404";

type ObjType = {
    [key: string]: AdidasItem[] | PumaItem[]
}

export const Model = () => {
    const {sneakerBrand , modelId} = useParams()
    const obj: ObjType = {'adidas': adidasArr, 'puma': pumaArr}
    const currentModel = sneakerBrand && sneakerBrand in obj && obj[sneakerBrand].find(el => el.id === Number(modelId))
    return (
        <div style={{textAlign: 'center'}}>
            {!(sneakerBrand && sneakerBrand in obj)
                ? <Error404/>
                : currentModel
                    ? <>
                        <h2>{currentModel.model}</h2>
                        <h4>{currentModel.collection}</h4>
                        <h3>{currentModel.price}</h3>
                        <img src={currentModel.picture} alt={currentModel.model} style={{width: '400px'}}/>
                    </>
                    : <h2>Модель отсутствует</h2>
            }
        </div>
    )
}