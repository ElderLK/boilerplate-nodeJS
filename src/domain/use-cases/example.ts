export namespace ExampleInterface {
  export interface Example {
    print: (name?: string) => string
  }
}

export class Example implements ExampleInterface.Example {
  print (name?: string) {
    return `Hello ${name?.toLocaleUpperCase() ?? 'there'}`
  }
}
