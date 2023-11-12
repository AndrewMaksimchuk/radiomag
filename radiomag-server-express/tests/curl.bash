#!/usr/bin/env bash

URL_API='http://localhost:3000/api/'

function GET
{
  local URL_REQUEST="${URL_API}${1}"
  echo -e "\033[42m\033[30m[ GET ]" $URL_REQUEST "\033[49m\033[39m"
  curl -i $URL_REQUEST
  echo -e "\n"
}

function POST_FORM
{
  local URL_REQUEST="${URL_API}${1}"
  echo -e "\033[41m\033[30m[ POST ]" $URL_REQUEST "\033[49m\033[39m"
  curl -i \
  --request POST \
  --data "$2" \
  $URL_REQUEST
  echo -e "\n"
}

function POST_JSON
{
  local URL_REQUEST="${URL_API}${1}"
  echo -e "\033[41m\033[30m[ POST ]" $URL_REQUEST "\033[49m\033[39m"
  curl -i \
  --header "Content-Type: application/json" \
  --request POST \
  --data "$2" \
  $URL_REQUEST
  echo -e "\n"
}

GET 'bulletin'
POST_FORM 'bulletin' 'email=testmail@radiomag.com'
POST_FORM 'error' 'data=test'
GET 'groupName/53'
GET 'group/53'
GET 'catalog'
POST_JSON 'order'
GET 'contacts'
POST_JSON 'ping' '{"action":"go to page","from":"test-to","to":"/test-done"}'
GET 'search/attiny13'
POST_JSON 'login' '{"password":"df12sdg?32dsfds", "phone":"+330543234509", "name":""}'
GET 'slider'
GET 'catalog/1'
GET 'manager'
GET 'shop'
