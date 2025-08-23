
// Gomb komponens, amely különböző stílusokkal rendelkezik
export default function Button({ children, onClick, type = "button", variant = "secondary", disabled = false }) {
  const baseStyle =
    "px-4 py-2 rounded-md font-medium transition-colors duration-200";

  const variants = {
    secondary: "bg-gray-200 hover:bg-gray-300 text-black",
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
}
