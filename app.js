const tabs = document.querySelectorAll(".tab[data-tab]");
const frames = document.querySelectorAll("iframe");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    frames.forEach(f => f.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// Prevent real browser tabs / windows
document.addEventListener("keydown", e => {
  if (
    e.ctrlKey &&
    ["t", "n", "w"].includes(e.key.toLowerCase())
  ) {
    e.preventDefault();
  }
});

// Block popups
window.open = () => null;

// Optional: discourage navigation away
window.addEventListener("beforeunload", e => {
  e.preventDefault();
  e.returnValue = "";
});

// Fullscreen hint (ChromeOS kiosk allows this)
document.documentElement.requestFullscreen?.().catch(() => {});
