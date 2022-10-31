import './form.css';
import $ from 'jquery';

function Form() {
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
            <form className="form" action="/" method="post" name="registro" data-form-type="registration" netlify>
                <input type="hidden" name="form-name" value="registro" />
                <p className="titulo"> Lista de<br/> Invitados</p>
                <p>
                    <div className="form-input">
                        <input id="name" className="form-element-input" type="input" data-form-type="name"
                               placeholder="Please fill in your name" onChange={handleChange} required/>
                        <div className="form-element-bar"></div>
                        <label className="form-element-label" htmlFor="name">Nombre</label>
                        <small className="form-element-hint">Ingresa tu nombre y apellido</small>
                    </div>
                </p>
                <p>
                    <p>
                        <label className="label">¿Estas Soltero?<br/><select className="select" name="options[]" required>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select></label>
                    </p>
                </p>
                <p>
                    <label className="label">Aportacion<br/><select className="select" name="aportacion[]" required="true">
                        <option value="100">$100</option>
                        <option value="200">$200</option>
                        <option value="300">$300</option>
                        <option value="0">Yo llevare de tomar</option>
                    </select></label>
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