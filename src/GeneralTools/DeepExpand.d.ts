/**
 * 展开对象类型
 */
export type DeepExpand<T> = T extends Function | Primitive | Date | RegExp
    ? T
    : T extends Array<infer U>
    ? DeepExpandArray<U>
    : T extends object
    ? { [K in keyof T]: DeepExpand<T[K]> }
    : T
type DeepExpandArray<T> = Array<DeepExpand<T>>
type Primitive = string | number | boolean | symbol | undefined | null
