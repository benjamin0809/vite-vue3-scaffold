/**
 * @description: 开发模式
 */
export const devMode = 'development'

/**
 * @description: 生产模式
 */
export const prodMode = 'production'

/**
 * @description: 测试模式
 */
// export const testMode = 'test';

/**
 * @description: 是否开发模式
 * @returns: boolean
 */
export const isDevMode = (): boolean => import.meta.env.DEV

/**
 * @description: 是否生产模式
 * @returns: boolean
 */
export const isProdMode = (): boolean => import.meta.env.PROD

/**
 * @description: 是否测试模式
 * @returns: boolean
 */
// export const isTestMode = (): boolean => import.meta.env.TEST;
