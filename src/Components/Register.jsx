import '../StyleSheets/Register.css'
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <section class="vh-100 gradient-custom">
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div class="card bg-dark text-white">
                                <div class="card-body p-5 text-center">

                                    <div class="mb-md-5 mt-md-4 pb-5">

                                        <h2 class="fw-bold mb-2 text-uppercase">Registro</h2>

                                        <div class="form-outline form-white mb-4">
                                            <label class="form-label" for="typeEmailX">Correo</label>

                                            <input type="email" id="typeEmailX" class="form-control form-control-lg"></input>
                                        </div>

                                        <div class="form-outline form-white mb-4">
                                            <label class="form-label" for="typeNameX">Nombre</label>

                                            <input type="name" id="typeNameX" class="form-control form-control-lg"></input>
                                        </div>

                                        <div class="form-outline form-white mb-4">
                                            <label class="form-label" for="typePasswordX">Contraseña</label>

                                            <input type="password" id="typePasswordX" class="form-control form-control-lg" ></input>
                                        </div>

                                        <button class="btn btn-outline-light btn-lg px-5" type="submit">Registrar</button>

                                        <div class="d-flex justify-content-center text-center mt-4 pt-1">
                                            <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                                            <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                            <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
                                        </div>

                                    </div>

                                    <div>
                                        <p class="mb-0">¿Ya cuentas con un correo? <Link to={"/"}><a href="#!" class="text-white-50 fw-bold">Iniciar Sesión</a></Link>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register;