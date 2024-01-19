import { ErrorInvalidParam } from "./ErrorInvalidParam";
import { HexColor } from "./HexColor";

export class Tag {
  title: string;
  color: HexColor;

  constructor(title: string, color: HexColor) {
    if (!this.isValid(title)) throw new ErrorInvalidParam("title");
    this.title = title;
    this.color = color;
  }

  private isValid(title: unknown): boolean {
    if (!this.isTypeValid(title)) return false;
    if (!this.isLengthValid(title as string)) return false;
    return true;
  }

  private isTypeValid(title: unknown): boolean {
    return typeof title === "string";
  }

  private isLengthValid(title: string): boolean {
    const maxLength = 20;
    return title.length && title.length <= maxLength;
  }
}
