import './form.css';

function Form() {
    return (
        <div className="div-form">
            <body className="form-header">
            <form name="registro" method="POST" data-netlify="true">
                <p>
                    <label>Nombre <input type="text" name="name" /></label>
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