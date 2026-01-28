<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "=== OPSFLUX Diagnostic ===\n\n";

echo "1. Current directory: " . getcwd() . "\n";
echo "2. Document root: " . $_SERVER['DOCUMENT_ROOT'] . "\n\n";

echo "3. Checking vendor directory:\n";
$vendorPath = __DIR__ . '/../vendor';
if (is_dir($vendorPath)) {
    echo "   - vendor/ EXISTS\n";
    $files = scandir($vendorPath);
    echo "   - Files: " . count($files) . "\n";
    foreach (array_slice($files, 0, 10) as $f) {
        echo "     * $f\n";
    }
} else {
    echo "   - vendor/ DOES NOT EXIST\n";
}

echo "\n4. Checking autoload:\n";
$autoload = __DIR__ . '/../vendor/autoload.php';
if (file_exists($autoload)) {
    echo "   - autoload.php EXISTS\n";
} else {
    echo "   - autoload.php MISSING\n";
}

echo "\n5. Checking composer.json:\n";
$composerPath = __DIR__ . '/../composer.json';
if (file_exists($composerPath)) {
    $composer = json_decode(file_get_contents($composerPath), true);
    echo "   - Name: " . ($composer['name'] ?? 'N/A') . "\n";
    echo "   - Type: " . ($composer['type'] ?? 'N/A') . "\n";
}

echo "\n6. PHP version: " . PHP_VERSION . "\n";
echo "7. User: " . get_current_user() . " / " . posix_getpwuid(posix_geteuid())['name'] . "\n";
