import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle login logic here, e.g., API request
    if (!username || !password) {
      setErrorMessage("Kérjük, adja meg a felhasználónevet és a jelszót");
    } else {
      setErrorMessage(null);
      setMessages([["success", "Sikeres bejelentkezés"]]);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gray-100 px-6 py-4 border-b">
            <h2 className="text-xl font-semibold text-gray-800">BEJELENTKEZÉS</h2>
          </div>
          <div className="px-6 py-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Felhasználónév
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 relative">
                  Jelszó
                  <a
                    href="/forgot_pass"
                    className="absolute right-0 text-xs text-gray-500 hover:text-indigo-600"
                  >
                    Elfelejtette?
                  </a>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              {errorMessage && (
                <div className="text-sm text-red-500">{errorMessage}</div>
              )}

              {messages.length > 0 && (
                <div className="space-y-2">
                  {messages.map(([category, message], i) => (
                    <div
                      key={i}
                      className={`px-3 py-2 rounded text-sm ${
                        category === "success"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {message}
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white rounded-lg py-2 font-medium hover:bg-indigo-700 transition"
                >
                  Bejelentkezés
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
