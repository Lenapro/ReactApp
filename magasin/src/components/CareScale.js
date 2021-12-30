// les props sont des objets qu'on peut récupérer dans les paramètres de notre composant fonction

function CareScale(scaleValue, careType){
    const range = [1, 2, 3]
    
    const scaleType = careType === 'light' ? '☀': '💧'
   
    return (
    <div>
        {range.map((rangeElem) => 
        scaleValue >= rangeElem ? (<span key={rangeElem.toString()}>{scaleType}</span>) : null
        )}
    </div>)
}
export default CareScale