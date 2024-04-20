/**
 * 判断字符串是不是以`https://`或者`http://`开头的url
 * @example
 * ```ts
 * type Test1 = IsUrl<'http://example.com'>;  // 结果为 true
 * type Test2 = IsUrl<'https://example.com'>; // 结果为 true
 * type Test3 = IsUrl<'ftp://example.com'>;   // 结果为 false
 * ```
 */
export type IsUrl<T extends string> = T extends `http://${infer Rest}` | `https://${infer Rest}` ? true : false
