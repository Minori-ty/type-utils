type IsDigit<Char extends string> = Char extends '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    ? true
    : false

/**
 * 判断字符串是不是整数
 * @example
 * ```ts
 * type Test1 = IsIntegerString<'12345'>; // true
 * type Test2 = IsIntegerString<'1234a5'>; // false
 * ```
 */
export type IsIntegerString<S extends string> = S extends `${infer FirstCharacter}${infer Rest}`
    ? IsDigit<FirstCharacter> extends true
        ? IsIntegerString<Rest>
        : false
    : true
