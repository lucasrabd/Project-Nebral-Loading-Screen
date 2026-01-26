(function(){
  const slideshow = document.getElementById("slideshow");
  const toast = document.getElementById("toast");
  const smallText = document.getElementById("smallText");
  const music = document.getElementById("bgMusic");

  // Música em volume médio (50%)
  if(music) {
    music.volume = 0.5;
    music.muted = false;
    music.loop = true;
    
    const forcePlay = () => {
      music.play()
        .then(() => console.log('Música tocando!'))
        .catch(err => {
          console.log('Tentando tocar música...', err);
          setTimeout(forcePlay, 500);
        });
    };
    
    forcePlay();
    music.addEventListener('canplay', forcePlay);
    music.addEventListener('loadeddata', forcePlay);
  }

  // Caminhos das imagens no Vercel
  const images = [
    "https://projectnebralload.vercel.app/img1.jpg",
    "https://projectnebralload.vercel.app/img2.jpg",
    "https://projectnebralload.vercel.app/img3.jpg",
    "https://projectnebralload.vercel.app/img4.jpg",
    "https://projectnebralload.vercel.app/img5.jpg",
    "https://projectnebralload.vercel.app/img6.jpg",
    "https://projectnebralload.vercel.app/img7.jpg"
  ];
  
  let currentIndex = 0;
  let isTransitioning = false;

  // Pré-carregar todas as imagens
  const preloadedImages = [];
  images.forEach((src, index) => {
    const img = new Image();
    img.onload = () => console.log('Imagem ' + (index + 1) + ' carregada');
    img.onerror = () => console.error('ERRO ao carregar imagem ' + (index + 1) + ': ' + src);
    img.src = src;
    preloadedImages.push(img);
  });

  // Função para trocar imagem com efeito fade
  function setImage(index) {
    if(isTransitioning) return;
    
    if(index < 0) index = images.length - 1;
    if(index >= images.length) index = 0;
    
    isTransitioning = true;
    
    // Fade out
    slideshow.classList.add('fade-out');
    
    setTimeout(() => {
      currentIndex = index;
      slideshow.style.backgroundImage = `url('${images[currentIndex]}')`;
      slideshow.classList.remove('fade-out');
      
      setTimeout(() => {
        isTransitioning = false;
      }, 2000);
      
    }, 1500);
  }

  // Inicia com a primeira imagem
  slideshow.style.backgroundImage = `url('${images[0]}')`;

  // Troca automática de imagens a cada 8 segundos
  setInterval(() => {
    setImage(currentIndex + 1);
  }, 8000);

  // Mensagens de loading
  const steps = [
    "Carregando interface…",
    "Baixando conteúdo do servidor…",
    "Montando shaders e materiais…",
    "Sincronizando entidades…",
    "Finalizando…",
    "Entrando no servidor…",
  ];
  
  let i = 0;
  setInterval(() => {
    if(i < steps.length){
      smallText.textContent = steps[i];
      i++;
    } else {
      i = 0;
    }
  }, 1600);

  function showToast(msg){
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(()=>toast.classList.remove("show"), 800);
  }

  // Navegação com setas
  document.addEventListener("keydown", (e) => {
    if(e.repeat) return;
    
    if(e.key === "ArrowLeft"){
      e.preventDefault();
      setImage(currentIndex - 1);
      showToast("Imagem anterior");
    }
    
    if(e.key === "ArrowRight"){
      e.preventDefault();
      setImage(currentIndex + 1);
      showToast("Próxima imagem");
    }
  });

  // Fallback música
  document.addEventListener('click', () => {
    if(music && music.paused) {
      music.volume = 0.5;
      music.muted = false;
      music.play();
    }
  }, { once: true });

  document.addEventListener('keydown', () => {
    if(music && music.paused) {
      music.volume = 0.5;
      music.muted = false;
      music.play();
    }
  }, { once: true });
})();
