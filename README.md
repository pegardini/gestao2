# livros.pcgdigital.com.br

Site do Pe. Pedro de Celso Gardini — livros, ferramentas pastorais e material de apoio.
Astro 5 com saída estática. O HTML, o CSS e o JavaScript já estão gerados em `dist/`, prontos
para publicar no Render sem etapa de build.

## Estrutura

```
src/            páginas, componentes e conteúdo (fonte)
public/         arquivos estáticos copiados para a raiz do site
dist/           site gerado — é esta pasta que o Render publica
astro.config.mjs
```

## Rotas

| Rota | Conteúdo |
|---|---|
| `/` | Página inicial |
| `/gestao-pastoral` | Livro *Gestão Pastoral* (impresso R$ 52,68 · Kindle R$ 31,99) |
| `/jesus-tora` | *Jesus, a Torá e a Identidade Judaica* (Kindle R$ 17,73) |
| `/o-essencial` | *O Essencial é Invisível aos Olhos* (em preparação) |
| `/leia-o-primeiro-capitulo` | Capítulo 1 de *Gestão Pastoral* |
| `/o-essencial/primeiro-capitulo` | Mesma prévia, endereço antigo preservado (noindex) |
| `/ferramentas` | Roda da Vida, Metas SMART, SWOT, Eisenhower, 5W2H e checklist |
| `/relatorio-financeiro` | Relatório financeiro pastoral (noindex) |
| `/privacidade` | Política de privacidade |
| `/redes/` | Imagens para redes sociais (galeria + arquivos) |
| `/sobre`, `/recursos`, `/contato` | Páginas institucionais |
| `/livros/...` | Endereços antigos dos livros, mantidos com canonical para as rotas novas |

O arquivo `google345f10a5f59b8a6b.html` (verificação do Google Search Console) fica na raiz e
não deve ser removido.

## Publicar no Render

1. **New → Static Site** e escolha este repositório, branch `main`.
2. **Build Command**: deixe vazio (o site já está em `dist/`).
3. **Publish Directory**: `dist`.
4. Em **Custom Domains**, adicione `livros.pcgdigital.com.br` e crie no seu provedor de DNS o
   registro indicado pelo Render (CNAME para o endereço do serviço).

O arquivo `render.yaml` descreve a mesma configuração, caso você prefira usar um Blueprint.

## Alterar o conteúdo

Requisitos: Node.js 20+ e pnpm (ou npm).

```bash
pnpm install
pnpm dev      # servidor local em http://localhost:3000
pnpm build    # regenera dist/
```

Depois do build, faça commit de `src/`, `public/` e `dist/` — o Render publica exatamente o que
está em `dist/`.

## Foto do autor

O hero usa a foto oficial quando o arquivo `public/images/autor.jpg` existe; sem ele, mostra a
placa com o monograma PG. Para trocar a foto, basta salvar o arquivo nesse caminho e rodar
`pnpm build` novamente. A página `/sobre` mantém a foto litúrgica original.
