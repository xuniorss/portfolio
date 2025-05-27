export const Cursor = ({
  mousePosition,
  activeSection,
}: {
  mousePosition: { x: number; y: number };
  activeSection: string;
}) => {
  return (
    <div
      className="fixed w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
      style={{
        left: mousePosition.x - 12,
        top: mousePosition.y - 12,
        transform: `scale(${activeSection === "home" ? 1.5 : 1})`,
      }}
    />
  );
};
