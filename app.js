(function(){
  const video = document.getElementById("bgVideo");
  const toast = document.getElementById("toast");
  const smallText = document.getElementById("smallText");

  // GMod loading screen - FORÇAR play do vídeo COM SOM
  if(video) {
    video.volume = 1.0;
    video.muted = false;
    
    // Forçar play assim que o vídeo estiver pronto
    video.addEventListener('loadedmetadata', () => {
      video.play().catch(err => console.log('Erro ao tocar:', err));
    });
    
    // Tentar play imediatamente também
    video.play().catch(err => console.log('Erro ao tocar:', err));
  }

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

  function togglePause(){
    if(!video) return;
    if(video.paused){
      video.play().catch(()=>{});
      showToast("Vídeo retomado");
    } else {
      video.pause();
      showToast("Vídeo pausado");
    }
  }

  // Tecla P (maiúsculo ou minúsculo)
  document.addEventListener("keydown", (e) => {
    if(e.repeat) return;
    if(e.key === "p" || e.key === "P"){
      e.preventDefault();
      togglePause();
    }
  });
})();
