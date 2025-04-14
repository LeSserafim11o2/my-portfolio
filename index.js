// Hiệu ứng scroll mượt
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Lấy các phần tử cần thiết
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeIcon = document.getElementById('dark-mode-icon');
const body = document.body;
// Kiểm tra chế độ hiện tại trong localStorage
let isDarkMode = localStorage.getItem('darkMode') === 'true';
// Cập nhật giao diện ban đầu
updateDarkMode();
// Thêm sự kiện click cho nút chuyển đổi
darkModeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode; // Đảo ngược chế độ
    localStorage.setItem('darkMode', isDarkMode); // Lưu vào localStorage
    updateDarkMode(); // Cập nhật giao diện
});
// Hàm cập nhật giao diện
function updateDarkMode() {
    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
    } else {
        body.classList.remove('dark-mode');
        darkModeIcon.classList.remove('fa-sun');
        darkModeIcon.classList.add('fa-moon');
    }
}

// Danh sách các text sẽ hiển thị
const texts = [
    "Nam Còi Coder",
    "Người thích Kpop",
    "Đam mê Mukbang",
    "Thích bóng đá",
    "Người tâm sự"
];
let index = 0;
const typewriterElement = document.querySelector('.typewriter');
function updateText() {
    // Tạm dừng animation
    typewriterElement.style.animation = 'none';
    typewriterElement.offsetHeight; // Kích hoạt reflow
    typewriterElement.style.animation = null; // Bật lại animation
    // Thay đổi text
    typewriterElement.textContent = texts[index];
    index = (index + 1) % texts.length; // Lặp lại từ đầu sau khi hết danh sách
}
// Thời gian cho mỗi chu kỳ gõ và xóa chữ
const cycleTime = 5000; // 5 giây
// Cập nhật text sau mỗi chu kỳ
setInterval(updateText, cycleTime);
// Khởi tạo text ban đầu
updateText();

// Lấy các phần tử cần thiết
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const switchToLogin = document.getElementById('switch-to-login');
const switchToRegister = document.getElementById('switch-to-register');
// Chuyển sang form đăng nhập
switchToLogin.addEventListener('click', (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
    registerForm.classList.remove('active-form');
    registerForm.classList.add('hidden-form');
    loginForm.classList.remove('hidden-form');
    loginForm.classList.add('active-form');
});
// Chuyển sang form đăng ký
switchToRegister.addEventListener('click', (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
    loginForm.classList.remove('active-form');
    loginForm.classList.add('hidden-form');
    registerForm.classList.remove('hidden-form');
    registerForm.classList.add('active-form');
});