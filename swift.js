
document.addEventListener("DOMContentLoaded", function () {
    const merchGrid = document.getElementById("merchGrid");
    const merchItems = [
        { image: 'merch1.jpg', name: 'Black T-Shirt', description: 'Available in S, M, L, XL <br> $45' },
    { image: 'merch2.jpeg', name: 'White Crewneck', description: 'Available in S, M, L, XL <br> $65' },
    { image: 'merch3.jpg', name: 'Black T-Shirt', description: 'Available in S, M, L, XL <br> $45' },
    { image: 'merch4.jpg', name: 'I Just Want To Stay Crewneck', description: 'Available in S, M, L, XL <br> $65' },
    { image: 'merch5.jpg', name: 'Collage Black Long Sleeve', description: 'Available in S, M, L, XL <br> $55' },
    { image: 'merch6.jpg', name: 'Heart Photo Hoodie', description: 'Available in S, M, L, XL <br> $75' },
    { image: 'merch7.jpeg', name: 'Heather Gray Crewneck', description: 'Available in S, M, L, XL <br> $65' },
    { image: 'merch8.jpg', name: 'Gray Crewneck', description: 'Available in S, M, L, XL <br> $65' },
    { image: 'merch9.jpg', name: 'Collage White Hoodie', description: 'Available in S, M, L, XL <br> $75' },
    { image: 'merch10.jpg', name: 'Live Photo Stars T-Shirt', description: 'Available in S, M, L, XL <br> $45' },
    { image: 'merch11.jpg', name: '1989 Album T-Shirt', description: 'Available in S, M, L, XL <br> $45' },
    { image: 'merch12.jpg', name: 'Reputation Album T-Shirt', description: 'Available in S, M, L, XL <br> $45' },
    { image: 'merch13.jpg', name: 'Cropped Beige Pullover', description: 'Available in S, M, L, XL <br> $65' },
    { image: 'merch14.jpg', name: 'RED (Taylor Version) Album T-Shirt', description: 'Available in S, M, L, XL <br> $45' },
    { image: 'merch 18.jpg', name: 'Oversized T-Shirt', description: 'Available in S, M, L <br> $45' },
    { image: 'merch16.jpg', name: 'The Eras Tour Poster', description: '$30' },
    { image: 'merch17.jpg', name: 'US Dates Black Hoodie', description: 'Available in S, M, L, XL <br> $75' },
    { image: 'merch18.jpg', name: 'Fearless (Taylor Version) Album T-Shirt', description: 'Available in S, M, L, XL <br> $45' },
    { image: 'merch19.jpg', name: 'Midnights Album T-Shirt', description: 'Available in S, M, L, XL <br> $45' },
    { image: 'merch20.jpg', name: 'Guitar Pick-Shaped Coasters', description: '$35' },
    ];

    merchItems.forEach(item => {
        const merchItem = document.createElement("div");
        merchItem.className = "merch-item";

        merchItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="merch-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="buy-button-container">
                    <button class="buy-button">Buy</button>
                </div>
            </div>
        `;
        merchGrid.appendChild(merchItem);
    });

});
