import Card from "./Card"

const OneDay = ({current}) =>{
    return(
        <>
        {current.condition.text !== undefined?
        <Card current={current} />:
        <>Loading...</>}
        </>
    )
}

export default OneDay