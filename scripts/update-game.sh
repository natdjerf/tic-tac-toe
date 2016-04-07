#!/bin/bash

curl "http://tic-tac-toe.wdibos.com/change-password/$ID" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=$TOKEN" \
  --data "{
      \"game\" : {
        \"cell\" : {
          \"index\" : \"$INDEX\",
          \"value\" : \"$VALUE\",
          }
          \"over\" : \"$OVER\",
        }
  }"

# data output from curl doesn't have a trailing newline
echo
