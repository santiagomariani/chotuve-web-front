envsubst '\$PORT' < /etc/nginx/conf.d/react-nginx.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
