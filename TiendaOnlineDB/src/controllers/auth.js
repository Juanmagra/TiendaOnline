import 'dotenv/config';
import { User, userRepository } from '../models/users';
import bcrypt from 'bcryptjs';
import { JwtService } from '../services/jwt';



const AuthController = {

    register: (req, res, next) => {
        // ¿Realmente este método es necesario, o podríamos modificar la petición POST en /users?
        // Mantendremos solamente esta versión, que estará más actualizada

        // La comprobación de si el username o el email ya existe la realiza la validación
        // No es necesario hacer nada más aquí.


        let usuarioCreado = userRepository.create(
            new User(req.body.username, req.body.fullName, req.body.email,
                bcrypt.hashSync(req.body.password, parseInt(process.env.BCRYPT_ROUNDS), "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0sHX_O8h3VWZHYf4NOy9r-O2DUgEQT9hqSQ&usqp=CAU",false)));

        // Devolvemos todos los datos del usuario menos la contraseña                
        res.status(201).json({
            id: usuarioCreado.id,
            username: usuarioCreado.username,
            email: usuarioCreado.email
        });
    },
    login: (req, res, next) => {
        // Dado que la mitad del esfuerzo lo hace la función password del servicio passport
        // Aquí tan solo tenemos que preocuparnos de generar y devolver el token
        const token = JwtService.sign(req.user);
        res.status(201).json({
            user: req.user,
            token: token
        });
    }


}

export {
    AuthController
}