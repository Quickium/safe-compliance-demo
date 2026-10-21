# SafeWatch — demonstração pública

Acesse https://quickium.github.io/safe-compliance-demo/.

A demonstração estática permite selecionar a câmera e o período e gerar um PDF no próprio navegador. A opção “Analisar imagens” inclui as observações já processadas para as nove imagens da Camera Demo, de 21/10/2026. Não realiza novas chamadas a modelos de IA.

- Seleção por câmera e datas, com contagem das ocorrências.
- Relatório de registros e evidências, com análise visual opcional.
- Quatorze critérios de segurança, com resultados sim, não e não verificável.
- Geração e download de PDF com jsPDF, distribuído localmente com sua licença em `vendor/`.
- Nenhum backend, login ou chave de API é necessário para esta demonstração.

Os registros da Camera Demo foram autorizados pelo responsável pelos dados para publicação pública. As imagens originais contêm marcações de detecção. A análise utilizou cópias reduzidas e não comprova infração normativa ou conformidade. Os resultados exigem revisão humana.

Fotos e identidade visual não recebem uma licença de redistribuição por este README. A disponibilização nesta demonstração foi autorizada pelo responsável; não constitui autorização geral de reutilização.

Para testar localmente, sirva esta pasta com um servidor HTTP. O GitHub Pages publica a branch `main`, pasta raiz.
