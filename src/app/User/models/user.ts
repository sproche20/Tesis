export interface user{
    nombre:string;
    apellido:string;
    correo:string;
    uid:string;
    Ide:number;
    password:string;
    perfil:'visitante'|'admin'
    }
    export interface Docente{
        nombre:string;
        correo:string;
        uid:string;
        password:string;
        perfil:'visitante'|'admin'
        }