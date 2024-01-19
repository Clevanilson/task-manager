export class ErrorInvalidParam extends Error {
  constructor(paramName: string) {
    super(`Invalid param: ${paramName}`);
  }
}
