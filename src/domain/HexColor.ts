export class HexColor {
  readonly value: string;

  constructor(value: string) {
    if (!/^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i.test(value))
      throw new Error(`Invalid HexColor value: ${value}`);
    this.value = value;
  }
}
