class Error {
  private readonly message: string;

  constructor(message: string) {
    this.message = message;
  }

  get(): string {
    return this.message;
  }

}

export default Error;
