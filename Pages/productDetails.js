// cart.js

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve saved product details from localStorage
    const savedProductDetails = JSON.parse(localStorage.getItem('selectedProduct'));

    if (savedProductDetails) {
        // Update product information on cart.html
        updateProductDetails(savedProductDetails);
        updateSliderImage(savedProductDetails.img);
    }
});

function updateProductDetails(productDetails) {
    // Update product details on cart.html based on the provided information
    const productTitleElement = document.querySelector('.product__info--title');
    const productPriceElement = document.querySelector('.info__pricing--price');

    // Update the elements with the new product details
    productTitleElement.textContent = productDetails.name || '';
    productPriceElement.textContent = `$${productDetails.price}` || '';

    // Add any other elements that need to be updated
}

function updateSliderImage(imagePath) {
    // Identify the img element with the class 'slider-btn next'
    const sliderImage = document.querySelector('.slider__img');

    // Update the src attribute with the new image path
    if (sliderImage) {
        sliderImage.src = imagePath || ''; // Use the actual property from the product details
    }
}

