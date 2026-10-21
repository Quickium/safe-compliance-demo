"use strict";
(() => {
  const GROUPS = [
    { title: "Equipamentos de proteção", items: [["helmet-visible", "Capacete"], ["gloves-visible", "Luvas"], ["vest-visible", "Colete"], ["earmuffs-visible", "Proteção auditiva"], ["eye-protection-visible", "Óculos"], ["face-shield-visible", "Proteção facial"], ["respirator-visible", "Proteção respiratória"], ["safety-footwear-visible", "Calçado de segurança"]] },
    { title: "Proteção contra quedas", items: [["harness-visible", "Cinturão"], ["lanyard-connected", "Talabarte"], ["lifeline-present", "Linha de vida"]] },
    { title: "Condições do ambiente", items: [["risk-area-signage", "Sinalização"], ["walkway-obstructed", "Circulação"], ["confined-space-attendant", "Pessoa no acesso"]] }
  ];
  const ANSWERS = {yes:"Sim", no:"Não", not_verifiable:"Não verificável"};
  const date = value => value.split("-").reverse().join("/");
  const dateTime = value => new Intl.DateTimeFormat("pt-BR", {timeZone:"America/Sao_Paulo", day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(value));
  function selectRecords(records, {camera, start, end}) {
    const validDate = value => /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value)) && new Date(value).toISOString().slice(0,10) === value;
    if (!validDate(start) || !validDate(end)) throw Error("Informe as datas inicial e final.");
    if (end < start) throw Error("A data final deve ser posterior ou igual à inicial.");
    if (!camera) throw Error("Selecione uma câmera.");
    return records.filter(row => String(row.camera_id) === String(camera) && row.local_datetime.slice(0,10) >= start && row.local_datetime.slice(0,10) <= end).sort((a,b) => a.local_datetime.localeCompare(b.local_datetime));
  }
  async function generateReport({rows, cameraName, start, end, analyze, onProgress = () => {}}) {
    if (!rows.length) throw Error("Não há ocorrências no período selecionado.");
    if (analyze && rows.some(row => !row.observation || GROUPS.some(group => group.items.some(([id]) => !row.observation.answers[id])))) throw Error("Uma ou mais imagens não têm análise disponível. Gere o relatório sem a análise de imagens.");
    const {jsPDF} = globalThis.jspdf;
    const doc = new jsPDF({unit:"mm",format:"a4",compress:true});
    const width=178, left=16, limit=272;
    let y=22;
    const newPage = () => { doc.addPage(); y=20; doc.setFont("helvetica","normal");doc.setFontSize(8);doc.setTextColor(125,140,160);doc.text("SafeWatch | Relatório de ocorrências",left,12); };
    const ensure = height => { if(y+height>limit) newPage(); };
    const paragraph = (text, size=9, color=[87,105,130]) => { doc.setFont("helvetica","normal");doc.setFontSize(size);doc.setTextColor(...color);const lines=doc.splitTextToSize(text,width);const lineHeight=size*.47;ensure(lines.length*lineHeight+3);doc.text(lines,left,y);y+=lines.length*lineHeight+3; };
    const heading = text => {ensure(15);y+=4;doc.setFont("helvetica","bold");doc.setFontSize(12);doc.setTextColor(37,62,99);doc.text(text,left,y);y+=8;};
    const table = (headers, widths, values, compact=false) => {
      const header = () => {doc.setFillColor(237,242,248);doc.rect(left,y,width,8,"F");doc.setTextColor(65,87,117);doc.setFont("helvetica","bold");doc.setFontSize(8);let x=left;headers.forEach((label,i)=>{doc.text(label,x+2.5,y+5.2);x+=widths[i];});y+=8;};
      ensure(20);header();
      values.forEach((row,index)=>{doc.setFont("helvetica","normal");doc.setFontSize(8);const cells=row.map((text,i)=>doc.splitTextToSize(String(text),widths[i]-5));const height=Math.max(...cells.map(lines=>lines.length))*3.9+(compact?3:5);
        if(y+height>limit){newPage();header();doc.setFont("helvetica","normal");doc.setFontSize(8);}
        if(index%2===0){doc.setFillColor(249,251,253);doc.rect(left,y,width,height,"F");}
        doc.setTextColor(67,85,110);let x=left;cells.forEach((lines,i)=>{doc.text(lines,x+2.5,y+4.8);x+=widths[i];});y+=height;
      });y+=5;
    };
    doc.setProperties({title:`Relatório - ${cameraName} - ${date(start)} a ${date(end)}`,author:"SafeWatch",subject:"Registros e evidências de segurança"});
    doc.setFont("helvetica","bold");doc.setFontSize(20);doc.setTextColor(32,53,83);doc.text("Relatório de ocorrências",left,y);y+=10;
    paragraph(`${cameraName} | ${date(start)} a ${date(end)} | Horário de Brasília`,10);
    paragraph(`Gerado em ${dateTime(new Date().toISOString())} | Ambiente de demonstração`,8);
    heading("Resumo do período");
    paragraph(`${rows.length} ocorrências selecionadas, com ${rows.length} referências de imagem. ${rows.filter(row=>row.pte===null).length} sem PTE associada. ${analyze ? "Inclui análise visual com base em critérios de segurança." : "Análise de imagens não solicitada neste relatório."}`);
    paragraph("Os tipos de ocorrência foram informados nos registros de origem. As observações visuais não confirmam infração normativa ou atendimento a normas.",8);
    heading("Indicadores");
    const counts={};rows.forEach(row=>{counts[row.label]=(counts[row.label]||0)+1;});
    table(["Indicador","Quantidade / situação"],[123,55],[...Object.entries(counts),["Com PTE associada",rows.filter(row=>row.pte!==null).length],["Sem PTE associada",rows.filter(row=>row.pte===null).length],["Alarmes disparados","Dados não fornecidos"],["Relatórios enviados","Dados não fornecidos"]]);
    heading("Evidências das ocorrências");
    table(["Registro","Data e hora","Câmera","Ocorrência","PTE","Arquivo"],[13,30,26,48,25,36],rows.map(row=>[`#${String(row.id).padStart(3,"0")}`,dateTime(row.local_datetime),row.camera_name,row.label,row.pte===null?"Sem associação":String(row.pte),row.original_file]));
    paragraph("Origem: planilha dados.ods e respectivas imagens fornecidas. Câmera e ausência de PTE confirmadas pelo responsável. Registros iguais em horários diferentes foram preservados; não representam necessariamente cenas distintas.",8);
    heading("Pendências e revisão");
    paragraph("Identificação da unidade, alarmes disparados e relatórios enviados não foram fornecidos. Referências NR/ISO e sua aplicação dependem de validação técnica. Este documento não é laudo nem certificado de conformidade.");
    if(analyze) paragraph("As imagens contêm marcações na origem e foram analisadas em resolução reduzida. Itens não verificáveis indicam limitação de visibilidade ou confiabilidade e devem ser revisados; não indicam ausência de equipamento.");
    ensure(25);y+=4;paragraph("Responsável: ______________________________________",9);paragraph("Data: ______________  Observações: _________________________________",9);
    if(analyze) {
      for(let index=0;index<rows.length;index++) {
        const row=rows[index];onProgress(`Incluindo análise de ${index+1} de ${rows.length} imagens…`);newPage();
        heading(`Imagem #${String(row.id).padStart(3,"0")} - critérios observados`);
        paragraph(`${row.camera_name} | ${dateTime(row.local_datetime)} | ${row.original_file}`,8);
        paragraph(`Pessoa observada: ${row.observation.subject}.`,8);
        if(!/^assets\/evidence-\d+\.jpg$/.test(row.image)) throw Error("A referência da imagem não é válida.");
        const response=await fetch(row.image);if(!response.ok)throw Error("Não foi possível carregar uma imagem. Tente novamente.");
        const bytes=new Uint8Array(await response.arrayBuffer());
        const properties=doc.getImageProperties(bytes);const height=Math.min(89,width*properties.height/properties.width);const imageWidth=height*properties.width/properties.height;
        doc.addImage(bytes,"JPEG",left+(width-imageWidth)/2,y,imageWidth,height);y+=height+8;
        table(["Critério","Observação"],[113,65],GROUPS.flatMap(group=>group.items.map(([id,label])=>[label,ANSWERS[row.observation.answers[id].answer]])),true);
        paragraph(`Registro de origem: dados.ods, linha ${row.sheet_row}. A leitura visual é complementar e requer revisão humana.`,7);
      }
    }
    const pages=doc.getNumberOfPages();for(let i=1;i<=pages;i++){doc.setPage(i);doc.setFont("helvetica","normal");doc.setFontSize(7);doc.setTextColor(145,155,170);doc.text("SafeWatch | Apoio à decisão | Requer revisão",left,287);doc.text(`${i} / ${pages}`,194,287,{align:"right"});}
    return doc.output("blob");
  }
  globalThis.SafeWatchReports = {GROUPS, selectRecords, generateReport};
  if(typeof module!=="undefined") module.exports=globalThis.SafeWatchReports;
})();
