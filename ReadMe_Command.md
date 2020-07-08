## 사용자 및 비밀번호 변경
logstash/config/logstash.yml
logstash/pipeline/logstash.conf

## 내장 사용자 비번 초기화
docker exec -it elasticsearch /bin/bash
bin/elasticsearch-setup-passwords interactive

docker-compose exec -T elasticsearch bin/lasticsearch-setup-passwords auto --batch

## 시작
docker-compose up -d
-d 옵션 : 백그라운드 실행

## 재시작
docker-compose restart kibana logstash

## 종료
docker-compose down -v
docker rm -f $(docker ps -a -q)

## 웹접속
http://localhost:5601

## Docker 접속
docker exec -it elasticsearch /bin/bash
docker exec -it logstash /bin/bash


