import { DetalleReporteDto } from "./DetalleReporteDto"

export class DatosReporteDto {
    nombreCompleto: String = ""
    identificaciob: String = ""
    nombreCarrera: String = ""
    nombreInstirucionBeneficiaria: String = ""
    numeroHoras: String = ""
    inicioSemana: String = ""
    finSemana: String = ""
    nombreMesTexto: String = ""
    anio: String = ""

    detalleReporte: DetalleReporteDto[] = []

    horaEntrada: String = ""
    horaSalida: String = ""
    totalHoras: String = ""
    observacion: String = ""


}