import './ItemsCard.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

export default function ItemsCard({ titulo, precio, imagen, id }) {

  const localStorageKey = `like-${id}`;

  const [isLiked, setIsLiked] = useState(() => {
    const savedLike = localStorage.getItem(localStorageKey);
    return savedLike === 'true';
  });

  const likeBtn = () => {
    const newLikeState = !isLiked;
    setIsLiked(newLikeState);

    localStorage.setItem(localStorageKey, newLikeState);
  };

  return (
    <div className='contCards'>
      <article className='card'>
        <h6>{titulo}</h6>
        <img src={imagen} alt={titulo} width={200} />
        <br />

        <section className="likeYprecio">
          <h6>Precio: ${precio}</h6>

          <button onClick={likeBtn} className="like-btn">
            <FontAwesomeIcon
              icon={isLiked ? solidHeart : regularHeart}
              size="lg"
              className={isLiked ? 'liked' : 'unliked'}
            />
          </button>
        </section>

        <button className='btnDetalles'>
          <Link to={`/product/${id}`}>Ver detalles</Link>
        </button>
      </article>
    </div>
  );
}
