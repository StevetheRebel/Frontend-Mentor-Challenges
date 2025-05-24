import React, { useEffect, useState } from "react";
import cartIcon from "./../../assets/images/icon-add-to-cart.svg";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Itemcard({ item, addToCart, cartItems, updateCart, removeFromCart }) {
  const [quantity, setQuantity] = useState(1);
  const [startCount, setStartCount] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (cartItem) {
      setIsInCart(true);
      setQuantity(cartItem.quantity);
      setStartCount(true);
    } else {
      setIsInCart(false);
      setQuantity(1);
      setStartCount(false);
    }
  }, [cartItems, item.id]);

  const handleQuantityIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    if (isInCart) {
      updateCart(item.id, newQuantity);
    }
  };

  const handleQuantityDecrement = () => {
    if (quantity > 1) {
      updateCart(item.id, quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  const handleAddtoCart = () => {
    addToCart(item.id, quantity);
  };

  return (
    <div className="flex flex-col gap-8 pb-4 select-none md:max-w-[200px] lg:max-w-[300px] ">
      {/* Image container */}
      <div className="relative">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={item.image.desktop}
            alt={`${item.category} ${item.name}`}
          />
          <source
            media="(min-width: 728px)"
            srcSet={item.image.tablet}
            alt={`${item.category} ${item.name}`}
          />
          <img
            src={item.image.mobile}
            alt={`${item.category} ${item.name}`}
            className="rounded-lg object-cover"
          />
        </picture>

        {/* Add cart toggle */}
        <div
          className={`absolute z-10 w-[70%] h-12 bg-white border border-red bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-full items-center justify-center gap-3 xs:w-1/2 md:w-[80%] hover:cursor-pointer lg:w-[70%] lg:px-2 lg:gap-1 xl:w-[60%] ${
            startCount ? "hidden" : "flex"
          } `}
          onClick={handleAddtoCart}
        >
          <img src={cartIcon} alt="cart icon" className="w-6 " />
          <p className="font-bold">Add to Cart</p>
        </div>
        <div
          className={`absolute z-10 w-[70%] h-12 bg-red bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-full items-center justify-between gap-3 px-2 xs:w-[50%] md:w-[80%] lg:w-[70%] xl:w-[60%] ${
            startCount ? "flex" : "hidden"
          }`}
        >
          <FontAwesomeIcon
            icon={faMinus}
            className="p-1 aspect-square rounded-full border-2 border-white text-white hover:bg-white hover:text-red transition-all duration-300"
            onClick={handleQuantityDecrement}
          />
          <p className="text-xl text-white">{quantity}</p>
          <FontAwesomeIcon
            icon={faPlus}
            className="p-1 aspect-square rounded-full border-2 border-white text-white hover:bg-white hover:text-red transition-all duration-300"
            onClick={handleQuantityIncrement}
          />
        </div>
      </div>
      {/* content container */}
      <div>
        <h3 className="category">{item.category}</h3>
        <h1 className="name">{item.name}</h1>
        <p className="price">${item.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Itemcard;
