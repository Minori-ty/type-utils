/**
 * 元组转联合类型
 * @example
 * ```ts
 * type videoType = ['动漫视频', '普通视频']
 * type union = TupleToUnion<videoType> // "动漫视频" | "普通视频"
 * ```
 */
export type TupleToUnion<T extends string[]> = T[number]
