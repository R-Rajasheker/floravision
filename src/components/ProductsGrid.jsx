import React from 'react'
import plantProduct from '../assets/plant-product-1.png'
import sans from '../assets/sans.png'
import agave from '../assets/agav.png'
import cactus from '../assets/cac.png'
import bagIcon from '../assets/bag-icon.png'
import swis from '../assets/swis.png'

const ProductsGrid = () => {
  const products = [
    {
      id: 1,
      name: "Aglaonema plant",
      description:
        "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
      price: "Rs. 300/-",
      image: plantProduct,
    },
    {
      id: 2,
      name: "Plantain Lilies",
      description:
        "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
      price: "Rs. 380/-",
      image: plantProduct,
    },
    {
      id: 3,
      name: "Cactus",
      description: "It is known for their ability to thrive in arid environments",
      price: "Rs. 259/-",
      image: cactus,
    },
    {
      id: 4,
      name: "Sansevieria plant",
      description:
        "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
      price: "Rs. 450/-",
      image:sans,
    },
    {
      id: 5,
      name: "Agave plant",
      description:
        "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
      price: "Rs. 359/-",
      image: agave,
    },
    {
      id: 6,
      name: "Swiss cheese Plant",
      description:
        "It is a popular tropical houseplant known for its distinctive, perforated leaves",
      price: "Rs. 400/-",
      image: swis,
    },
  ]

  const handleAddToCart = (productId) => {
    console.log(`Added product ${productId} to cart`)
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="glass-card rounded-[77px] p-8 backdrop-blur-lg shadow-flora-lg transition-transform duration-300 hover:-translate-y-2"
              style={{
                borderImage:
                  'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 3%, rgba(0, 0, 0, 0) 51%, rgba(255, 255, 255, 0.2) 96%) 1',
                  borderRadius: '77px',
                  border: '1px solid',
                
                // borderWidth: '2px',
                
              }}
            >
              <div className="text-center mt-[-80px] mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[459px] h-[459px] lg:w-[350px] lg:h-[350px] md:w-[300px] md:h-[300px] sm:w-[250px] sm:h-[250px] object-cover rounded-lg mx-auto shadow-flora-sm"
                />
              </div>
              <div className="space-y-4">
                <h3 className="font-inter font-normal text-4xl lg:text-3xl md:text-2xl text-flora-white opacity-75">
                  {product.name}
                </h3>
                <p className="font-inter font-normal text-2xl lg:text-xl md:text-lg leading-tight text-flora-white opacity-75">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-inter font-normal text-4xl lg:text-3xl md:text-2xl text-flora-white opacity-75">
                    {product.price}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className="border-2 border-flora-white border-opacity-75 rounded-xl p-3.5 cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10"
                  >
                    <img src={bagIcon} alt="Add to Cart" className="w-7 h-7" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsGrid
