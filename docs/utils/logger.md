# Logger Utility

The logger utility is a powerful, type-safe logging solution built on top of [Pino](https://getpino.io/). It provides structured logging with different severity levels, pretty printing in development, and JSON output in production.

## Features

- Type-safe logging methods
- Environment-aware configuration
- Pretty printing in development
- JSON output in production
- Standard serializers for errors, requests, and responses
- Configurable log levels
- Automatic timestamp and process information

## Installation

The logger is pre-installed in the template and uses:

- `pino` for fast and structured logging
- `pino-pretty` for development-friendly output

## Usage

```typescript
import { log } from '@/utils/logger'

// Basic logging
log.info('Server started')

// Logging with context
log.info('User action', { userId: '123', action: 'login' })

// Error logging
try {
  // ... some code
} catch (error) {
  log.error('Operation failed', error, { operationId: '456' })
}
```

## API Reference

### Log Levels

The logger supports the following levels (in order of priority):

```typescript
type LogLevel = 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace'
```

### Logging Methods

```typescript
log.trace(msg: string, obj?: Record<string, unknown>): void
log.debug(msg: string, obj?: Record<string, unknown>): void
log.info(msg: string, obj?: Record<string, unknown>): void
log.warn(msg: string, obj?: Record<string, unknown>): void
log.error(msg: string, error?: Error, obj?: Record<string, unknown>): void
log.fatal(msg: string, error?: Error, obj?: Record<string, unknown>): void
```

## Configuration

The logger can be configured through environment variables:

```env
# Set the minimum log level
LOG_LEVEL=debug

# Environment affects output format
NODE_ENV=development # enables pretty printing
NODE_ENV=production # enables JSON output
```

## Examples

### Basic Logging

```typescript
log.info('Application started')
// Development output:
// [2024-02-20 10:00:00] INFO: Application started
// Production output:
// {"level":30,"time":1708423200000,"msg":"Application started","environment":"production"}
```

### Logging with Context

```typescript
log.info('User authenticated', {
  userId: '123',
  role: 'admin',
  loginMethod: 'oauth'
})
```

### Error Handling

```typescript
try {
  await someOperation()
} catch (error) {
  log.error('Failed to complete operation', error as Error, { operationId: '123', retry: true })
}
```

### Debug Information

```typescript
log.debug('Processing request', {
  requestId: '123',
  payload: {
    /* request data */
  },
  timestamp: new Date().toISOString()
})
```

### System Warnings

```typescript
log.warn('High memory usage', {
  memoryUsage: process.memoryUsage(),
  threshold: '90%'
})
```

### Fatal Errors

```typescript
log.fatal('Database connection lost', new Error('Connection timeout'), {
  connectionAttempts: 3,
  lastError: 'ETIMEDOUT'
})
```

## Best Practices

1. **Use Appropriate Levels**:

   - `trace`: Most granular information
   - `debug`: Debugging information
   - `info`: General information about application flow
   - `warn`: Warning messages for potentially harmful situations
   - `error`: Error messages for handled exceptions
   - `fatal`: Critical errors that may crash the application

2. **Structured Logging**:

   - Always include relevant context as structured data
   - Use objects for context rather than string interpolation
   - Include correlation IDs for request tracing

3. **Error Handling**:

   - Always pass Error objects to error/fatal methods
   - Include relevant context with errors
   - Use appropriate error levels

4. **Performance**:
   - Check log level before expensive operations
   - Avoid logging sensitive information
   - Use appropriate log levels in production

## TypeScript Support

The logger is fully typed for better development experience:

```typescript
import { log } from '@/utils/logger'

// Type-safe context objects
interface UserContext {
  userId: string
  action: string
  timestamp: string
}

// TypeScript will enforce correct types
const userContext: UserContext = {
  userId: '123',
  action: 'login',
  timestamp: new Date().toISOString()
}

log.info('User action', userContext)
```
