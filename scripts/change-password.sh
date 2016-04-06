#!/bin/bash

curl "http://tic-tac-toe.wdibos.com/change-password/$ID" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=$TOKEN" \
  --data "{
      \"passwords\" : {
      \"old\" : \"$OLD\",
      \"new\" : \"$NEW\",
    }
  }"

# data output from curl doesn't have a trailing newline
echo
