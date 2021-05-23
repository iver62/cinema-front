#!/bin/bash
# executable for rest client typescript angular generation
rm -rf "../src/app/restclient"
mkdir "../src/app/restclient"
java -jar openapi-generator-cli-3.3.4.jar generate -i http://localhost:8080/api -g typescript-angular -o "..\src\app\restclient" --additional-properties ngVersion=10 --additional-properties  dateLibrary=java8 --skip-validate-spec