import React from 'react'
import { useBuyerInfoContext } from '../context/BuyerInfoContext'
import './Checkout.css'

function CheckOut(props) {
    const { setName, setSurname, setMail, setTel, submitHandler, setConfirmMail } = useBuyerInfoContext()

    return (
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <form onSubmit={submitHandler} >
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" className="form-control" id="Nombre" aria-describedby="Nombre"
                        onChange={event => setName(event.target.value)} />
                </div>
                <div className="form-group">
                    <label>Apellido</label>
                    <input type="text" className="form-control" id="Apellido" aria-describedby="Apellido"
                        onChange={event => setSurname(event.target.value)} />
                </div>
                <div className="form-group">
                    <label>Correo electrónico</label>
                    <input type="email" className="form-control" id="CorreoElectrónico" placeholder="name@example.com"
                        onChange={event => setMail(event.target.value)} />
                </div>
                <div className="form-group">
                    <label>Repita su correo electrónico</label>
                    <input type="email" className="form-control" id="CorreoElectrónico" placeholder="name@example.com"
                    onChange={event => setConfirmMail(event.target.value)} />
                </div>
                <div className="form-group">
                    <label>Teléfono</label>
                    <input type="number" className="form-control" id="Teléfono" aria-describedby="Teléfono"
                        onChange={event => setTel(event.target.value)} />
                </div>
                <div className="form-group">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
                    <label className="form-check-label">Acepto bases y condiciones</label>
                </div>
                <button type="submit" className="boton2" onClick={props.createOrder}>Comprar</button>
            </form>
        </div>
    )
}

export default CheckOut