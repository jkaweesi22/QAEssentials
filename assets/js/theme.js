(() => {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const printBtn = document.getElementById("print-btn");
  const storageKey = "qaessentials-theme";

  const systemPrefersDark = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const setTheme = (mode) => {
    const theme = mode === "dark" ? "dark" : "light";
    root.setAttribute("data-theme", theme);
    if (toggle) {
      toggle.setAttribute("aria-pressed", theme === "dark");
      toggle.textContent = theme === "dark" ? "Light mode" : "Dark mode";
    }
  };

  const init = () => {
    const saved = localStorage.getItem(storageKey);
    setTheme(saved || (systemPrefersDark() ? "dark" : "light"));
  };

  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem(storageKey, next);
      setTheme(next);
    });
  }

  if (printBtn) {
    printBtn.addEventListener("click", () => window.print());
  }

  init();
})();
