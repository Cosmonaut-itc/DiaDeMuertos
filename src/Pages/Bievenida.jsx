import './main-page.css';
import {useNavigate} from 'react-router-dom';

function Bienvenida() {
    const navigate = useNavigate();

    const navigateToForm = () => {
        navigate('/form');
    };
    return (
        <div className="div1">
            <body className="App-header" style={{backgroundImage: `url('https://i.ibb.co/BTm5CHG/yellowbckgrnd-correct.png')`, backgroundSize: 'contain'}}>
                <button onClick={navigateToForm} className="button-27"> Asistir </button>
            </body>
        </div>
    );
}

export default Bienvenida;