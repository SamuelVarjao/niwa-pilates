# Niwa Pilates — Site

Site institucional do **Niwa Pilates**, studio de Pilates Clínico Contemporâneo em
Mogi das Cruzes – SP.

Site estático (HTML, CSS e JavaScript, sem frameworks) com foco em carregamento rápido:

- Imagens em **WebP**
- Vídeo do hero servido via **CDN (Cloudinary)**
- Animações de scroll leves com **IntersectionObserver**
- Layout responsivo (desktop e mobile)

## Estrutura

| Arquivo | Descrição |
|---|---|
| `index.html` | Página única do site |
| `style.css` | Estilos (design moderno, paleta e tipografia) |
| `main.js` | Interações: menu mobile, animações de scroll, formulário → WhatsApp |
| `logo-niwa.webp` | Logo oficial |
| `*.webp` | Imagens do estúdio, ícones e banners |
| `*.mp4` | Depoimentos em vídeo |

## Como visualizar

Abra o `index.html` no navegador, ou sirva a pasta localmente:

```bash
python -m http.server 8000
```

E acesse `http://localhost:8000`.
