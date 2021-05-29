export class CustomUtils {
  static isNotNil(value: any): boolean {
    return !(value === null || value === undefined);
  }

  static isNil(value: any): boolean {
    return value === null || value === undefined;
  }

  static isNotEmpty(value: Array<any>): boolean {
    return this.isNotNil(value) && value.length > 0;
  }
}
