#!/bin/sh

echo "🪐 entrypoint.sh: [$(whoami)] [PHP $(php -r 'echo phpversion();')]"

composer dump-autoload --no-interaction --no-dev --optimize

echo "🪐 artisan commands"

php artisan clear
php artisan config:clear
php artisan view:clear
php artisan route:cache
php artisan storage:link
php artisan migrate --no-interaction --
php artisan optimize

echo "🎬 start supervisord"

supervisord -c $LARAVEL_PATH/.deploy/config/supervisor.conf
