const items = document.querySelectorAll('.item');
const totalPriceDisplay = document.getElementById('totalPrice');

let totalPrice = 0;

items.forEach(item => {
    const plusBtn = item.querySelector('.plus');
    const minusBtn = item.querySelector('.minus');
    const deleteBtn = item.querySelector('.delete');
    const likeBtn = item.querySelector('.like');

    let quantity = parseInt(item.querySelector('.quantity').textContent);

    plusBtn.addEventListener('click', () => {
        quantity++;
        item.querySelector('.quantity').textContent = quantity;
        updateTotalPrice();
    });

    minusBtn.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            item.querySelector('.quantity').textContent = quantity;
            updateTotalPrice();
        }
    });

    deleteBtn.addEventListener('click', () => {
        const pricePerItem = 10; 
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        const itemTotalPrice = pricePerItem * quantity;
        totalPrice -= itemTotalPrice;
        totalPriceDisplay.textContent = totalPrice.toFixed(2);
        item.remove();
    });

    likeBtn.addEventListener('click', () => {
        if (likeBtn.classList.contains('liked')) {
            likeBtn.classList.remove('liked');
            likeBtn.classList.add('like');
        } else {
            likeBtn.classList.remove('like');
            likeBtn.classList.add('liked');
        }
    });
});

function updateTotalPrice() {
    totalPrice = 0;
    items.forEach(item => {
        let quantity = parseInt(item.querySelector('.quantity').textContent);
        totalPrice += quantity * 10; 
    });
    totalPriceDisplay.textContent = totalPrice.toFixed(2);
}

updateTotalPrice();