import Image from "next/image";


export default function Home() {
  return (
    <main>
  <div className="header">
      <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              
              width={100}
              height={24}
              priority
            />
            <div>
              <h1>Olá, eu sou a Dé :)</h1>
              <h2> Software Engineer </h2>
            </div>
           </div>

            <div className="experience">
            <h3>Experiência</h3>
            <p>Desenvolvedora Full Stack há 3 anos atuando em projetos internacionais (BMW)</p>
           
           <div className="experience-time">

           </div>

           <div className="infos"> 
           <h3> Linguagens</h3>
           <div className="languagens-infos"> 
           <span>EN - Intermediário</span>
           <span>PT-BR - Nativo</span>
           </div>
           <div className= "educational-info">
           <span>🎓</span>
           <span>Engenharia de Software - Universidade Federal do Pampa</span>
           </div>
          </div>
          <div className="buttons">
            <div className= "social">

            </div>
            <button>contate-me!</button>


          </div>
        </div>
          



    </main>
  );
}
