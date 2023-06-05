
export interface IDefineConfig {
  input: string,
  output: string
}

export type TFlatten<T extends object> = object extends T ? object : {
  [K in keyof T]-?: (x: NonNullable<T[K]> extends infer V ? V extends object ?
      V extends any[] ? Pick<T, K> : TFlatten<V> extends infer FV ? ({
          [P in keyof FV as `${Extract<K, string | number>}.${Extract<P, string | number>}`]:
          FV[P] }) : never : Pick<T, K> : never
  ) => void } extends Record<keyof T, (y: infer O) => void> ?
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  O extends unknown ? { [K in keyof O]: O[K] } : never : never
