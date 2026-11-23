# BEKO.EXE 🏒

Site surpresa para pedir ao Beko para ser padrinho. HTML, CSS e JavaScript puro, sem dependências.

## Abrir
1. Extrai o ZIP.
2. Abre a pasta no Visual Studio Code.
3. Instala a extensão **Live Server** e escolhe **Open with Live Server** em `index.html`.
4. Navega pelos capítulos até ao remate final.

## Adicionar fotografias
Coloca as imagens em `assets/images/infancia/`, `assets/images/escola/` ou `assets/images/hoquei/`.
Edita apenas `js/config.js`, por exemplo:

```javascript
fotos: {
  infancia: ['assets/images/infancia/foto1.jpg'],
  escola: ['assets/images/escola/turma.jpg'],
  hoquei: ['assets/images/hoquei/equipa.jpg']
}
```

Podes adicionar quantas quiseres. As fotografias com outras pessoas também funcionam. Sem imagens, o site apresenta um espaço reservado.

## Personalizar
- `js/config.js`: fotografias, nomes e frases do botão NÃO.
- `index.html`: títulos e mensagens.
- `css/style.css`: cores e componentes.
- `css/responsive.css`: ajustes mobile.
- `js/hockey-animation.js`: movimento do jogador, bola e remate.

## Publicar e criar QR code
1. Cria um repositório público no GitHub e carrega **o conteúdo** da pasta `beko-exe`.
2. Em **Settings → Pages**, escolhe **Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. Aguarda a publicação e abre o URL `https://UTILIZADOR.github.io/REPOSITORIO/`.
4. Testa o URL num telemóvel. Depois cria um QR code para esse URL com um gerador da tua preferência e imprime-o no cartaz.

**Atenção:** GitHub Pages é público. As fotografias que publicares ficam acessíveis a quem tiver o endereço e potencialmente a outras pessoas.

## Testes recomendados
- Verifica cada capítulo, as galerias e o zoom das fotografias.
- Testa o botão NÃO com rato e toque e confirma que SIM permanece acessível.
- Testa a animação de golo num Android ou iPhone.
- Testa o QR code com outro telemóvel antes de o imprimir.
