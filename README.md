# OPSFLUX - Laravel Application

Application de gestion d'opérations développée avec Laravel 11.

## Stack Technique

- **Backend**: Laravel 11 / PHP 8.3
- **Database**: PostgreSQL 17
- **Cache/Queue**: Redis
- **Frontend**: Vite + TailwindCSS (optionnel)
- **Deployment**: Dokploy

## Structure Docker

```
├── docker/
│   ├── Dockerfile          # Image de production multi-stage
│   ├── nginx/
│   │   └── default.conf    # Configuration Nginx
│   ├── php/
│   │   ├── php.ini         # Configuration PHP
│   │   └── opcache.ini     # Configuration OPcache
│   └── start.sh            # Script de démarrage
├── docker-compose.yml      # Configuration Dokploy
└── .env.example            # Variables d'environnement
```

## Services Docker

| Service | Description |
|---------|-------------|
| `app` | Application Laravel (PHP-FPM + Nginx) |
| `queue` | Worker pour les jobs asynchrones |
| `scheduler` | Scheduler pour les tâches planifiées |

## Déploiement sur Dokploy

### 1. Créer le repository GitHub

```bash
git init
git add .
git commit -m "Initial commit - OPSFLUX Laravel"
git branch -M main
git remote add origin https://github.com/hmunyeku/OPSFLUX-LARAVEL.git
git push -u origin main
```

### 2. Configuration Dokploy

1. Dans Dokploy, aller au service **opsflux-laravel**
2. Configurer la source GitHub :
   - Repository: `OPSFLUX-LARAVEL`
   - Owner: `hmunyeku`
   - Branch: `main`
3. Les variables d'environnement sont déjà configurées

### 3. Lancer le déploiement

Cliquer sur **Deploy** dans l'interface Dokploy.

## Développement Local

```bash
# Installer les dépendances
composer install
npm install

# Configurer l'environnement
cp .env.example .env
php artisan key:generate

# Lancer les migrations
php artisan migrate

# Lancer le serveur de développement
php artisan serve
npm run dev
```

## Commandes Utiles

```bash
# Migrations
php artisan migrate
php artisan migrate:fresh --seed

# Cache
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Queue
php artisan queue:work

# Tests
php artisan test
```

## Variables d'Environnement Dokploy

| Variable | Description |
|----------|-------------|
| `APP_KEY` | Clé de chiffrement Laravel |
| `DB_HOST` | Host PostgreSQL (perenco-pgsql-mdi1y2) |
| `DB_DATABASE` | Nom de la BDD (opsflux_laravel) |
| `DB_PASSWORD` | Mot de passe PostgreSQL |
| `REDIS_HOST` | Host Redis (perenco-redis-zhdi9l) |
| `REDIS_PASSWORD` | Mot de passe Redis |

## Licence

Propriétaire - OPSFLUX © 2024
