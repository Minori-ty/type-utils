/**
 * 以`.png`、`.jpg`、`.webp`结尾的图片链接类型
 */
export type ImageUrl = `${'https://' | 'http://'}${string}${'.jpg' | '.png' | '.webp'}`
