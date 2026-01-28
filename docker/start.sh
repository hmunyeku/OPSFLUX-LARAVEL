#!/bin/sh
set -e

echo "🚀 Starting OPSFLUX Laravel Application..."

# Wait for database to be ready
echo "⏳ Waiting for database connection..."
MAX_RETRIES=30
RETRY_COUNT=0

while [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
    if php artisan db:monitor --databases=pgsql > /dev/null 2>&1; then
        echo "✅ Database connection established"
        break
    fi
    RETRY_COUNT=$((RETRY_COUNT + 1))
    echo "Waiting for database... ($RETRY_COUNT/$MAX_RETRIES)"
    sleep 2
done

if [ $RETRY_COUNT -eq $MAX_RETRIES ]; then
    echo "⚠️ Could not connect to database, continuing anyway..."
fi

# Run migrations
echo "📦 Running database migrations..."
php artisan migrate --force || echo "Migration failed or already up to date"

# Clear and cache configuration
echo "⚡ Optimizing application..."
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache

# Create storage link if not exists
php artisan storage:link 2>/dev/null || true

echo "✅ Application ready!"

# Start supervisor (PHP-FPM + Nginx)
exec /init
