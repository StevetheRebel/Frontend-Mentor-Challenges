import React, { useEffect, useState } from "react";
import Itemcard from "./components/Itemcard/Itemcard.jsx";
import CartItems from "./components/CartItems/CartItems.jsx";
import tree from "./assets/images/icon-carbon-neutral.svg";
import emptyCart from "./assets/images/illustration-empty-cart.svg";
import { Box, Modal } from "@mui/material";
import confirmed from "./assets/images/icon-order-confirmed.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "300px",
  width: "90%",
  maxWidth: "450px",
  bgcolor: "background.paper",
  boxshadow: 24,
  borderRadius: "16px",
};

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        // Generate stable IDs
        const dataWithId = data.map((item) => ({
          ...item,
          id: item.id || `item-${item.name.toLowerCase().replace(/\s+/g, "-")}`,
        }));

        setData(dataWithId);

        const validCartItems = cartItems.filter((cartItem) =>
          dataWithId.some((product) => product.id === cartItem.id)
        );

        if (validCartItems.length !== cartItems.length) {
          setCartItems(validCartItems);
        }

        setLoading(false);
      });
  }, []);

  // Single save effect
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Error: {error.message}
      </div>
    );

  // Add to cart function
  // This function should handle adding the item to the cart
  const addToCart = (itemId, quantity) => {
    setCartItems((prevItems) => {
      const itemToAdd = data.find((item) => item.id === itemId);
      if (!itemToAdd) return prevItems;
      const existingItem = prevItems.find((item) => item.id === itemId);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...itemToAdd, quantity }];
      }
    });
  };

  // Update cart function
  // This function should handle updating the cart with the current item and quantity
  const updateCart = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const confirmCheckOut = () => {
    setIsOpen(true);
  };

  const closeCheckOut = () => {
    setIsOpen(false);
    setCartItems([]); // Clear the cart after confirmation
  };

  return (
    <div className="grid gap-4 grid-cols-1 p-8 md:grid-cols-3 md:gap-0 bg-rose-50 lg:gap-4 ">
      {/* Items container */}
      <div className="flex flex-col gap-y-8 md:gap-y-4 md:col-span-2 ">
        <h1 className="text-4xl font-bold text-black">Desserts</h1>
        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 gap-4 lg:grid-cols-3">
          {data.map((item) => (
            <Itemcard
              key={item.id}
              item={item}
              cartItems={cartItems}
              addToCart={addToCart}
              updateCart={updateCart}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
      </div>

      {/* Cart Display */}
      <div className="w-full flex flex-col gap-4 bg-white p-4 rounded-lg h-auto place-self-start md:sticky top-10 ">
        {/* Container heading */}
        <h1 className="text-2xl text-red font-bold w-full">{`Your Cart (${cartItems.reduce(
          (total, item) => total + item.quantity,
          0
        )})`}</h1>

        {cartItems.length > 0 ? (
          <div className="flex flex-col gap-4">
            {/* Item in cart */}
            <div className="flex flex-col gap-4 max-h-[80dvh] overflow-y-auto hide-scrollbar scrollbar-thin">
              {cartItems.map((item) => (
                <CartItems
                  key={item.id}
                  item={item}
                  removeFromCart={removeFromCart}
                />
              ))}
            </div>

            {/* Total container */}
            <div className="flex justify-between items-center">
              <h4 className="text-sm xs:text-base">Order Total</h4>
              <p className="font-bold xs:text-lg">
                $
                {cartItems
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </p>
            </div>

            {/* carbon container */}
            <div className="flex gap-2 p-2 bg-rose-50 items-center justify-center ">
              <img src={tree} alt="carbon neutral icon" />
              <p className="text-[10px] xs:text-[12px] md:text-[10px] ">
                This is a <strong>carbon-neutral</strong> delivery
              </p>
            </div>

            {/* Order confirmation button */}
            <button
              className="rounded-full w-full bg-red py-2 text-white text-base hover:cursor-pointer "
              onClick={confirmCheckOut}
            >
              Confirm Order
            </button>
            <Modal
              open={isOpen}
              // onClose={closeCheckOut}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="p-4 flex flex-col gap-2 md:gap-4">
                  <img src={confirmed} alt="" className="w-8 md:w-12" />
                  <h3 className="text-xl font-bold text-rose-900 md:text-2xl">
                    Order Confirmed
                  </h3>
                  <p className="text-[10px] text-rose-300 md:text-[14px] ">
                    We hope you enjoyed your food!
                  </p>
                  <div className="flex flex-col gap-2 p-2 rounded-2xl  bg-rose-50 md:gap-4 md:p-4 ">
                    <div className="flex flex-col gap-2 max-h-[300px] overflow-y-auto ">
                      {cartItems.map((item) => (
                        <>
                          <div className="flex gap-4 ">
                            <img
                              src={item.image.thumbnail}
                              alt={item.name}
                              className="w-12 aspect-square object-cover md:w-16 "
                            />
                            <div className="flex justify-between items-center w-full">
                              <div>
                                <p className="font-bold text-[10px] md:text-base ">
                                  {item.name}
                                </p>
                                <p className="text-[10px] text-rose-500 md:text-[14px] ">
                                  x{item.quantity} @ ${item.price.toFixed(2)}
                                </p>
                              </div>
                              <div>
                                <p className="text-[14px] md:text-lg ">
                                  ${item.price.toFixed(2)}
                                </p>
                              </div>
                            </div>
                          </div>
                          <hr className="text-rose-100 border-[hairline] md:border-1 " />
                        </>
                      ))}
                    </div>
                    <div className="flex justify-between md:mt-4 md:px-4">
                      <p className="md:text-lg ">Order Total</p>
                      <p className="font-bold md:text-xl">
                        $
                        {cartItems
                          .reduce((total, item) => total + item.price, 0)
                          .toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <button
                    className="bg-red rounded-full text-white py-1 md:text-xl md:py-2 "
                    onClick={closeCheckOut}
                  >
                    Start New Order
                  </button>
                </div>
              </Box>
            </Modal>
          </div>
        ) : (
          <div className="flex flex-col items-center w-full">
            <img src={emptyCart} alt="empty cart image" />
            <p className="text-rose-900 ">Your added items will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
