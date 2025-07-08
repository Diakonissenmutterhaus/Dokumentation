# Documentação

Este repositório contém um exemplo simples de site para documentações. As seções do `index.html` foram movidas para arquivos Markdown dentro do diretório `docs/`.

## Adicionando novas documentações

1. Crie um arquivo Markdown em `docs/` com o conteúdo desejado. Exemplo: `docs/novasecao.md`.
2. No `index.html`, adicione um item de menu apontando para o novo arquivo usando `docs/template.html?file=SEU_ARQUIVO.md`.
3. Acesse o link pelo navegador para visualizar o conteúdo carregado no template, que utiliza o mesmo estilo e script de dark mode da página principal.
