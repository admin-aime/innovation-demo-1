function createStars() {
  const starsContainer = document.getElementById('stars');
  const starCount = 200;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    star.style.width = `${Math.random() * 3}px`;
    star.style.height = star.style.width;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    
    starsContainer.appendChild(star);
  }
}

function createRain() {
  const rainContainer = document.getElementById('rain');
  const raindropsCount = 100;

  for (let i = 0; i < raindropsCount; i++) {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    
    raindrop.style.left = `${Math.random() * 100}%`;
    raindrop.style.animationDelay = `${Math.random() * 2}s`;
    
    rainContainer.appendChild(raindrop);
  }
}

// Initialize cosmic and rainy effects
createStars();
createRain();
