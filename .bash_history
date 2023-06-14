ls
cd backend
ls
composer create-project laravel/laravel laravel
composer create-project laravel/laravel .
composer create-project laravel/laravel ./
ls
cd ..
ls
cd backend
composer create-project laravel/laravel .
composer create-project --prefer-dist laravel/laravel . "10.*"
ls
composer create-project --prefer-dist laravel/laravel . "10.*"
composer create-project --prefer-dist laravel/laravel laravel  "10.*"
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate
php artisan config:sache
php artisan config:cache
php artisan config:clear
php artisan config:clear
exit
