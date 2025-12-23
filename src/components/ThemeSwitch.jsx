export default function ThemeSwitch({ isDark, setIsDark }) {
  const shadow = "shadow-[2px_1px_4px_0px_#0084FF57]";
  const basePill = "rounded-full p-0.75 border transition-all duration-200";
  const sunActive = `bg-[#413AE9] border-[#251DE6] ${shadow}`;
  const moonActive = `bg-[#110D74] border-[#151091] ${shadow}`;
  const inactive = "bg-transparent border-transparent shadow-none";

  return (
    <button
      type="button"
      onClick={() => setIsDark((p) => !p)}
      className={`flex px-3 py-2.25 rounded-full items-center justify-center gap-3 transition-colors duration-200 ${
        isDark ? "bg-[#09063A]" : "bg-[#FAFAFA]"
      }`}
      aria-label="Toggle theme"
    >
      {/* Sun */}
      <span className={`${basePill} ${!isDark ? sunActive : inactive}`}>
        <img src="/images/sun-icon.svg" alt="Light" />
      </span>

      {/* Moon */}
      <span className={`${basePill} ${isDark ? moonActive : inactive}`}>
        <img src="/images/moon-icon.svg" className="w-5.5 h-5.5" alt="Dark" />
      </span>
    </button>
  );
}


