ARG PHP_VERSION=${PHP_VERSION:-8.0}
FROM php:${PHP_VERSION}-fpm-alpine AS php-system-setup

# Install system dependencies
RUN apk add --no-cache dcron busybox-suid libcap curl zip unzip git

RUN apk --no-cache add \
  shadow \
  bash \
  gcc \
  lcms2-dev \
  libpng-dev \
  g++ \
  musl-dev \
  autoconf \
  automake \
  make \
  libtool \
  nasm \
  tiff \
  jpeg \
  zlib \
  zlib-dev \
  file \
  pkgconf \
  && rm -rf /var/cache/apk/*
RUN apk add --no-cache vim

# Install PHP extensions
COPY --from=mlocati/php-extension-installer /usr/bin/install-php-extensions /usr/bin/
RUN install-php-extensions intl bcmath gd pdo_mysql redis uuid exif pcntl zip

# Install supervisord implementation
COPY --from=ochinchina/supervisord:latest /usr/local/bin/supervisord /usr/local/bin/supervisord

# Install caddy
COPY --from=caddy:2.2.1 /usr/bin/caddy /usr/local/bin/caddy
RUN setcap 'cap_net_bind_service=+ep' /usr/local/bin/caddy

# Install composer
COPY --from=composer/composer:2 /usr/bin/composer /usr/local/bin/composer

FROM php-system-setup AS app-setup

# Set working directory
ENV LARAVEL_PATH=/srv/app
WORKDIR $LARAVEL_PATH

# Add non-root user: 'app'
ARG NON_ROOT_GROUP=${NON_ROOT_GROUP:-app}
ARG NON_ROOT_USER=${NON_ROOT_USER:-app}
RUN addgroup -S $NON_ROOT_GROUP && adduser -S $NON_ROOT_USER -G $NON_ROOT_GROUP
RUN addgroup $NON_ROOT_USER wheel

# Set cron job
COPY ./.deploy/config/crontab /etc/crontabs/$NON_ROOT_USER
RUN chmod 777 /usr/sbin/crond
RUN chown -R $NON_ROOT_USER:$NON_ROOT_GROUP /etc/crontabs/$NON_ROOT_USER && setcap cap_setgid=ep /usr/sbin/crond

# Switch to non-root 'app' user & install app dependencies
COPY . $LARAVEL_PATH/
RUN chown -R $NON_ROOT_USER:$NON_ROOT_GROUP $LARAVEL_PATH
USER $NON_ROOT_USER
RUN composer install --prefer-dist --no-scripts --no-dev --no-autoloader
RUN rm -rf /home/$NON_ROOT_USER/.composer

# Copy php config
COPY ./.deploy/config/php/local.ini /usr/local/etc/php/conf.d/local.ini

# Copy vim config
COPY ./.deploy/config/vimrc /home/app/.vimrc

# Set any ENVs
ARG APP_ENV=${APP_ENV:-production}
ARG APP_DEBUG=${APP_DEBUG:-false}
ARG APP_KEY=${APP_KEY}
ARG APP_THEME=${APP_THEME:-pterodactyl}
ARG APP_TIMEZONE=${APP_TIMEZONE:-Europe/Amsterdam}
ARG APP_CLEAR_TASKLOG=${APP_CLEAR_TASKLOG:-720}
ARG APP_DELETE_MINUTES=${APP_DELETE_MINUTES:-10}
ARG APP_ENVIRONMENT_ONLY=${APP_ENVIRONMENT_ONLY:-true}
ARG LOG_CHANNEL=${LOG_CHANNEL:-daily}
ARG APP_LOCALE=${APP_LOCALE:-en}
ARG APP_URL=${APP_URL}

ARG DB_HOST=${DB_HOST}
ARG DB_PORT=${DB_PORT}
ARG DB_DATABASE=${DB_DATABASE}
ARG DB_USERNAME=${DB_USERNAME}
ARG DB_PASSWORD=${DB_PASSWORD}

ARG HASHIDS_SALT=${HASHIDS_SALT}
ARG HASHIDS_LENGTH=${HASHIDS_LENGTH:-8}

ARG MAIL_DRIVER=${MAIL_DRIVER:-smtp}
ARG MAIL_HOST=${MAIL_HOST:-smtp.example.com}
ARG MAIL_PORT=${MAIL_PORT:-25}
ARG MAIL_USERNAME=${MAIL_USERNAME}
ARG MAIL_PASSWORD=${MAIL_PASSWORD}
ARG MAIL_ENCRYPTION=${MAIL_ENCRYPTION:-tls}
ARG MAIL_FROM=${MAIL_FROM:-no-reply@example.com}

ARG MAILGUN_ENDPOINT=${MAILGUN_ENDPOINT:-api.mailgun.net}
ARG SERVER_NAME=${SERVER_NAME:-panel.example.com}

ARG QUEUE_HIGH=${QUEUE_HIGH:-high}
ARG QUEUE_STANDARD=${QUEUE_HIGH:-standard}
ARG QUEUE_LOW=${QUEUE_HIGH:-low}

ARG APP_SERVICE_AUTHOR=${APP_SERVICE_AUTHOR}
ARG CACHE_DRIVER=${CACHE_DRIVER:-redis}
ARG SESSION_DRIVER=${SESSION_DRIVER:-database}
ARG QUEUE_CONNECTION=${QUEUE_CONNECTION:-redis}
ARG REDIS_HOST=${REDIS_HOST:-localhost}
ARG REDIS_PASSWORD=${REDIS_PASSWORD:-test}
ARG REDIS_PORT=${REDIS_PORT:-6379}

# Start app
EXPOSE 80
COPY ./.deploy/entrypoint.sh /

ENTRYPOINT ["sh", "/entrypoint.sh"]
