function showProductDetails(clickedCard) {
    // Find the img element within the clicked card
    const imgElement = clickedCard.querySelector('.card-img-top');

    // Retrieve the src attribute value
    const srcValue = imgElement.src;
    const productDetails = {
        id: clickedCard.id,
        name: clickedCard.querySelector('.fw-bolder').innerText,
        price: clickedCard.querySelector('.price').innerText,
        img: srcValue
        
        
        // Add more properties as needed
    };
    console.log(productDetails)
    // Save selected product details to localStorage
    localStorage.setItem('selectedProduct', JSON.stringify(productDetails));

    // Navigate to the new HTML file
    window.location.href = 'productDetails.html';
}