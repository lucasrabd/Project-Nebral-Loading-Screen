(function(){
  const video = document.getElementById("bgVideo");
  const toast = document.getElementById("toast");
  const barFill = document.getElementById("barFill");
  const smallText = document.getElementById("smallText");

  // Fake progress (o GMod não dá % real por padrão na LoadingURL)
  const steps = [
    { w: 22, t: "Carregando interface…" },
    { w: 38, t: "Baixando conteúdo do servidor…" },
    { w: 55, t: "Montando shaders e materiais…" },
    { w: 72, t: "Sincronizando entidades…" },
    { w: 88, t: "Finalizando…" },
    { w: 96, t: "Entrando no servidor…" },
  ];
  let i = 0;
  setInterval(() => {
    if(i < steps.length){
      barFill.style.width = steps[i].w + "%";
      smallText.textContent = steps[i].t;
      i++;
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

  // Alguns browsers exigem interação do usuário pra autoplay
  document.addEventListener("click", () => {
    if(video && video.paused){
      video.play().catch(()=>{});
    }
  }, { once: true });
})();
