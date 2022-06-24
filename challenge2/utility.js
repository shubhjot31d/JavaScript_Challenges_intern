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
  //let button1 = document.querySelectorAll(".in-cart");
  let billSectionRef = document.querySelector(".totals");
  let button = document.querySelectorAll(".add");
  let cartRef = document.querySelector(".cart-summary");
  let emptyElement = document.querySelector(".empty");
  //let cartPanel = document.querySelector(".panel cart");
  //let cartRefAsArray = document.querySelectorAll(".quantity__wrapper");
  
  let updateBill = () => {
    let totalAmount = 0;
    let tax = 0;
    Array.from(cartRef.children).forEach((element, idx1) => {
      totalAmount +=
        element.children[3].innerHTML.slice(1) *
        element.children[2].children[1].innerHTML;
    });
    tax = totalAmount * 0.0975;
    billSectionRef.children[0].children[1].innerHTML =
      "$ " + totalAmount.toFixed(2);
    billSectionRef.children[1].children[1].innerHTML = "$ " + tax.toFixed(2);
    billSectionRef.children[2].children[1].innerHTML =
      "$ " +
      (parseFloat(tax.toFixed(2)) + parseFloat(totalAmount.toFixed(2))).toFixed(
        2
      );
  };
  const switchButtonAccessibility = (buttonRef) => {
    buttonRef.disabled = !buttonRef.disabled;
  };
  
  const updateMenu = (text) => {
    button.forEach((buttonRef, buttonIndex) => {
      if (buttonRef.parentNode.children[0].innerHTML === text) {
        buttonRef.parentNode.children[2].innerHTML = "Add To Cart";
        buttonRef.parentNode.children[2].className = "add";
        switchButtonAccessibility(buttonRef);
      }
    });
  };
  const updateList = (childText, idx) => {
    Array.from(cartRef.children).forEach((element, idx1) => {
      if (
        childText == element.children[1].children[0].innerHTML &&
        menuItems[idx].count == 0
      ) {
        updateMenu(element.children[1].children[0].innerHTML);
        element.parentNode.removeChild(element);
      }
      if (Array.from(cartRef.children).length === 0) {
        emptyElement.innerHTML = "Your cart is empty.";
        console.log("hi");
      }
      element.children[0].children[1].innerHTML =
        element.children[2].children[1].innerHTML;
    });
  };
  
  const switchAddToCartButton = (buttonRef, buttonIndex) => {
    if (buttonRef.className === "in-cart") {
      buttonRef.className = "add";
      buttonRef.innerHTML = "Add To Cart";
    } else {
      buttonRef.className = "in-cart";
      buttonRef.innerHTML = "In Cart";
      const imgTBA = document.createElement("img");
      imgTBA.setAttribute("src", "images/check.svg");
      buttonRef.append(imgTBA);
      switchButtonAccessibility(buttonRef);
    }
  };
  let getImageFrame = (idx) => {
    let imageParent = document.createElement("div");
    imageParent.className = "plate";
    let imageItself = document.createElement("img");
    imageItself.className = "plate";
    imageItself.alt = menuItems[idx].alt;
    imageItself.src = "./images/" + menuItems[idx].image;
    let quantityOfItem = document.createElement("div");
    quantityOfItem.className = "quantity";
    quantityOfItem.innerHTML = menuItems[idx].count;
  
    imageParent.append(imageItself);
    imageParent.append(quantityOfItem);
    return imageParent;
  };
  let contentOfItemFn = (idx) => {
    let contentMainFrame = document.createElement("div");
    contentMainFrame.className = "content";
    let menu = document.createElement("p");
    let price = document.createElement("p");
    menu.className = "menu-item";
    menu.innerHTML = menuItems[idx].alt;
    price.className = "price";
    price.innerText = menuItems[idx].price / 100;
    contentMainFrame.append(menu);
    contentMainFrame.append(price);
    return contentMainFrame;
  };
  let getAltQnt = (idx, childText) => {
    let parentOfAlt = document.createElement("div");
    parentOfAlt.className = "quantity__wrapper";
    let decreaseQnt = document.createElement("button");
    let increaseQnt = document.createElement("button");
    let quantity = document.createElement("div");
    decreaseQnt.className = "decrease";
    let imgTBD1 = document.createElement("img");
    imgTBD1.src = "images/chevron.svg";
    decreaseQnt.append(imgTBD1);
    increaseQnt.className = "increase";
    let imgTBD2 = document.createElement("img");
    imgTBD2.src = "images/chevron.svg";
    increaseQnt.append(imgTBD2);
    quantity.className = "quantity";
    quantity.innerHTML = menuItems[idx].count;
    increaseQnt.addEventListener("click", () => {
      quantity.innerHTML++;
      menuItems[idx].count++;
      updateList(childText, idx);
      updateBill();
    });
  
    decreaseQnt.addEventListener("click", () => {
      quantity.innerHTML--;
      menuItems[idx].count--;
      updateList(childText, idx);
      updateBill();
    });
  
    parentOfAlt.append(decreaseQnt);
    parentOfAlt.append(quantity);
    parentOfAlt.append(increaseQnt);
    return parentOfAlt;
  };
  let getSubtotalFrame = (idx) => {
    let divTag = document.createElement("div");
    divTag.className = "subtotal";
    divTag.innerHTML = "$" + (menuItems[idx].count * menuItems[idx].price) / 100;
    return divTag;
  };
  const createCartFrame = (idx, childText) => {
    menuItems[idx].count = 1;
    let parentOfFrame = document.createElement("li");
    let imageOfFood = getImageFrame(idx);
    let contentOfItem = contentOfItemFn(idx);
    let altQuantity = getAltQnt(idx, childText);
    let subtotalFrame = getSubtotalFrame(idx);
    parentOfFrame.append(imageOfFood);
    parentOfFrame.append(contentOfItem);
    parentOfFrame.append(altQuantity);
    parentOfFrame.append(subtotalFrame);
  
    return parentOfFrame;
  };
  const addItemInTheCart = (buttonRef, idx) => {
    const parentOfATCButton = buttonRef.parentNode.parentNode;
    const childText = parentOfATCButton.querySelector(".content").children[0];
    return createCartFrame(idx, childText.innerHTML);
  };
  const addItemToCart = (buttonRef, buttonIndex) => {
    switchAddToCartButton(buttonRef, buttonIndex);
    let cartPageRef = addItemInTheCart(buttonRef, buttonIndex);
    cartRef.append(cartPageRef);
    emptyElement.innerHTML = "";
  };
  
  export {
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
  };
  