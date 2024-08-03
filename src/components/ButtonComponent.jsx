export default function ButtonComponent({nombre}){
   
    const handleClick = () => {
        alert(`Button ${nombre} clicked!`);
    };

    return(
        <>
        <button onClick={handleClick} >{nombre}</button>
        </>
    )
}