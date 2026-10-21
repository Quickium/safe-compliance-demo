"use strict";
(() => {
  const data = window.DEMO_DATA;
  const byId = id => document.getElementById(id);
  const escape = value => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const displayDate = value => new Intl.DateTimeFormat("pt-BR", {timeZone:"America/Sao_Paulo",day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(value));
  let view = "grid";
  const navigate = () => {
    const requested = location.hash.slice(1) || "evidencias";
    const page = ["evidencias", "dossie", "analise", "criterios", "sobre"].includes(requested) ? requested : "evidencias";
    document.querySelectorAll(".page").forEach(section => section.hidden = section.id !== page);
    document.querySelectorAll("[data-page]").forEach(link => {link.classList.toggle("active", link.dataset.page === page); if(link.dataset.page === page) link.setAttribute("aria-current","page"); else link.removeAttribute("aria-current");});
    document.title = `${({evidencias:"Evidências",dossie:"Dossiê de exemplo",analise:"Análise Jev",criterios:"Critérios visuais",sobre:"Sobre a demo"})[page]} · SafeWatch`;
    window.scrollTo(0,0);
  };
  const render = () => {
    const start = byId("start").value, end = byId("end").value, type = byId("type").value;
    const invalid = Boolean(start && end && start > end);
    byId("filter-error").hidden = !invalid;
    byId("filter-error").textContent = invalid ? "A data final deve ser posterior ou igual à inicial." : "";
    const rows = data.records.filter(row => !invalid && (!start || row.local_datetime.slice(0,10) >= start) && (!end || row.local_datetime.slice(0,10) <= end) && (!type || row.type === type));
    byId("count").textContent = rows.length;
    byId("distinct").textContent = new Set(rows.map(row => row.original_sha256)).size;
    byId("image-count").textContent = `${rows.length} arquivos vinculados`;
    byId("without-pte").textContent = rows.length;
    byId("result-label").textContent = `${rows.length} registro${rows.length === 1 ? "" : "s"} · horário de Brasília`;
    byId("empty").hidden = rows.length > 0;
    byId("gallery").hidden = view !== "grid" || !rows.length;
    byId("records-table").hidden = view !== "table" || !rows.length;
    byId("gallery").innerHTML = rows.map(row => `<article class="evidence-card"><button class="photo-button" type="button" data-record="${row.id}" aria-label="Abrir evidência ${row.id}: ${escape(row.label)}"><img src="${escape(row.image)}" alt="Registro ${row.id} da Camera Demo" loading="lazy" width="1920" height="1080"><span class="photo-label">${escape(row.original_file)}</span></button><div class="evidence-body"><div class="record-top"><span class="record-id">REGISTRO #${String(row.id).padStart(3,"0")}</span><time datetime="${escape(row.local_datetime)}">${escape(displayDate(row.local_datetime))}</time></div><h3>${escape(row.label)}</h3><div class="record-bottom"><span>Camera Demo</span><span>Sem PTE associada</span></div></div></article>`).join("");
    byId("records-body").innerHTML = rows.map(row => `<tr><td>#${String(row.id).padStart(3,"0")}</td><td>${escape(displayDate(row.local_datetime))}</td><td>Camera Demo</td><td>${escape(row.label)}</td><td>Sem associação</td><td><button type="button" data-record="${row.id}">${escape(row.original_file)} ↗</button></td></tr>`).join("");
  };
  const show = id => {
    const row = data.records.find(item => item.id === Number(id));
    if (!row) return;
    byId("dialog-title").textContent = `Registro #${String(row.id).padStart(3,"0")} · ${row.label}`;
    byId("dialog-image").src = row.image;
    byId("dialog-image").alt = `Evidência ${row.original_file}, Camera Demo`;
    byId("dialog-content").innerHTML = `<dl><div><dt>Data e hora · Brasília</dt><dd>${escape(displayDate(row.local_datetime))}</dd></div><div><dt>Câmera</dt><dd>Camera Demo</dd></div><div><dt>PTE associada</dt><dd>Nenhuma</dd></div><div><dt>Arquivo original</dt><dd>${escape(row.original_file)}</dd></div><div><dt>Origem</dt><dd>dados.ods · linha ${row.sheet_row}</dd></div><div><dt>Avaliação Jev</dt><dd>14 respostas reais</dd></div><div class="hash"><dt>SHA-256 do arquivo original</dt><dd>${escape(row.original_sha256)}</dd></div></dl><p>Tipo de ocorrência informado na origem. A imagem foi convertida de PNG para JPEG para exibição. O registro exige revisão humana.</p>`;
    byId("evidence-dialog").showModal();
  };
  for (const [type,label] of Object.entries(data.types)) {const option = new Option(label,type); byId("type").add(option);}
  byId("criteria-list").innerHTML = data.questions.map(q => `<article class="card criterion"><div class="criterion-head"><h2>${escape(q.text)}</h2><span class="draft">Rascunho</span></div><dl><dt>SIM</dt><dd>${escape(q.criteria.yes)}</dd><dt>NÃO</dt><dd>${escape(q.criteria.no)}</dd><dt>NÃO VERIFICÁVEL</dt><dd>${escape(q.criteria.nv)}</dd></dl><div class="scope">${q.scope === "subject" ? "Alvo individual" : "Cena inteira"} · Vínculo normativo sujeito a revisão técnica</div></article>`).join("");
  byId("filters").addEventListener("submit",event => {event.preventDefault(); render();});
  byId("filters").addEventListener("change",render);
  byId("filters").addEventListener("reset",() => setTimeout(render,0));
  for (const name of ["grid","table"]) byId(`${name}-view`).addEventListener("click",() => {view=name;byId("grid-view").setAttribute("aria-pressed",String(name === "grid"));byId("table-view").setAttribute("aria-pressed",String(name === "table"));render();});
  document.addEventListener("click", event => {const button = event.target.closest("[data-record]");if (button) show(button.dataset.record);});
  byId("close-dialog").addEventListener("click",() => byId("evidence-dialog").close());
  byId("evidence-dialog").addEventListener("click",event => {if(event.target === byId("evidence-dialog")){const r=event.target.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom) event.target.close();}});
  const answersLabel = {yes:"Sim", no:"Não", not_verifiable:"Não verificável"};
  if (data.vision) {
    const qtext = Object.fromEntries(data.questions.map(q => [q.id,q.text]));
    byId("analysis-meta").textContent = `${data.vision.model} · Limiar ${data.vision.threshold.toFixed(2)} · ${data.vision.demoted_count} respostas rebaixadas por confiança · Execução ${data.vision.run_id}`;
    byId("analysis-list").innerHTML = data.records.map(row => `<details class="card analysis-record"><summary><img src="${escape(row.image)}" alt="" loading="lazy"><div><strong>#${String(row.id).padStart(3,"0")} · ${escape(row.original_file)}</strong><small>${escape(displayDate(row.local_datetime))} · 14 perguntas avaliadas</small></div></summary><div class="analysis-body"><p class="subject"><strong>Alvo:</strong> ${escape(row.observation.subject)}</p><div class="table-wrap"><table><thead><tr><th>Pergunta</th><th>Resposta registrada</th><th>Confiança</th><th>Critério aplicado</th></tr></thead><tbody>${Object.entries(row.observation.answers).map(([id,a]) => `<tr><td>${escape(qtext[id] || id)}</td><td class="answer-label answer-${a.answer === "not_verifiable" ? "nv" : a.answer}">${answersLabel[a.answer]}${a.demoted ? `<small class="model-raw">Rebaixada de “${answersLabel[a.model_answer]}”</small>` : ""}</td><td>${a.confidence.toFixed(2)}</td><td>${escape(a.criterion)}</td></tr>`).join("")}</tbody></table></div><p class="muted">Imagem enviada: ${row.observation.preparation.submitted_size.join(" × ")} px. Original: ${row.observation.preparation.original_size.join(" × ")} px. O redimensionamento pode limitar a leitura de detalhes.</p></div></details>`).join("");
  }
  window.addEventListener("hashchange",navigate);
  render();navigate();
})();
