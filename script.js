let horas = document.getElementById("horas");
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");
let ampm = document.getElementById("ampm");
let teste = document.getElementById("teste");

let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

let hr_ponto = document.querySelector(".hr_ponto");
let min_ponto = document.querySelector(".min_ponto");
let seg_ponto = document.querySelector(".seg_ponto");

setInterval(() => {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let amdDmd = h >= 24 ? "AM" : "PM";

  if (h > 24) {
    h = h - 24;
  }

  if (h >= 0 && h < 12) {
    teste.innerHTML = "Bom Dia!";
    document.body.style.color = "#ff990a";
    document.getElementById("teste").style.fontSize = "35px";
    document.getElementById("teste").style.background = "#ddda8e";
    document.getElementById("teste").style.boxShadow = "0 0 10px 10px  rgba(236, 144, 0, 1)";
    document.getElementById("relogio").style.boxShadow = "0 0 10px 10px  #d3ff02";
    document.body.style.background = "#f5c765";

  } else if (h >= 12 && h <= 18) {
    teste.innerHTML = "Boa Tarde!";
    document.body.style.color = "#b98004";
    document.getElementById("teste").style.fontSize = "35px";
    document.getElementById("teste").style.background = "#d4c486";
    document.getElementById("teste").style.boxShadow = "0 0 10px 10px  #5ed4d9";
    document.getElementById("relogio").style.boxShadow = "0 0 10px 10px  #0ff7a7";
    document.body.style.background = "rgba(34,193,195,1)";
  } else {
    teste.innerHTML = "Boa Noite!";
    document.body.style.color = "rgba(84,54,110,1)";
    document.getElementById("teste").style.fontSize = "35px";
    document.getElementById("teste").style.background ="radial-gradient(circle, rgba(68,97,97,1) 0%, rgba(196,209,210,1) 100%)";
    document.getElementById("teste").style.boxShadow = "0 0 10px 10px  #ffffff";
    document.getElementById("relogio").style.boxShadow = "0 0 10px 10px  #b092c8";
    document.body.style.background = "#061c13";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  horas.innerHTML = h + "<br> <span>Horas</span>";
  minutos.innerHTML = m + "<br> <span>Minutos</span>";
  segundos.innerHTML = s + "<br> <span>Segundos</span>";
  ampm.innerHTML = amdDmd;

  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  // 360 / 12 = 30
  hr_ponto.style.transform = `rotate(${h * 30}deg)`;

  // 360 / 60 = 6
  min_ponto.style.transform = `rotate(${m * 6}deg)`;

  // 360 / 60 = 6
  seg_ponto.style.transform = `rotate(${s * 6}deg)`;
});
