/bin/bash -c "envsubst < /etc/nginx/conf.d/react-nginx.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"