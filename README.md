# 🪖 Project Nebral — Loading Screen

Tela de carregamento (loading screen) para servidor FiveM, com tema militar/operação ("Project Nebral — Teatro do Iraque"). Slideshow de imagens com fade, música de fundo, mensagens de progresso rotativas e navegação por teclado.

---

## 📦 Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![FiveM](https://img.shields.io/badge/FiveM-Loading%20Screen-F40552?style=flat)

---

## 📁 Estrutura

```
Project-Nebral-Loading-Screen-master/
├── index.html      # Estrutura da tela (branding, status, dicas, loader)
├── style.css        # Visual dark/military — vinheta, grain, blur, animações
├── app.js             # Slideshow, música, mensagens de progresso, navegação
├── music.mp3           # Trilha de fundo (loop, ~4MB)
└── img1.jpg … img7.jpg   # Imagens do slideshow (não usadas diretamente — ver aviso abaixo)
```

---

## ⚠️ Pontos de atenção

- **Sem `fxmanifest.lua`**: este projeto não tem o manifesto de recurso do FiveM. Para funcionar como loading screen no servidor, é necessário criar um `fxmanifest.lua` na raiz com `loadscreen 'index.html'` e declarar `files` (html/css/js/imagens/áudio). Sem isso, o Cfx.re não reconhece a pasta como resource.
- **Imagens carregadas de URL externa, não localmente**: apesar de `img1.jpg` a `img7.jpg` estarem no projeto, o `app.js` busca as imagens de `https://projectnebralload.vercel.app/img1.jpg` … `img7.jpg` — ou seja, o slideshow depende de uma conexão com a internet e do deploy no Vercel estar no ar. Os arquivos `.jpg` locais parecem ser apenas a fonte usada para gerar esse deploy, mas não são referenciados por caminho relativo no código. Se o Vercel cair, o slideshow quebra mesmo com as imagens presentes na pasta.
- **`music.mp3` tem ~4 MB**: pode pesar no tempo de download da loading screen dependendo da conexão do jogador. Autoplay com música é tratado com múltiplos fallbacks (`canplay`, `loadeddata`, clique, tecla) por causa das políticas de autoplay dos navegadores/CEF.

---

## 🎮 Funcionalidades

- **Slideshow automático** — troca de imagem a cada 8 segundos com fade in/out.
- **Navegação manual** — setas `◀` `▶` do teclado trocam a imagem manualmente, com toast de feedback ("Imagem anterior" / "Próxima imagem").
- **Música de fundo em loop** a 50% de volume, com múltiplas tentativas de autoplay para contornar bloqueios do navegador.
- **Mensagens de progresso rotativas** (a cada 1.6s): "Carregando interface…", "Baixando conteúdo do servidor…", "Montando shaders e materiais…", "Sincronizando entidades…", "Finalizando…", "Entrando no servidor…".
- **Indicador de status** com dot pulsante ("Conectando e baixando conteúdo…").
- **Visual atmosférico**: vinheta radial, grain (ruído SVG), blur de fundo, tipografia em caixa alta com letter-spacing — estética militar/dark.

---

## 🚀 Instalação como resource FiveM

1. Copie a pasta do projeto para `resources/[loadscreen]/project-nebral-loading/` no servidor.
2. Crie um `fxmanifest.lua` na raiz da pasta:

```lua
fx_version 'cerulean'
game 'gta5'

loadscreen 'index.html'

files {
    'index.html',
    'style.css',
    'app.js',
    'music.mp3',
    'img1.jpg', 'img2.jpg', 'img3.jpg',
    'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg'
}
```

3. Adicione `ensure project-nebral-loading` ao `server.cfg`.
4. **Opcional/recomendado:** troque os caminhos das imagens em `app.js` de URLs do Vercel para caminhos locais (`img1.jpg`, `img2.jpg`, ...), evitando dependência externa:

```js
const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg"];
```

---

## 📄 Licença

Não especificada.
