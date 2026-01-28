FROM serversideup/php:8.3-fpm-nginx

USER root

# Install PHP extensions
RUN install-php-extensions pdo_pgsql pgsql redis pcntl bcmath intl

WORKDIR /var/www/html

# Copy all files
COPY . .

# Install dependencies
RUN composer install --no-dev --optimize-autoloader --no-interaction 2>/dev/null || echo "Composer install skipped"
RUN npm install 2>/dev/null && npm run build 2>/dev/null || echo "NPM build skipped"

# Set permissions
RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 755 storage bootstrap/cache 2>/dev/null || true

USER www-data

EXPOSE 80
