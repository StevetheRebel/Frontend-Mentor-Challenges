import { faX } from "@fortawesome/free-solid-svg-icons";
import { width } from "@fortawesome/free-solid-svg-icons/faPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function CartItems({item, removeFromCart}) {

  return (
    <>
      <div className="flex justify-between items-center ">
        <div>
          {/* name of item */}
          <p className="font-bold md:text-[14px] ">{item.name}</p>

          {/* Quantity and Price */}
          <div className="flex gap-2 items-center">
            {/* Quantity */}
            <p className="text-[14px] font-bold text-red">x{item.quantity}</p>

            {/* Price */}
            <div className="flex gap-1 items-center">
              {/* unit price */}
              <p className="text-[14px] text-rose-500">@ ${item.price.toFixed(2)}</p>

              {/* total price */}
              <p className="text-[14px] text-rose-500">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faX}
            className="text-[8px] p-1 aspect-square border rounded-full text-rose-500 hover:cursor-pointer hover:bg-rose-400 hover:text-white "
            onClick={() => removeFromCart(item.id)}
          />
        </div>
      </div>
      <hr className="text-rose-100 border-[hairline] " />
    </>
  );
}

export default CartItems;
