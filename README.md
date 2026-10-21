# SafeWatch — demonstração pública

Demo estática de registros da **Camera Demo**, autorizada pelo responsável pelos dados para publicação pública.

Acesse https://quickium.github.io/safe-compliance-demo/.

- Nove ocorrências de 21/10/2026, todas sem PTE associada.
- Galeria, filtros, tabela, origem de cada registro e arquivos originais identificados por SHA-256.
- Análise real das nove imagens com Jev: 126 respostas (14 sim, 41 não, 71 não verificável).
- Dossiê de exemplo em PDF e DOCX, com alvos e confiança das respostas.
- Critérios visuais em rascunho; nenhuma declaração de atendimento normativo.

O navegador não chama APIs de IA e não contém chaves. Os resultados são previamente processados pela plataforma Django. O GitHub Pages não executa o backend, login, novas análises ou geração de novos documentos.

Para testar localmente, sirva esta pasta com um servidor HTTP, por exemplo `python -m http.server 8765`, e abra http://localhost:8765.

O Pages publica a branch `main`, pasta raiz. Alterações enviadas a essa branch atualizam a demo.

As fotos fornecidas já possuem marcações de detecção. A análise utilizou cópias de até 1024 pixels, preservando os originais. Os tipos registrados na planilha não foram enviados como gabarito ao modelo. A observação de imagem não comprova infração normativa ou conformidade e requer revisão humana.

Fotos e identidade visual não recebem uma licença de redistribuição por este README. A disponibilização nesta demo foi autorizada pelo responsável; não constitui autorização geral de reutilização.
