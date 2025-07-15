// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
});

// 表单提交处理
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());
        
        // 此处可添加AJAX提交逻辑
        console.log('表单提交数据:', data);
        
        // 显示成功消息
        alert('消息已发送！我会尽快回复您🎉');
        
        // 重置表单
        this.reset();
    });
}

// 作品卡片悬停效果增强
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 10px 25px #0087b3';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
});

// 页面加载动画
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // 添加访问者计数器
    const counter = localStorage.getItem('visitorCounter') || 0;
    localStorage.setItem('visitorCounter', parseInt(counter) + 1);
});