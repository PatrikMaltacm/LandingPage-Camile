
import Footer from "./components/footer"
import Header from "./components/header"
import logoImg from "./assets/imagem_ofc.jpg"


function App() {


  return (
    <div>
      <Header/>
      <main>
        <section className="hero" id="home">
          <div className="group">
            <h1>Camile Folleto</h1>
            <h2>Escritório de Advocacia</h2>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=5554991657423&fbclid=PAZXh0bgNhZW0CMTEAAaZOJ_RyY3KZlCYGsNdp5_FBZDdPUQFAQi6MloswkKEr2wlaMUaSr_Qk7tU_aem_-L5BZGB9nHLnYH3bbcXwcw">Entre em contato</a>
          </div>
        </section>

        <section className="about" id="about">
          <img src={logoImg} alt="Logo da Advocacia Camile Follet" />
          <div className="content-about">
              <h3>Sobre</h3>
              <p>Com mais de 10 anos de experiência na advocacia, o 
                escritório Camile Foletto Advogados Associados atua com excelência 
                e compromisso na defesa dos direitos de seus clientes. Especializados 
                em Direito do Trabalho, Previdenciário e Bancário, oferecemos soluções 
                jurídicas estratégicas e personalizadas para garantir segurança e tranquilidade em cada caso.
              </p>
          </div>
        </section>

        <section className="specialties" id="specialties">
            <h3>ESPECIALIDADES</h3>
            <ul>
              <li>DIREITO DO TRABALHADOR</li>
              <li>DIREITO PREVIDENCIÁRIO</li>
              <li>DIREITO BANCÁRIO</li>
              <li>DIREITO DO CONSUMIDOR</li>
            </ul>
        </section>

        <section className="time" id="time">
          <h3>TIME</h3>
          <div className="advs">
            <div className="adv">
              <img src={logoImg} alt="Foto do advogado" />
              <h4>Camile Folleto</h4>
              <p>
                Sobre o Adivogado
              </p>
            </div>

            <div className="adv">
              <img src={logoImg} alt="Foto do advogado" />
              <h4>Camile Folleto</h4>
              <p>
                Sobre o Adivogado
              </p>
            </div>

            <div className="adv">
              <img src={logoImg} alt="Foto do advogado" />
              <h4>Camile Folleto</h4>
              <p>
                Sobre o Adivogado
              </p>
            </div>
          </div>
          
        </section>

        <a className="floating" target="blank" href="https://api.whatsapp.com/send?phone=5554991657423&fbclid=PAZXh0bgNhZW0CMTEAAaZOJ_RyY3KZlCYGsNdp5_FBZDdPUQFAQi6MloswkKEr2wlaMUaSr_Qk7tU_aem_-L5BZGB9nHLnYH3bbcXwcw">
          <img src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" alt="Botão contato" />
        </a>

      </main>
      <Footer/>
    </div>
  )
}

export default App
