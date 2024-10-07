import './ButtonComponent.css'

export default function ButtonComponent({ nombre, color, hoverClass, src }) {
  const estiloBotonNav = {
    color: color,
  };

  return (
    <>
      <button className={`btn-comp ${hoverClass}`} style={estiloBotonNav}>
      {src ? <img src={src} alt={nombre} /> : nombre}
      </button>
    </>
  );
}
