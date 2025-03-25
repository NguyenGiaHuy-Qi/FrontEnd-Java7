let arr = [];
function displayMenu() {
    console.log("\nMENU");
    console.log("1. Nhập vào mảng");
    console.log("2. Hiển thị mảng");
    console.log("3. Thêm phần tử");
    console.log("4. Sửa phần tử");
    console.log("5. Xóa phần tử");
    console.log("6. Thoát");
}
function inputArray() {
    let input = prompt("Nhập các số cách nhau bằng dấu phẩy (,):");
    arr = input.split(",").map(Number);
}
function displayArray() {
    console.log("Mảng hiện tại:", arr);
}
function addElement() {
    let newElement = Number(prompt("Nhập phần tử cần thêm:"));
    arr.push(newElement);
}
function editElement() {
    let index = Number(prompt("Nhập vị trí cần sửa (bắt đầu từ 0):"));
    if (index >= 0 && index < arr.length) {
        let newValue = Number(prompt("Nhập giá trị mới:"));
        arr[index] = newValue;
    } else {
        console.log("Vị trí không hợp lệ!");
    }
}

function deleteElement() {
    let index = Number(prompt("Nhập vị trí cần xóa (bắt đầu từ 0):"));
    if (index >= 0 && index < arr.length) {
        arr.splice(index, 1);
    } else {
        console.log("Vị trí không hợp lệ!");
    }
}
function main() {
    let choice;
    do {
        displayMenu();
        choice = Number(prompt("Lựa chọn của bạn:"));

        switch (choice) {
            case 1:
                inputArray();
                break;
            case 2:
                displayArray();
                break;
            case 3:
                addElement();
                break;
            case 4:
                editElement();
                break;
            case 5:
                deleteElement();
                break;
            case 6:
                console.log("Thoát chương trình...");
                break;
            default:
                console.log("Lựa chọn không hợp lệ!");
        }
    } while (choice !== 6);
}

main();