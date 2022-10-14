import logo from './logo.svg';
import './App.css';

function App() {
  const titulo = "Título do Vídeo"
  
  function reproduzVideo(){
    alert('o vídeo está sendo reproduzido')
  }
  return (
    <div classNameName="tela-inteira">
    <header>
        <h1>LabeTube</h1>
        <input type="text" placeholder="Busca" id="campoDeBusca"/>
    </header>

    <main>
        <nav classNameNameName="menu-vertical">
            <ul>
                <li classNameNameName="botoes-meunu-vertical">Início</li>
                <li classNameName="botoes-meunu-vertical">Em alta</li>
                <li classNameName="botoes-meunu-vertical">Inscrições</li>
                <hr>
                </hr>
                <li classNameName="botoes-meunu-vertical">Originais</li>
                <li classNameName="botoes-meunu-vertical">Histórico</li>
            </ul>
        </nav>

        <section classNameName="painel-de-videos">
            <div classNameName="box-pagina-principal media1" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=1 " alt=""></img>
                <h4>{titulo}</h4>
            </div>
            <div classNameName="box-pagina-principal media2" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=2 " alt=""></img>
                <h4>{titulo}</h4>
            </div>
            <div classNameName="box-pagina-principal media3" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=3 " alt=""></img>
                <h4>{titulo}</h4>
            </div>
            <div classNameName="box-pagina-principal media4" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=4 " alt=""></img>
                <h4>{titulo}</h4>
            </div>
            <div classNameName="box-pagina-principal media5" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=5 " alt=""></img>
                <h4>{titulo}</h4>
            </div>
            <div classNameName="box-pagina-principal media6" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=6 " alt=""></img>
                <h4>{titulo}</h4>
            </div>
            <div classNameName="box-pagina-principal media7" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=7 " alt=""></img>
                <h4>{titulo}</h4>
            </div>
            <div classNameName="box-pagina-principal media8" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=8 " alt=""></img>
                <h4>{titulo}</h4>
            </div>
        </section>
    </main>

    <footer>
        <h4>Oi! Eu moro no footer!</h4>
    </footer>
</div>
  );
}

export default App;
