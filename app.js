"use strict";
(() => {
  const data=window.DEMO_DATA;
  const {GROUPS,selectRecords,generateReport}=window.SafeWatchReports;
  const byId=id=>document.getElementById(id);
  const escape=value=>String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const form=byId("report-tool"), button=byId("generate");
  let reportUrl=null, busy=false, currentRows=[];
  const cameras=new Map(data.records.map(row=>[String(row.camera_id),row.camera_name]));
  for(const [id,name] of cameras) byId("camera").add(new Option(name,id));
  const dates=data.records.map(row=>row.local_datetime.slice(0,10)).sort();
  byId("start").value=dates[0];byId("end").value=dates.at(-1);
  const display=value=>value.split("-").reverse().join("/");
  byId("availability").textContent=`Dados disponíveis nesta demonstração: ${display(dates[0])}${dates[0]===dates.at(-1)?"":` a ${display(dates.at(-1))}`}.`;
  byId("criteria-groups").innerHTML=GROUPS.map(group=>`<section class="criteria-group"><h3>${escape(group.title)}</h3><div class="criterion-chips">${group.items.map(([,label])=>`<span class="criterion-chip">${escape(label)}</span>`).join("")}</div></section>`).join("");
  byId("criteria-definitions").innerHTML=GROUPS.flatMap(group=>group.items.map(([id,label])=>{const question=data.questions.find(q=>q.id===id);return `<article class="criterion-definition"><h3>${escape(label)}</h3><dl><dt>Sim</dt><dd>${escape(question.criteria.yes)}</dd><dt>Não</dt><dd>${escape(question.criteria.no)}</dd><dt>Não verificável</dt><dd>${escape(question.criteria.nv)}</dd></dl></article>`;})).join("");
  function invalidate(){byId("report-result").hidden=true;if(reportUrl){URL.revokeObjectURL(reportUrl);reportUrl=null;}}
  function error(message){byId("form-error").textContent=message;byId("form-error").hidden=!message;}
  function update(){
    invalidate();error("");byId("criteria-panel").hidden=!byId("analyze").checked;
    try{currentRows=selectRecords(data.records,{camera:byId("camera").value,start:byId("start").value,end:byId("end").value});byId("selection-text").textContent=currentRows.length?`${currentRows.length} ocorrência${currentRows.length===1?"":"s"} no período selecionado` : "Nenhuma ocorrência neste período";byId("selection-note").classList.toggle("is-empty",!currentRows.length);button.disabled=!currentRows.length||busy;}
    catch(e){currentRows=[];error(e.message);byId("selection-text").textContent="Revise o período selecionado";button.disabled=true;}
  }
  form.addEventListener("change",update);
  form.addEventListener("submit",async event=>{
    event.preventDefault();if(busy||!form.reportValidity())return;update();if(!currentRows.length)return;
    const scope={rows:[...currentRows],cameraName:cameras.get(byId("camera").value),start:byId("start").value,end:byId("end").value,analyze:byId("analyze").checked};
    busy=true;button.disabled=true;button.classList.add("is-busy");button.setAttribute("aria-busy","true");button.querySelector("span").textContent="Preparando relatório…";
    for(const input of form.querySelectorAll("input,select"))input.disabled=true;
    try{
      const blob=await generateReport({...scope,onProgress:message=>{byId("selection-text").textContent=message;}});
      reportUrl=URL.createObjectURL(blob);byId("download-report").href=reportUrl;byId("download-report").download=`relatorio-${scope.cameraName.toLowerCase().replace(/[^a-z0-9]+/g,"-")}-${scope.start}-${scope.end}${scope.analyze?"-com-analise":""}.pdf`;byId("open-report").href=reportUrl;
      byId("result-title").textContent="Relatório pronto";byId("result-description").textContent=`${scope.cameraName} · ${display(scope.start)} a ${display(scope.end)} · ${scope.analyze?"Com análise de imagens":"Registros e evidências"}`;byId("report-result").hidden=false;byId("selection-text").textContent=`${scope.rows.length} ocorrências incluídas no relatório`;
    }catch(e){error(e.message||"Não foi possível gerar o relatório. Tente novamente.");}
    finally{busy=false;button.disabled=false;button.classList.remove("is-busy");button.removeAttribute("aria-busy");button.querySelector("span").textContent="Gerar relatório";for(const input of form.querySelectorAll("input,select"))input.disabled=false;}
  });
  update();
})();
