# MSSQL
## MSSQL 설치
docker pull microsoft/mssql-server-windows-developer:2017-latest
docker pull microsoft/mssql-server-linux:latest

## MSSQL 실행
docker run -u 0:0 -p 1434:1433 -v "E:\GitHub\DSSDocker\mssql\data:/var/opt/mssql/data" --name dss_mssql -e "SA_PASSWORD=@passW0rd" -e 'MSSQL_PID=Developer' -e "ACCEPT_EULA=Y" -d microsoft/mssql-server-linux:latest

docker run -u 0:0 -p 1434:1433 -v "E:\GitHub\DSSDocker\mssql\data:/var/opt/mssql/data" -v "E:\GitHub\DSSDocker\mssql\certs:/var/opt/mssql/certs" -v "E:\GitHub\DSSDocker\mssql\logs:/var/opt/mssql/log" --name dss_mssql -e "SA_PASSWORD=@passW0rd" -e 'MSSQL_PID=Developer' -e "ACCEPT_EULA=Y" -e MSSQL_LCID=1042 -d microsoft/mssql-server-linux:latest

## MSSQL Docker volume 추가
docker create volume sqldata
docker run -itd -p 1434:1434 --name dss_mssql -e sa_password=@passW0rd -e ACCEPT_EULA=Y microsoft/mssql-server-windows-developer:2017-latest -v sqldata:/var/opt/mssql
docker run -d -p 1434:1434 --name dss_mssql -e sa_password=@passW0rd -e ACCEPT_EULA=Y microsoft/mssql-server-windows-developer:2017-latest -v E:/GitHub/DSSDocker/mssql:/var/opt/mssql

docker run -itd -v sqldata:/var/opt/mssql -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=@passW0rd" -p 1433:1434 --name sql1 -d mcr.microsoft.com/mssql/server:2019-GA-ubuntu-16.04

docker run -itd -v /E/GitHub/DSSDocker/mssql:/var/opt/mssql -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=@passW0rd" -p 1433:1434 --name dss_mssql -d mcr.microsoft.com/mssql/server:2019-GA-ubuntu-16.04

docker run -v /c/Users:/var/opt/mssql -it xblaster/tensorflow-jupyter bash

## Docker volume 삭제
docker rm -v <container id or name>
docker volume rm $(docker volume ls -qf dangling=true)
docker volume prune

## MSSQL IP 확인
docker inspect --format '{{.NetworkSettings.Networks.nat.IPAddress}}' mssql

## MSSQL 연결
docker exec -it mssql /bin/bash

/opt/mssql-tools/bin/sqlcmd -S 127.0.0.1,1433 -U SA -P '@passW0rd'
SELECT Name from sys.Databases
GO

## Database 생성
CREATE DATABASE DSS2021
GO
USE DSS2021
GO

Quit

- MSSQL_LCID=1042
- 정렬 : Korean_Wansung_CI_AS

## MSSQL sa 암호 변경
암호는 8자 이상이어야 하며 대문자, 소문자, 십진수 숫자 및 기호의 네 가지 집합 중 세 집합의 문자를 포함
docker exec -it dss_mssql /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "Pass@w0rd" -Q 'ALTER LOGIN SA WITH PASSWORD="qwe123!@#"'

## Docker Linux MSSQL ENCRYPTION
/* Docker linux only
ALTER SERVICE MASTER KEY FORCE REGENERATE;
GO

BACKUP SERVICE MASTER KEY TO FILE = '/var/opt/mssql/certs/servicemasterkey.smk'
    ENCRYPTION BY PASSWORD='wlsgkrtk_tjfbvudrktltmxpa!004';
GO
*/

## Microsoft SQL Management Studio 접속
localhost,1434