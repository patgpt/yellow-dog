/**
 * @module Utils
 * @description Advanced logging utility built on top of Pino
 */

import pino from 'pino'

/**
 * Configuration options for the logger
 *
 * @interface LoggerOptions
 * @property {('trace'|'debug'|'info'|'warn'|'error'|'fatal')} level - The minimum log level to output
 * @property {string} environment - The current environment (development, production, etc.)
 */
interface LoggerOptions {
  level: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal'
  environment: string
}

/**
 * Default configuration for the logger
 * Uses environment variables when available, falls back to sensible defaults
 */
const defaultOptions: LoggerOptions = {
  level: (process.env.LOG_LEVEL as LoggerOptions['level']) || 'info',
  environment: process.env.NODE_ENV || 'development'
}

/**
 * Configured Pino logger instance with enhanced formatting and environment-aware settings
 * Modified for Next.js App Router compatibility
 *
 * @description
 * - Provides structured logging with severity levels
 * - Includes process and environment information
 * - JSON output format
 * - Standard serializers for common objects
 * - Disabled worker threads for App Router compatibility
 */
const logger = pino({
  level: defaultOptions.level,
  formatters: {
    level(label) {
      return { severity: label }
    },
    bindings(bindings) {
      return {
        pid: bindings.pid,
        host: bindings.hostname,
        node_version: process.version
      }
    }
  },
  timestamp: () => `,"timestamp":"${new Date(Date.now()).toISOString()}"`,
  base: {
    environment: defaultOptions.environment,
    service: 'yellow-dog'
  },
  // Disable worker threads which cause issues in Next.js App Router
  browser: {
    asObject: true
  },
  mixin: undefined,
  // Remove transport configuration which uses worker threads
  serializers: {
    error: pino.stdSerializers.err,
    req: pino.stdSerializers.req,
    res: pino.stdSerializers.res
  }
})

/**
 * Type-safe logging interface with structured methods for different log levels
 *
 * @example
 * ```typescript
 * // Basic logging
 * log.info('Server started')
 *
 * // Logging with context
 * log.info('User action', { userId: '123', action: 'login' })
 *
 * // Error logging
 * try {
 *   // ... some code
 * } catch (error) {
 *   log.error('Operation failed', error, { operationId: '456' })
 * }
 * ```
 */
export const log = {
  /**
   * Log at trace level - most granular information
   * @param {string} msg - The message to log
   * @param {Record<string, unknown>} [obj] - Additional context
   */
  trace: (msg: string, obj?: Record<string, unknown>) => logger.trace(obj, msg),

  /**
   * Log at debug level - debugging information
   * @param {string} msg - The message to log
   * @param {Record<string, unknown>} [obj] - Additional context
   */
  debug: (msg: string, obj?: Record<string, unknown>) => logger.debug(obj, msg),

  /**
   * Log at info level - general information
   * @param {string} msg - The message to log
   * @param {Record<string, unknown>} [obj] - Additional context
   */
  info: (msg: string, obj?: Record<string, unknown>) => logger.info(obj, msg),

  /**
   * Log at warn level - warnings
   * @param {string} msg - The message to log
   * @param {Record<string, unknown>} [obj] - Additional context
   */
  warn: (msg: string, obj?: Record<string, unknown>) => logger.warn(obj, msg),

  /**
   * Log at error level - handled errors
   * @param {string} msg - The error message
   * @param {Error} [error] - The error object
   * @param {Record<string, unknown>} [obj] - Additional context
   */
  error: (msg: string, error?: Error, obj?: Record<string, unknown>) => {
    if (error) {
      return logger.error({ ...obj, err: error }, msg)
    }
    return logger.error(obj, msg)
  },

  /**
   * Log at fatal level - unhandled errors that may crash the application
   * @param {string} msg - The error message
   * @param {Error} [error] - The error object
   * @param {Record<string, unknown>} [obj] - Additional context
   */
  fatal: (msg: string, error?: Error, obj?: Record<string, unknown>) => {
    if (error) {
      return logger.fatal({ ...obj, err: error }, msg)
    }
    return logger.fatal(obj, msg)
  }
}

export default logger
