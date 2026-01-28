# =============================================================================
# OPSFLUX Laravel - Production Dockerfile
# =============================================================================

# Stage 1: Build dependencies
FROM composer:2.7 AS composer-builder

WORKDIR /app

# Copy composer files
COPY composer.json composer.lock ./

# Install dependencies without dev packages
RUN composer install \
    --no-dev \
    --no-scripts \
    --no-autoloader \
    --prefer-dist \
    --ignore-platform-reqs

# Copy application code
COPY . .

# Generate optimized autoloader
RUN composer dump-autoload --optimize --no-dev

# =============================================================================
# Stage 2: Build frontend assets
FROM node:20-alpine AS frontend-builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production || npm install

# Copy source files
COPY . .

# Build assets
RUN npm run build || echo "No build script found, skipping..."

# =============================================================================
# Stage 3: Production image
FROM serversideup/php:8.3-fpm-nginx AS production

LABEL maintainer="OPSFLUX Team"
LABEL version="1.0"

# Set environment
ENV APP_ENV=production
ENV APP_DEBUG=false
ENV LOG_CHANNEL=stderr

# Install additional PHP extensions
USER root

RUN install-php-extensions \
    pdo_pgsql \
    pgsql \
    redis \
    pcntl \
    bcmath \
    gd \
    intl \
    zip \
    opcache

# Copy custom nginx configuration
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy PHP configuration
COPY docker/php/php.ini /usr/local/etc/php/conf.d/99-custom.ini
COPY docker/php/opcache.ini /usr/local/etc/php/conf.d/opcache.ini

# Set working directory
WORKDIR /var/www/html

# Copy application from builder stages
COPY --from=composer-builder /app/vendor ./vendor
COPY --from=frontend-builder /app/public/build ./public/build
COPY . .

# Set permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html/storage \
    && chmod -R 755 /var/www/html/bootstrap/cache

# Create startup script
COPY docker/start.sh /usr/local/bin/start.sh
RUN chmod +x /usr/local/bin/start.sh

# Switch to non-root user
USER www-data

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/health || exit 1

# Expose port
EXPOSE 80

# Start application
CMD ["/usr/local/bin/start.sh"]
