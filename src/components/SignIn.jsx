import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { useForm } from 'react-hook-form';

const SignIn = () => {
    const { setUserData, setIsLoged } = useContext(CartContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">
                    X
                </label>
                <h3 className="text-3xl font-bold">Sign In</h3>
                <form
                    className="signIn__form"
                    onSubmit={handleSubmit((data) => {
                        setUserData(data);
                        setIsLoged('true');
                    })}
                >
                    <div className="inpContainer">
                        <span>Username</span>
                        <input
                            type="text"
                            autoComplete="off"
                            placeholder="Nombre de usuario"
                            {...register('username', {
                                required: {
                                    value: true,
                                    message: 'Debe llenar este campo',
                                },
                            })}
                        />
                        {errors.username && <span className="errMessage">{errors.username.message}</span>}
                    </div>
                    <div className="inpContainer">
                        <span>Email</span>
                        <input
                            type="email"
                            name="email"
                            autoComplete="off"
                            placeholder="ejemplo@gmail.com"
                            {...register('email', {
                                required: {
                                    value: true,
                                    message: 'Debe llenar este campo',
                                },
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'El formato no es correcto',
                                },
                            })}
                        />
                        {errors.email && <span className="errMessage">{errors.email.message}</span>}
                    </div>
                    <div className="inpContainer">
                        <span>Telefono</span>
                        <input
                            type="text"
                            name="cellphone"
                            autoComplete="off"
                            placeholder="Telefono"
                            {...register('password', {
                                required: {
                                    value: true,
                                    message: 'Debe llenar este campo',
                                },
                                minLength: {
                                    value: 10,
                                    message: 'La contraseña debe tener al menos 10 caracteres',
                                },
                            })}
                        />
                        {errors.password && <span className="errMessage">{errors.password.message}</span>}
                    </div>
                    <div>
                        <input
                            className="checkboxInp"
                            type="checkbox"
                            {...register('terminos', {
                                required: {
                                    value: true,
                                    message: 'Debe aceptar los terminos y condiciones',
                                },
                            })}
                        />
                        <span>Acepto los terminos y condiciones</span>
                        {errors.terminos && <span className="terminosErrMessage">{errors.terminos.message}</span>}
                    </div>
                    <button type="submit" className="btn">
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    );
};
export default SignIn;
