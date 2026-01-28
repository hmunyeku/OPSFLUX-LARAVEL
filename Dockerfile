FROM webdevops/php-nginx:8.3-alpine

ENV WEB_DOCUMENT_ROOT=/var/www/html/public
ENV PHP_MEMORY_LIMIT=512M

WORKDIR /var/www/html

# Copy Composer from official image
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Copy application files
COPY . .

# Install dependencies
RUN composer install --no-dev --optimize-autoloader --no-interaction || echo "Composer failed"

# Set permissions
RUN chown -R application:application /var/www/html \
    && chmod -R 755 storage bootstrap/cache || true

EXPOSE 80
