#!/bin/sh

curl "http://tic-tac-toe.wdibos.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data "{
      \"credentials\" : {
      \"email\" : \"$EMAIL\",
      \"password\" : \"$PASSWORD\"
    }
  }"

  echo

# command line.
# curl --include --request POST http://tic-tac-toe.wdibos.com/sign-up --header "Content-Type: application/json" --data '{credentials : {"email" : "abc@123.com", "password" : "123"}}'
