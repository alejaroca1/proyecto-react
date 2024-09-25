export default function ButtonComponent({nombre}){
   
    const handleClick = () => {
        alert(`Button ${nombre} clicked!`);
    };

    return(
        <>
        <button className="px-5" onClick={handleClick} >{nombre}</button>
        </>
    )
}