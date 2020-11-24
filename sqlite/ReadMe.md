## 빌드
docker build -t sqlite .

## 실행
docker run --rm -it -v `pwd`:/db sqlite StudentCareer.db