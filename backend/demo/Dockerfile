FROM openjdk:latest

COPY ./target/backend.jar backend.jar
ENV DATAPORT 3306
ENTRYPOINT ["java","-Ddatabase=${DATAPORT}" ,"-jar","/backend.jar"]



