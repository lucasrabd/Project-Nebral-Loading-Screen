# 🪖 Project Nebral — Loading Screen

Tela de carregamento (loading screen) para servidor de **Garry's Mod**, com tema militar/operação ("Project Nebral — Teatro do Iraque"). Slideshow de imagens com fade, música de fundo, mensagens de progresso rotativas e navegação por teclado.

---

## 📦 Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Garry's Mod](https://img.shields.io/badge/Garry's%20Mod-Loading%20Screen-000000?style=flat)

---

## 📁 Estrutura

```
Project-Nebral-Loading-Screen-master/
├── index.html      # Estrutura da tela (branding, status, dicas, loader)
├── style.css        # Visual dark/military — vinheta, grain, blur, animações
├── app.js             # Slideshow, música, mensagens de progresso, navegação
├── music.mp3           # Trilha de fundo (loop)
└── img1.jpg … img7.jpg   # Imagens do slideshow
```

---

## 🎮 Funcionalidades

- **Slideshow automático** — troca de imagem a cada 8 segundos com fade in/out.
- **Navegação manual** — setas `◀` `▶` do teclado trocam a imagem manualmente, com toast de feedback ("Imagem anterior" / "Próxima imagem").
- **Música de fundo em loop** a 50% de volume, com múltiplas tentativas de autoplay para contornar bloqueios do navegador.
- **Mensagens de progresso rotativas** (a cada 1.6s): "Carregando interface…", "Baixando conteúdo do servidor…", "Montando shaders e materiais…", "Sincronizando entidades…", "Finalizando…", "Entrando no servidor…".
- **Indicador de status** com dot pulsante ("Conectando e baixando conteúdo…").
- **Visual atmosférico**: vinheta radial, grain (ruído SVG), blur de fundo, tipografia em caixa alta com letter-spacing — estética militar/dark.

---

## 🚀 Instalação

1. Hospede a pasta do projeto (ex: em um subdomínio ou serviço estático como Vercel/Netlify) ou coloque os arquivos dentro do addon/gamemode do servidor.
2. No `server.cfg`, aponte a loading screen para o `index.html`:

```
sv_loadingurl "https://seu-dominio.com/index.html"
```

3. Reinicie o servidor para aplicar.

---

## 📄 Licença

Não especificada.
