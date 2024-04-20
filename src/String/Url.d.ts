/**
 * 以https://和http://开头的字符串类型
 */
export type Url = `${'https://' | 'http://'}${string}`
