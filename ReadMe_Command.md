## Docker Hub
dannyjeon

## Docker Build
docker-compose build

## Docker Remove
docker rmi [image id]
<!-- docker rmi $(docker images -a -q) -f -->

## 사용자 및 비밀번호 변경
logstash/config/logstash.yml
logstash/pipeline/logstash.conf

## 시작
docker-compose up -d
-d 옵션 : 백그라운드 실행

## 내장 사용자 비번 초기화
docker-compose exec -T elasticsearch bin/elasticsearch-setup-passwords auto --batch

docker exec -it elasticsearch /bin/bash
bin/elasticsearch-setup-passwords interactive
<!-- SQLite Plugin Install-->
docker exec -it logstash /bin/bash
bin/logstash-plugin install logstash-input-sqlite

## Logstash 파이프라인 확인
docker exec -it logstash /bin/bash
java -jar logstash-1.3.3-flatjar.jar agent -f logstash-elasticsearch.conf -v

## 재시작
docker-compose restart  logstash kibana elasticsearch sqlite

## 종료
docker-compose down -v
docker rm -f $(docker ps -a -q)

## 웹접속
http://localhost:5601

## Docker 접속
docker exec -it elasticsearch /bin/bash
docker exec -it logstash /bin/bash
docker exec -it sqlite /bin/bash


