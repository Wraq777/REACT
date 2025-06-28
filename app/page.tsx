'use client'

export default function LoginPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/obrazek1.png')" }}
    >
      <form action="mailto:janusz@kowalski.pl" method="POST">
        <div className="bg-black/60 p-10 rounded-lg shadow-xl w-[900px]">
          <h1 className="text-white text-4xl text-center mb-4">
            Formularz Logowania (124486 Jakub Rój)
          </h1>
          <p className="text-white text-center text-lg mb-8">
            Zaloguj się do naszego serwisu
          </p>

          <div className="mb-6 text-white text-lg text-center">
            E-mail:{" "}
            <input
              type="text"
              name="Email"
              className="ml-2 w-[290px] h-[35px] bg-blue-200 text-blue-800 px-2"
            />
          </div>

          <div className="mb-6 text-white text-lg text-center">
            Hasło:{" "}
            <input
              type="password"
              name="Haslo"
              className="ml-2 w-[290px] h-[35px] bg-blue-200 text-blue-800 px-2"
            />
          </div>

          <div className="flex items-center justify-center mb-4">
            <input type="checkbox" name="remember" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-white">
              Pamiętaj mnie
            </label>
            <a href="/forgot" className="text-white ml-6 underline">
              Zapomniałeś hasła?
            </a>
          </div>

          <div className="text-center">
            <input
              type="submit"
              value="Zaloguj"
              className="bg-blue-300 text-white font-bold py-3 px-6 rounded shadow-md hover:bg-blue-400 transition"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
