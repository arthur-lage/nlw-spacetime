export default function Home() {
  return (
    <div className="flex h-screen flex-col justify-between bg-app py-16 pl-[120px]">
      <header className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gray-600"></div>
        <p className="w-[180px] text-sm text-[#BEBEBF]">
          Crie sua conta e salve suas memórias!
        </p>
      </header>

      <main>
        <span className="text-lg text-white">NLW Spacetime</span>

        <h1 className="mt-5 font-roboto text-[40px] font-bold leading-[50px] text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="mt-1 w-[420px] font-roboto text-lg leading-[29px] text-[#BEBEBF]">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>

        <button className="mt-5 rounded-full bg-[#04D361] px-5 py-3 font-bai-jamjuree text-sm font-bold uppercase text-neutral-950">
          Cadastrar lembrança
        </button>
      </main>

      <footer>
        <span className="font-roboto text-sm text-gray-200">
          Feito com 💜 no NLW da Rocketseat
        </span>
      </footer>
    </div>
  );
}
