declare global {
     interface NodeCallback {
          (err: any, result?: undefined | null): void
          (err: undefined | null, result: T): void
     }
}
