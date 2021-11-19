export class Datehelper {
  static setDate(dateObject: Date): string{

  if(!dateObject) {
    return null as any;
  }
  const date = new Date(dateObject),
  yr = date.getFullYear(),
  month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() +1),
  day = date.getDate() <10 ? '0' + date.getDate() : date.getDate(),
  NewDate = yr + '-' + month + '-' + day; // can be any format as required.

return NewDate + 'T00:00:00';
}
}
