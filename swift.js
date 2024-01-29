
document.addEventListener("DOMContentLoaded", function () {
    const merchGrid = document.getElementById("merchGrid");
    const merchItems = [
        { image: 'merch1.jpg', name: 'Item 1', description: 'Description of the item.' },
    { image: 'merch2.jpeg', name: 'Item 2', description: 'Description of the item.' },
    { image: 'merch3.jpg', name: 'Item 3', description: 'Description of the item.' },
    { image: 'merch4.jpg', name: 'Item 4', description: 'Description of the item.' },
    { image: 'merch5.jpg', name: 'Item 5', description: 'Description of the item.' },
    { image: 'merch6.jpg', name: 'Heart Photo Hoodie', description: 'Description of the item.' },
    { image: 'merch7.jpeg', name: 'Heather Gray Crewneck', description: 'Description of the item.' },
    { image: 'merch8.jpg', name: 'Item 8', description: 'Description of the item.' },
    { image: 'merch9.jpg', name: 'Item 9', description: 'Description of the item.' },
    { image: 'merch10.jpg', name: 'Item 10', description: 'Description of the item.' },
    { image: 'merch11.jpg', name: 'Item 11', description: 'Description of the item.' },
    { image: 'merch12.jpg', name: 'Item 12', description: 'Description of the item.' },
    { image: 'merch13.jpg', name: 'Item 13', description: 'Description of the item.' },
    { image: 'merch14.jpg', name: 'Item 14', description: 'Description of the item.' },
    { image: 'merch 18.jpg', name: 'Oversized T-Shirt', description: 'Description of the item.' },
    { image: 'merch16.jpg', name: 'Item 16', description: 'Description of the item.' },
    { image: 'merch17.jpg', name: 'Item 17', description: 'Description of the item.' },
    { image: 'merch18.jpg', name: 'Item 18', description: 'Description of the item.' },
    { image: 'merch19.jpg', name: 'Item 18', description: 'Description of the item.' },
    { image: 'merch20.jpg', name: 'Item 20', description: 'Description of the item.' },


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
