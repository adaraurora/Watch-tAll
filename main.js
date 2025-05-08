// HOME-HERO

const swiper = new Swiper(".mySwiper", {
    loop: true,
    speed: 800, 
    autoplay: {
      delay: 6000, 
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".popular-next",
        prevEl: ".popular-prev",
    }      
  });

// POPULAR RANK

  document.addEventListener('DOMContentLoaded', () => {
    const prev = document.querySelector('.bx-left-arrow-alt');
    const next = document.querySelector('.bx-right-arrow-alt');
    const cardList = document.querySelector('.card-list');
  
    const scrollAmount = 800;
  
    prev.addEventListener('click', () => {
      if (cardList.scrollLeft === 0) {
        cardList.scrollTo({ left: cardList.scrollWidth, behavior: 'smooth' });
      } else {
        cardList.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    });
  
    next.addEventListener('click', () => {
      const maxScrollLeft = cardList.scrollWidth - cardList.clientWidth;
      if (Math.ceil(cardList.scrollLeft) >= maxScrollLeft) {
        cardList.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        cardList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    });
  });

// PASSWORD

function togglePassword() {
  const passwordInput = document.getElementById("password");
  const icon = document.querySelector(".toggle-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.remove("bx-hide");
    icon.classList.add("bx-show");
  } else {
    passwordInput.type = "password";
    icon.classList.remove("bx-show");
    icon.classList.add("bx-hide");
  }
}

document.querySelectorAll('.toggle-password').forEach(icon => {
  icon.addEventListener('click', () => {
    const targetId = icon.getAttribute('data-target');
    const input = document.getElementById(targetId);

    if (input.type === "password") {
      input.type = "text";
      icon.classList.remove("bx-hide");
      icon.classList.add("bx-show");
    } else {
      input.type = "password";
      icon.classList.remove("bx-show");
      icon.classList.add("bx-hide");
    }
  });
});

