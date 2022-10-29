import './form.css';

function Form() {
    return (
        <div className="div-form">
            <body className="form-header">
            <form name="registro" netlify>
                <p>
                    <label>Nombre <input type="text" name="name" /></label>
                </p>
                <p>
                    <p>
                        <label>¿Estas Soltero?: <select name="options[]" multiple>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select></label>
                    </p>
                </p>
                <p>
                    <label>Aportacion: <select name="aportacion[]" multiple>
                        <option value="100">$100</option>
                        <option value="200">$200</option>
                        <option value="300">$300</option>
                        <option value="0">Yo llevare de tomar</option>
                    </select></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
            </body>

        </div>
    );
}

export default Form;