
const KEY="contabilandia_completa_v1";
const inicial={estrellas:0,completados:[],mejores:{}};
let progreso;
try{progreso={...inicial,...JSON.parse(localStorage.getItem(KEY))};}catch{progreso={...inicial};}
const $=s=>document.querySelector(s);
function guardar(){localStorage.setItem(KEY,JSON.stringify(progreso));}
function actualizar(){ $("#stars").textContent=progreso.estrellas; $("#done").textContent=progreso.completados.length; }
function mostrarMundos(){
 const grid=$("#worlds");grid.innerHTML="";
 mundos.forEach(m=>{
  const abierto=progreso.estrellas>=m.req,btn=document.createElement("button");
  btn.className="card";btn.disabled=!abierto;
  const count=progreso.completados.filter(k=>k.startsWith(m.id+"-")).length;
  btn.innerHTML=`<span class="num">MUNDO ${m.id}</span><span class="lock">${abierto?"✦":"🔒"}</span><span class="icon">${m.icon}</span><h3>${m.short}</h3><p>${abierto?`${count}/10 niveles completados`:`Necesitas ${m.req} ⭐ para desbloquearlo`}</p>`;
  btn.addEventListener("click",()=>abrirMundo(m));grid.appendChild(btn);
 });
}
function abrirModal(){ $("#modal").classList.remove("hidden");}
function cerrarModal(){ $("#modal").classList.add("hidden");}
function abrirMundo(m){
 $("#modalContent").innerHTML=`<p class="eyebrow">MUNDO ${m.id}</p><h2>${m.name}</h2><p class="muted">${m.desc}</p><div id="levels" class="level-grid"></div><p class="muted small">Completa los niveles en orden. Cada uno tiene una lección y 10 preguntas de tres opciones.</p>`;
 for(let n=1;n<=10;n++){
  const key=`${m.id}-${n}`,done=progreso.completados.includes(key);
  const enabled=n===1||progreso.completados.includes(`${m.id}-${n-1}`);
  const b=document.createElement("button");b.className="level";b.disabled=!enabled;
  b.innerHTML=`${done?"✓ ":""}Nivel ${n}<span>${"⭐".repeat(progreso.mejores[key]||0)||"☆☆☆"}</span>`;
  b.addEventListener("click",()=>iniciarNivel(m.id,n));$("#levels").appendChild(b);
 }
 abrirModal();
}
function iniciarNivel(world,level){
 const l=lecciones.find(x=>x.world===world&&x.level===level);
 let html=`<div class="lesson-head"><span class="tag">MUNDO ${world} · NIVEL ${level} · LECCIÓN</span><h2>${l.title}</h2><p class="muted">${l.subtitle}</p></div>`;
 l.sections.forEach((s,i)=>html+=`<article class="lesson-section"><h3>${i+1}. ${s[0]}</h3><p>${s[1]}</p></article>`);
 html+=`<article class="lesson-section summary"><h3>Resumen de aprendizaje</h3><p>${l.summary}</p></article><p class="muted small">Las preguntas se basan en la definición, explicación y ejemplo de esta lección. Lee todo antes de comenzar.</p><button class="action-btn" id="startQuiz">COMENZAR EVALUACIÓN ➜</button> <button class="action-btn secondary" id="backWorld">VOLVER A NIVELES</button>`;
 $("#modalContent").innerHTML=html;$("#startQuiz").onclick=()=>mostrarPregunta(world,level,0,0);$("#backWorld").onclick=()=>abrirMundo(mundos[world-1]);abrirModal();
}
function mostrarPregunta(world,level,index,correctCount){
 const l=lecciones.find(x=>x.world===world&&x.level===level),q=l.questions[index],letters=["A","B","C"];
 $("#modalContent").innerHTML=`<span class="tag">MUNDO ${world} · NIVEL ${level}</span><div class="quiz-progress">PREGUNTA ${index+1} DE ${l.questions.length}</div><h2>${q[0]}</h2><div class="answers">${q[1].map((op,i)=>`<button class="answer" data-index="${i}"><b>${letters[i]}</b>${op}</button>`).join("")}</div><div id="feedback" class="feedback hidden"></div><button id="nextQuestion" class="action-btn hidden">CONTINUAR ➜</button>`;
 let answered=false,nextCorrect=correctCount;
 document.querySelectorAll(".answer").forEach(btn=>btn.addEventListener("click",()=>{
  if(answered)return;answered=true;const chosen=Number(btn.dataset.index),right=chosen===q[2];if(right)nextCorrect++;
  document.querySelectorAll(".answer").forEach((b,i)=>{b.disabled=true;if(i===q[2])b.classList.add("correct");else if(i===chosen)b.classList.add("wrong");});
  const fb=$("#feedback");fb.classList.remove("hidden");
  fb.innerHTML=right?`<strong>¡Correcto! 🎉</strong><p>${q[3]}</p>`:`<strong>¡Sigue adelante! 💪</strong><p>${q[3]}</p><p>Un error no define lo que puedes aprender. Vuelve a revisar la explicación, practica y continúa: cada intento fortalece tus conocimientos.</p>`;
  const next=$("#nextQuestion");next.classList.remove("hidden");next.onclick=()=>index+1<l.questions.length?mostrarPregunta(world,level,index+1,nextCorrect):mostrarResultado(world,level,nextCorrect,l.questions.length);
 }));
}
function estrellasPara(pct){if(pct===100)return 3;if(pct>=50)return 2;if(pct>=25)return 1;return 0;}
function mostrarResultado(world,level,correct,total){
 const pct=Math.round(correct/total*100),earned=estrellasPara(pct),key=`${world}-${level}`,best=progreso.mejores[key]||0;
 progreso.mejores[key]=Math.max(best,earned);
 if(!progreso.completados.includes(key))progreso.completados.push(key);
 progreso.estrellas+=Math.max(0,earned-best);guardar();actualizar();mostrarMundos();
 $("#modalContent").innerHTML=`<span class="tag">RESULTADO DEL DESAFÍO</span><h2>¡Nivel terminado!</h2><div class="result-stars">${"⭐".repeat(earned)||"☆☆☆"}</div><p class="muted">Respondiste correctamente ${correct} de ${total} preguntas (${pct}%).</p><article class="lesson-section">${earned===3?"¡Excelente! Conseguíste el puntaje perfecto.":earned===2?"¡Muy buen trabajo! Has demostrado una buena comprensión.":earned===1?"¡Buen esfuerzo! Repasa la lección e inténtalo de nuevo para conseguir más estrellas.":"¡No te rindas! Estudia otra vez la explicación y vuelve a practicar. Cada intento cuenta."}</article><p class="muted small">100% = 3 estrellas · 50–99% = 2 · 25–49% = 1 · menos de 25% = 0.</p><button class="action-btn" id="returnWorld">VOLVER A LOS NIVELES</button>`;
 $("#returnWorld").onclick=()=>abrirMundo(mundos[world-1]);
}
$("#close").addEventListener("click",cerrarModal);$("#modal").addEventListener("click",e=>{if(e.target.id==="modal")cerrarModal();});
$("#explore").addEventListener("click",()=>$("#map").scrollIntoView({behavior:"smooth"}));
actualizar();mostrarMundos();guardar();
