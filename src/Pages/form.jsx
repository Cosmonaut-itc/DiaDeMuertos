import './form.css';
import $ from 'jquery';
import Select from 'react-select';

function Form() {

    const options =[
        {value: '100', label: '$100'},
        {value: '200', label: '$200'},
        {value: '300', label: '$300'},
        {value: '0', label: 'Yo llevaré de tomar'},
    ]

    function handleChange(event){
        if($('.form-element-input').val()) {
            $('.form-element-input').addClass('hasValue');
        } else {
            $('.form-element-input').removeClass('hasValue');
        }
    }
    return (
        <div className="div-form">
            <body className="form-header">
            <form className="form" action="/despedida.jsx" method="post" name="registro" data-form-type="registration" netlify>
                <input type="hidden" name="form-name" value="registro" />
                <p className="titulo"> Lista de<br/> Invitados</p>
                <p>
                    <input name= "nombre" className="form-element-input" type="text" data-form-type="name"
                           placeholder="Please fill in your name" onChange={handleChange} required/>
                    <div className="form-element-bar"></div>
                    <label className="form-element-label" htmlFor="name">Nombre</label>
                    <small className="form-element-hint">Ingresa tu nombre y apellido</small>
                </p>
                <p>
                    <label className="label">Aportacion<br/>
                        <Select className="select" options={options} name="opciones"></Select>
                    </label>
                </p>
                <p>
                    <input type="checkbox" id="acepto" name="maquillaje" value="acepto" required="true" />Acepto que tengo que ir <br/>maquillad@ a la fiesta
                </p>
                <p>
                    <button className="button-28" type="submit" > Enviar </button>
                </p>
            </form>
            </body>

        </div>
    );
}

export default Form;