import type { ImageUrl } from './ImageUrl'

/**
 * 判断字符串是不是图片链接
 * @example
 * ```ts
 * type Test1 = IsImageUrl<'http://example.com/image.png'> // true
 * type Test2 = IsImageUrl<'https://example.com/image.jpg'> // true
 * type Test3 = IsImageUrl<'https://example.com/image.webp'> // true
 * type Test4 = IsImageUrl<'http://example.com/image.gif'> // false
 * type Test5 = IsImageUrl<'ftp://example.com/image.png'> // false
 * ```
 */
type IsImageUrl<T extends string> = T extends ImageUrl ? true : false
