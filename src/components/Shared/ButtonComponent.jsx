export default function ButtonComponent({nombre}){
   
    const handleClick = () => {
        alert(`Button ${nombre} clicked!`);
    };

    return(
        <>
        <button className="px-4" onClick={handleClick} >{nombre}</button>
        </>
    )
}