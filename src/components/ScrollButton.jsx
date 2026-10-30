import { scrollToSection } from "../utils/scrollToSection";

export default function ScrollButton({
  targetId,
  focusTarget = false,
  onClick,
  className = "",
  children,
  ...props
}) {
  return (
    <button
      {...props}
      type="button"
      className={`scroll-button ${className}`.trim()}
      onClick={(event) => {
        scrollToSection(targetId, { focus: focusTarget });
        onClick?.(event);
      }}
    >
      {children}
    </button>
  );
}
