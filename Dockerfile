FROM webdevops/php-nginx:8.3-alpine

ENV WEB_DOCUMENT_ROOT=/var/www/html/public
ENV PHP_MEMORY_LIMIT=512M

WORKDIR /var/www/html

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy composer files first
COPY composer.json composer.lock ./

# Install dependencies
RUN composer install --no-dev --optimize-autoloader --no-interaction --no-scripts

# Copy rest of application
COPY . .

# Run post-install scripts
RUN composer dump-autoload --optimize

# Set permissions
RUN chown -R application:application /var/www/html
RUN chmod -R 755 storage bootstrap/cache 2>/dev/null || mkdir -p storage/framework/{sessions,views,cache} bootstrap/cache && chmod -R 755 storage bootstrap/cache

EXPOSE 80
