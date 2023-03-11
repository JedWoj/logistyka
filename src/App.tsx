import image from "./assets/zaluzje-drewniane-01.jpg";

const App = () => {
  return (
    <div className="flex justify-center items-start text-black absolute top-0 left-0 right-0 bottom-0 bg-cover bg-[url('./assets/zaluzje-drewniane-01.jpg')]">
      <section className=" bg-white w-2/3 mt-4 p-5 shadow-2xl shadow-slate-700 rounded-lg">
        <h1 className="py-4">BlindSome</h1>
        <p>
          Blindsome to firma specjalizująca się w produkcji żaluzji o wysokiej
          jakości. Od momentu powstania w 2010 roku, Blindsome zyskała reputację
          jako jeden z najbardziej innowacyjnych i wszechstronnych producentów
          żaluzji w branży. Nasza oferta obejmuje żaluzje wykonane bambusa. W
          Blindsome wiemy, że każde pomieszczenie wymaga indywidualnego
          podejścia i dlatego oferujemy szeroki wybór kolorów, które można
          dopasować do każdej przestrzeni i stylu aranżacji. Nasze żaluzje są
          projektowane z myślą o funkcjonalności i estetyce, a przy tym są łatwe
          w użytkowaniu i trwałe. Jako firma Blindsome dbamy o jakość naszych
          produktów oraz o środowisko naturalne, dlatego stosujemy tylko
          materiały najwyższej jakości i korzystamy z metod produkcji
          przyjaznych dla środowiska. Nasz zespół ekspertów służy również
          fachową radą i pomocą przy wyborze odpowiedniego produktu oraz
          montażu. Blindsome to gwarancja jakości, innowacyjności i elegancji w
          produkcji żaluzji.
        </p>
      </section>
    </div>
  );
};

export default App;
