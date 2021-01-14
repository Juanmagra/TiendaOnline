import 'dotenv/config';
import bcrypt from 'bcryptjs';


class User {
    // modificamos el constructor, dejando el id al final para hacerlo optativo
    constructor(username, fullname, email, password, foto, admin, id = 0) {
        this.id = id;
        this.username = username;
        this.fullname = fullname
        this.email = email;
        this.password = password;
        this.foto = foto
        this.admin = admin
    }

    toDto() {
        return {
            id: this.id,
            username: this.username,
            fullname: this.fullname,
            email: this.email,
            foto: this.foto
        }
    }

}

const password = bcrypt.hashSync('0000', parseInt(process.env.BCRYPT_ROUNDS));
export let usuarios = [
    new User("Patuki", "Juan Manuel Gracia", "patuki96@gmail.com", password,  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0sHX_O8h3VWZHYf4NOy9r-O2DUgEQT9hqSQ&usqp=CAU", true, 1),
    new User("Usuario", "Usuario Basico", "userBasico@gmail.com", password, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_MAFlYtbixkVal5wMPg_Pp7asyaRb1HZM_g&usqp=CAU", false, 2)

]

/**
 * Método que nos va a permitir obtener la posición de un 
 * usuario dentro de la colección en base a su ID
 * Devuelve la posición si lo encuentra, y -1 si no lo encuentra.
 */
const indexOfPorId = (id) => {
    let posicionEncontrado = -1;
    for (let i = 0; i < usuarios.length && posicionEncontrado == -1; i++) {
        if (usuarios[i].id == id)
            posicionEncontrado = i;
    }
    return posicionEncontrado;
}

/**
 * Función que comprueba si un email ya está
 * definido como el email de un usuario en el repositorio
 */
const emailExists = (email) => {
    let emails = usuarios.map(user => user.email);
    return emails.includes(email);
}

/**
 * Función que comprueba si un username ya está
 * definido como el username de un usuario en el repositorio
 */
const usernameExists = (username) => {
    let usernames = usuarios.map(user => user.username);
    return usernames.includes(username);
}

const userRepository = {

    // Devuelve todos los usuarios del repositorio
    findAll() {
        return usuarios;
    },
    // Devuelve un usuario por su Id
    findById(id) {
        const posicion = indexOfPorId(id);
        return posicion == -1 ? undefined : usuarios[posicion];
    },
    // Encuentra un usuario por su username
    findByUsername(username) {
        let result = usuarios.filter(user => user.username == username);
        return Array.isArray(result) && result.length > 0 ? result[0] : undefined;
    },
    // Inserta un nuevo usuario y devuelve el usuario insertado
    create(newUser) {
        const lastId = usuarios.length == 0 ? 0 : usuarios[usuarios.length - 1].id;
        const newId = lastId + 1;
        const result = new User(newUser.username, newUser.fullname, newUser.email,newUser.password, newUser.foto, newUser.admin, newId);
        usuarios.push(result);
        return result;
    },
    // Actualiza un usuario identificado por su ID
    updateById(id, modifiedUser) {
        const posicionEncontrado = indexOfPorId(id)
        if (posicionEncontrado != -1) {
            usaurios[posicionEncontrado].username = modifiedUser.username;
        }
        return posicionEncontrado != -1 ? usuarios[posicionEncontrado] : undefined;
    },
    // Versión del anterior, en la que el ID va dentro del objeto usuario
    update(modifiedUser) {
        return this.update(modifiedUser.id, modifiedUser);
    },
    delete(id) {
        const posicionEncontrado = indexOfPorId(id);
        if (posicionEncontrado != -1)
            usuarios.splice(posicionEncontrado, 1);
    }

}

export {
    User,
    userRepository,
    emailExists,
    usernameExists
}