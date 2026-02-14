const gate = document.getElementById("gate");
const letter = document.getElementById("letter");
const openBtn = document.getElementById("openBtn");
const backBtn = document.getElementById("backBtn");
const bgm = document.getElementById("bgm");
const typingEl = document.getElementById("typing");
const todayEl = document.getElementById("today");

const message = `Чи энэ захиаг нээсэн мөчөөс эхлээд
миний өдөр илүү гэрэлтэй болж байна.

Би чамд хайртай.
Чиний инээмсэглэл, чиний дуу хоолой,
чиний хажууд байх жижигхэн тайвшралд хүртэл
би аз жаргалыг олдог.

Өнөөдөр ч, маргааш ч —
би чамайг сонгосоор байх болно. ❤️`;

function setToday() {
  const d = new Date();
  todayEl.textContent = d.toLocaleDateString(undefined, {
    year: "numeric", month: "long", day: "numeric"
  });
}

function typeText(text, speed = 22) {
  typingEl.textContent = "";
  let i = 0;
  const timer = setInterval(() => {
    typingEl.textContent += text[i] ?? "";
    i++;
    if (i >= text.length) clearInterval(timer);
  }, speed);
}

openBtn.addEventListener("click", async () => {
  gate.classList.add("hidden");
  letter.classList.remove("hidden");

  setToday();
  typeText(message);

  // Autoplay is blocked unless started by a user gesture—this click counts
  try { await bgm.play(); } catch (e) { /* ignore */ }
});

backBtn.addEventListener("click", () => {
  letter.classList.add("hidden");
  gate.classList.remove("hidden");
  bgm.pause();
  bgm.currentTime = 0;
});
