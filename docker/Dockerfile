FROM serversideup/php:8.3-fpm-nginx

LABEL maintainer="OPSFLUX Team"

USER root

# Install additional PHP extensions
RUN install-php-extensions pdo_pgsql pgsql redis pcntl bcmath intl

# Set working directory
WORKDIR /var/www/html

# Copy application files
COPY --chown=www-data:www-data . .

# Install composer dependencies
RUN composer install --no-dev --optimize-autoloader --no-interaction || true

# Install npm dependencies and build
RUN npm ci && npm run build || true

# Set permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html/storage \
    && chmod -R 755 /var/www/html/bootstrap/cache

USER www-data

EXPOSE 80
