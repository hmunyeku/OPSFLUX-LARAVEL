<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>OPSFLUX</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
        }
        .container {
            text-align: center;
            padding: 2rem;
        }
        .logo {
            font-size: 4rem;
            font-weight: 800;
            background: linear-gradient(90deg, #00d4ff, #7b2ff7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1rem;
        }
        .tagline {
            font-size: 1.25rem;
            color: #a0aec0;
            margin-bottom: 2rem;
        }
        .status {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            background: rgba(255,255,255,0.1);
            border-radius: 9999px;
            font-size: 0.875rem;
        }
        .status-dot {
            width: 8px;
            height: 8px;
            background: #48bb78;
            border-radius: 50%;
            animation: pulse 2s infinite;
        }
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
        .info {
            margin-top: 3rem;
            font-size: 0.875rem;
            color: #718096;
        }
        .info a {
            color: #00d4ff;
            text-decoration: none;
        }
        .version {
            margin-top: 1rem;
            font-size: 0.75rem;
            color: #4a5568;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">OPSFLUX</div>
        <p class="tagline">Application de gestion d'opérations</p>
        <div class="status">
            <span class="status-dot"></span>
            <span>Système opérationnel</span>
        </div>
        <div class="info">
            <p>Propulsé par <a href="https://laravel.com" target="_blank">Laravel 11</a></p>
        </div>
        <div class="version">
            PHP {{ PHP_VERSION }} | Laravel {{ app()->version() }}
        </div>
    </div>
</body>
</html>
