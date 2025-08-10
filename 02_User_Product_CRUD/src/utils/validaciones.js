export class Validate {
  
    static userName(userName, fieldName) {
        const nameRegex = /^[a-zA-ZáéíóúÁÉÓÍÚñÑüÜ\s]+$/;
        if (!nameRegex.test(userName))
          throw new ValidationError(`${fieldName} debe contener solo letras`, `Error al validar el regex ${nameRegex}`);
        return userName;
      }

      static email(email) {
        const emailRegex =
          /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;
        if (!emailRegex.test(email))
          throw new ValidationError(
            `Correo electronico no válido`,`Error al validar el regex ${emailRegex}`
          );
        return email;
      }

      static rol(rol, validRoles) {
        if (!validRoles.includes(rol)) throw new ValidationError(`Rol no válido`, `Rol debe ser alguno de los siguientes ${validRoles}`);
        return rol;
      }
}