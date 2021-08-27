#!/bin/bash
app="portfolio"
docker build -t ${app} .
docker run -d -p 8000:3000 --name=${app} -v $PWD:/app ${app}