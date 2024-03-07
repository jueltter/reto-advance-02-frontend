export class DateUtils {
  static dateToString(fecha: Date): string {
    let mes: string = `${("0" + (fecha.getMonth() + 1)).slice(-2)}`;
    let dia: string = `${("0" + (fecha.getDate())).slice(-2)}`;
    let horas: string = `${("0" + (fecha.getHours())).slice(-2)}`;
    let minutos: string = `${("0" + (fecha.getMinutes())).slice(-2)}`;
    let segundos: string = `${("0" + (fecha.getSeconds())).slice(-2)}`;

    return `${fecha.getFullYear()}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;
  }

  static stringToDate(string: string): Date {
    // yyyy-MM-dd HH:mm:ss
    // 0123456789012345678
    // 0000000000111111111

    let anio: string = string.substring(0,4);
    let mes: string = string.substring(5,7);
    let dias: string = string.substring(8,10);
    let horas: string = string.substring(11,13);
    let minutos: string = string.substring(14,16);
    let segundos: string = string.substring(17);

    return new Date(parseInt(anio), parseInt(mes) -1,parseInt(dias),parseInt(horas),parseInt(minutos),parseInt(segundos));
  }

  static combine(fecha : Date, hora: string) : Date {
    return new Date(fecha.getFullYear(), fecha.getMonth(),fecha.getDate(),parseInt(hora),0,0);
  }
}
