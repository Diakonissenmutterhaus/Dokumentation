# Documentação

Este repositório contém um exemplo simples de site para documentações. As seções do `index.html` foram movidas para arquivos Markdown dentro do diretório `docs/` e algumas páginas de exemplo já foram adicionadas para demonstração.

## Adicionando novas documentações

1. Crie um arquivo Markdown em `docs/` com o conteúdo desejado. Exemplo: `docs/novasecao.md`.
2. No `index.html`, adicione um item de menu apontando para o novo arquivo usando `docs/template.html?file=SEU_ARQUIVO.md`.
3. Acesse o link pelo navegador para visualizar o conteúdo carregado no template, que utiliza o mesmo estilo e script de dark mode da página principal.
4. Utilize o formulário na página inicial para criar novas páginas. Informe um título e o texto em Markdown; o conteúdo é salvo no navegador (localStorage) e reaparece sempre que o site for aberto novamente.

> **Atenção:** o formulário apenas armazena os textos no seu navegador. Para disponibilizar essas páginas para outras pessoas, crie os arquivos Markdown correspondentes no diretório `docs/` e envie as alterações para este repositório (ou utilize algum serviço de armazenamento compartilhado).
