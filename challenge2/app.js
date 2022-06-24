import {
    updateBill,
    switchButtonAccessibility,
    updateMenu,
    updateList,
    switchAddToCartButton,
    getImageFrame,
    contentOfItemFn,
    getAltQnt,
    getSubtotalFrame,
    createCartFrame,
    addItemInTheCart,
    addItemToCart,
  } from "./utility.js";
  const menuItems = [
    {
      name: "French Fries with Ketchup",
      price: 223,
      image: "plate__french-fries.png",
      alt: "French Fries",
      count: 0,
    },
    {
      name: "Salmon and Vegetables",
      price: 512,
      image: "plate__salmon-vegetables.png",
      alt: "Salmon and Vegetables",
      count: 0,
    },
    {
      name: "Spaghetti Meat Sauce",
      price: 782,
      image: "plate__spaghetti-meat-sauce.png",
      alt: "Spaghetti with Meat Sauce",
      count: 0,
    },
    {
      name: "Bacon, Eggs, and Toast",
      price: 599,
      image: "plate__bacon-eggs.png",
      alt: "Bacon, Eggs, and Toast",
      count: 0,
    },
    {
      name: "Chicken Salad with Parmesan",
      price: 698,
      image: "plate__chicken-salad.png",
      alt: "Chicken Salad with Parmesan",
      count: 0,
    },
    {
      name: "Fish Sticks and Fries",
      price: 634,
      image: "plate__fish-sticks-fries.png",
      alt: "Fish Sticks and Fries",
      count: 0,
    },
  ];
  let button1 = document.querySelectorAll(".in-cart");
  let billSectionRef = document.querySelector(".totals");
  let button = document.querySelectorAll(".add");
  let cartRef = document.querySelector(".cart-summary");
  let emptyElement = document.querySelector(".empty");
  let cartPanel = document.querySelector(".panel cart");
  let cartRefAsArray = document.querySelectorAll(".quantity__wrapper");
  
  button.forEach((buttonRef, buttonIndex) => {
    buttonRef.addEventListener("click", () => {
      addItemToCart(buttonRef, buttonIndex);
      updateBill();
    });
  });
  