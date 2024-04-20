import type { IntegerString } from './IntegerString'

/**
 * 判断字符串是不是整数
 * @example
 * ```ts
 * type Test1 = IsIntegerString<'12345'>; // true
 * type Test2 = IsIntegerString<'1234a5'>; // false
 * ```
 */
export type IsIntegerString<T extends string> = T extends IntegerString ? true : false
