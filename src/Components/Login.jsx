import '../StyleSheets/Login.css'
import { Link } from "react-router-dom";

import Swal from 'sweetalert2';
import { useState } from 'react';

const Login = () => {

    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    const validation = () => {
        if (name === "migue" && pass === "123") {
            Swal.fire(
                'Good job!',
                '',
                'success'
            )
        } else {
            Swal.fire(
                'Datos erroneos',
                '',
                'warning'
            )
        }
    }

    return (
        <div>
            <section class="vh-100">
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div class="card bg-dark text-white">
                                <div class="card-body p-5 text-center">

                                    <div class="mb-md-5 mt-md-4 pb-5">

                                        <h2 class="fw-bold mb-2 text-uppercase">Iniciar Sesión</h2>
                                        <p class="text-white-50 mb-5"></p>

                                        <div class="form-outline form-white mb-4">
                                            <label class="form-label" for="typeEmailX">Correo</label>

                                            <input type="email" id="typeEmailX" class="form-control form-control-lg"
                                                onChange={(event) => { setName(event.target.value); }}></input>
                                        </div>

                                        <div class="form-outline form-white mb-4">
                                            <label class="form-label" for="typePasswordX">Contraseña</label>

                                            <input type="password" id="typePasswordX" class="form-control form-control-lg"
                                                onChange={(event) => { setPass(event.target.value); }}></input>
                                        </div>

                                        <p class="small mb-5 pb-lg-2"><Link to={"retrieve"}><a class="text-white-50" href="#!">¿Olvidaste tu contraseña?</a></Link></p>

                                        <button class="btn btn-outline-light btn-lg px-5" type="button" onClick={() => validation()}>Login</button>

                                        <div class="d-flex justify-content-center text-center mt-4 pt-1">
                                            <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                                            <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                            <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
                                        </div>

                                    </div>

                                    <div>
                                        <p class="mb-0">¿No tienes una cuenta? <Link to={"/register"}><a href="#!" class="text-white-50 fw-bold">Registrate</a></Link>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;