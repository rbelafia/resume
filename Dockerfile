FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/index.html /usr/share/nginx/html/index.html
COPY dist/assets /usr/share/nginx/html/resume/assets/
