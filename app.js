(function(){
  const slideshow = document.getElementById("slideshow");
  const toast = document.getElementById("toast");
  const smallText = document.getElementById("smallText");
  const music = document.getElementById("bgMusic");

  // Forçar música em alto volume e play automático (GMod)
  if(music) {
    music.volume = 1.0;
    music.muted = false;
    
    // Tentar play imediatamente
    music.play().catch(err => console.log('Erro ao tocar música:', err));
    
    // Garantir play quando carregar
    music.addEventListener('loadeddata', () => {
      music.play().catch(err => console.log('Erro ao tocar música:', err));
    });
  }

  // Array com as 7 imagens
  const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg"
  ];
  
  let currentIndex = 0;
  let isTransitioning = false;

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
      }, 2000); // Tempo do fade in
      
    }, 1500); // Tempo do fade out
  }

  // Inicia com a primeira imagem
  slideshow.style.backgroundImage = `url('${images[0]}')`;

  // Troca automática de imagens a cada 6 segundos (tempo para fade completo + visualização)
  setInterval(() => {
    setImage(currentIndex + 1);
  }, 8000);

  // Mensagens de loading que vão alternando
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
      i = 0; // Recomeça o ciclo se demorar muito
    }
  }, 1600);

  function showToast(msg){
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(()=>toast.classList.remove("show"), 800);
  }

  // Navegação com setas do teclado
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
})();
