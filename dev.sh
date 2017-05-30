docker build -t kin-client .
docker stop kinclient && docker rm -v kinclient
docker run -d -p 8000:8080 --env-file kin.env --name kinclient kin-client
docker logs -f kinclient
