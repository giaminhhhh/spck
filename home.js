function buyTicket(quantityId, price) {
    const quantity = parseInt(document.getElementById(quantityId).value);
    if (isNaN(quantity) || quantity < 1) {
        alert("Vui lòng nhập số lượng vé hợp lệ!");
        return;
    }

    const totalCost = quantity * price;
    updateTotalPrice(totalCost);
}

function updateTotalPrice(amount) {
    const totalPriceElement = document.getElementById("totalPrice");
    const currentTotal = parseInt(totalPriceElement.dataset.total) || 0;
    const newTotal = currentTotal + amount;

    totalPriceElement.dataset.total = newTotal;
    totalPriceElement.innerText = `Tổng tiền: ${newTotal.toLocaleString()} VND`;
}

function checkout() {
    const totalPriceElement = document.getElementById("totalPrice");
    const totalAmount = parseInt(totalPriceElement.dataset.total) || 0;

    if (totalAmount === 0) {
        alert("Giỏ hàng của bạn trống. Vui lòng chọn vé trước khi thanh toán.");
    } else {
        alert(`Tổng số tiền thanh toán là: ${totalAmount.toLocaleString()} VND`);
        // Reset giỏ hàng sau khi thanh toán
        totalPriceElement.dataset.total = 0;
        totalPriceElement.innerText = "Tổng tiền: 0 VND";
    }
}

function logout() {
    const confirmLogout = confirm("Bạn có chắc chắn muốn đăng xuất?");
    if (confirmLogout) {
        alert("Bạn đã đăng xuất thành công!");
        // Chuyển hướng hoặc thực hiện hành động đăng xuất
        window.location.href = "Sign In.html";
    }
}