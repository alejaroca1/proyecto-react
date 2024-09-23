const products = [
    {
        id: 0,
        title: "Set Par Anillos Ajustables Estilo Avión",
        category: "Anillos",
        price: 21900,
        stock: 12,
        image: "https://http2.mlstatic.com/D_936636-MCO47375984494_092021-O.jpg",
        description: "Comparte este par de anillos con tu amig@, novi@ o familiar para crear un lazo inseparable de cariño. El precio incluye dos anillos cómo lo muestra la imagen"
    },
    {
        id: 1,
        title: "Set 8 Anillos Geométricos Plateados Unisex",
        category: "Anillos",
        price: 22900,
        stock: 42,
        image: "https://http2.mlstatic.com/D_944450-MCO70334785769_072023-O.jpg",
        description: "Descubre el conjunto perfecto para resaltar tu estilo con este exclusivo set de 8 anillos geométricos en tonos plateados, diseñados para mujeres que buscan destacar con elegancia y modernidad."
    },
    {
        id: 2,
        title: "Anillo De Acero Inoxidable Negro Liso",
        category: "Anillos",
        price: 13900,
        stock: 8,
        image: "https://http2.mlstatic.com/D_643318-MCO49472260725_032022-O.jpg",
        description: "Completa tu outfit con estos anillos que son básicos en colores para combinar con cualquier atuendo. Están hechos con el mejor material, garantizando resistencia al agua para que puedas lucirlos en cualquier ocasión sin preocupaciones. Y lo mejor de todo, ¡al mejor precio!"
    },
    {
        id: 3,
        title: "Crema Corporal Bronceado Gradual Hidratante Natalia Paris",
        category: "Cuidado Personal",
        price: 65450,
        stock: 9,
        image: "https://http2.mlstatic.com/D_961680-MCO74117438360_012024-O.jpg",
        description: "Disfruta de una piel suave, bronceada y tonificada con nuestra Crema Corporal Bronceado Gradual + Hidratante + Reafirmante. Esta crema humecta profundamente la piel, proporciona un bronceado gradual sin necesidad de exponerse al sol, y ayuda a tonificar y reafirmar, previniendo la aparición de celulitis."
    },
    {
        id: 4,
        title: "Gel Ultra Bronceador Canela Spf 2 Natalia Paris",
        category: "Cuidado Personal",
        price: 68200,
        stock: 5,
        image: "https://http2.mlstatic.com/D_789542-MCO44138330275_112020-O.jpg",
        description: "Consigue un bronceado rápido y duradero aplicando cada 20 minutos el mejor bronceador de Natalia Paris, tendrás una protección durante tu exposición al sol mientras obtienes bronceado luminoso y natural."
    },
    {
        id: 5,
        title: "Botella Running Agua Soft Flask 250ml",
        category: "Deporte",
        price: 27500,
        stock: 11,
        image: "https://http2.mlstatic.com/D_672292-MCO75986027008_052024-O.jpg",
        description: "Perfecta para acompañarte en todas tus aventuras al aire libre, esta botella suave y plegable te ofrece comodidad y funcionalidad incomparables. Ya sea que estés corriendo, caminando, ciclando o escalando montañas, esta botella se adapta a tu estilo de vida activo."
    },
    {
        id: 6,
        title: "Collar De Cadena Gruesa Eslabones Oro",
        category: "Collares",
        price: 23600,
        stock: 7,
        image: "https://http2.mlstatic.com/D_601477-MCO50032566133_052022-O.jpg",
        description: "Es muy liviano y lo he combinado con vestidos, blusas y croc tops, yo uso generalmente ropa oscura pero como ven en la foto el color blanco resalta el dorado y tu color de piel."
    },
    {
        id: 7,
        title: "Collar Cadena Perlas Pequeñas",
        category: "Collares",
        price: 28500,
        stock: 3,
        image: "https://http2.mlstatic.com/D_748659-MCO51109104739_082022-O.jpg",
        description: "Este divino accesorio te hará lucir todos tus looks en todo momento, perfecto para todos los géneros y edades."
    },
    {
        id: 8,
        title: "Cadena Cintura Sencilla Dorado",
        category: "Accesorios para cuerpo",
        price: 21500,
        stock: 2,
        image: "https://http2.mlstatic.com/D_620738-MCO74593669992_022024-O.jpg",
        description: "Lleva este accesorio para verte a la moda y con el mejor estilo, perfecto para que tu estilo este al 100% y te veas divina. La cadena mide 65cm más 25 cm de extensión para que se ajuste a tu cuerpo."
    },
    {
        id: 9,
        title: "Cadena Cintura Doble Dorado",
        category: "Accesorios para cuerpo",
        price: 23500,
        stock: 5,
        image: "https://http2.mlstatic.com/D_655346-MCO79179640941_092024-O.jpg",
        description: "Lleva este accesorio para verte a la moda y con el mejor estilo, perfecto para que tu estilo este al 100% y te veas divina. La cadena mide 65cm más 25 cm de extensión para que se ajuste a tu cuerpo."
    },
    {
        id: 10,
        title: "Aplicador Cuero Cabelludo Aceite Masajeador",
        category: "Cuidado personal",
        price: 20300,
        stock: 10,
        image: "https://http2.mlstatic.com/D_689027-MCO75661769132_042024-O.jpg",
        description: "Descubre la revolución en el cuidado capilar con nuestro aplicador, el compañero perfecto para mantener tu cabello saludable en cualquier lugar y en cualquier momento. Este mini peine de masaje y guía líquido esencial está diseñado para combatir la pérdida de cabello y revitalizar tu cuero cabelludo con facilidad y conveniencia."
    }    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {

        setTimeout(() => {
            resolve(products.filter(prod=> prod.category === categoryId))
        }, 500);
    })
}