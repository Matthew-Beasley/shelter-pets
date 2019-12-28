
12/27/2019

https://rescuegroups.org/services/adoptable-pet-data-api/
waiting for api key


Pet finder api credentials, waiting for reply about domain origin (cors issue)
api key  kTkq5OF4L9FjO4bQcMXrSSKZZZQiLKJ82ZIqG1JJhhPPt6kD4A
secret 5fycV7UzMZBF2aoixMVXtIrQ306XSerhfkO29uZA

token request (curl):
curl -d "grant_type=client_credentials&client_id=kTkq5OF4L9FjO4bQcMXrSSKZZZQiLKJ82ZIqG1JJhhPPt6kD4A&client_secret=5fycV7UzMZBF2aoixMVXtIrQ306XSerhfkO29uZA" https://api.petfinder.com/v2/oauth2/token

launch chrome without cross site security:
open -a /Applications/Google\ Chrome.app --args --disable-web-security --user-data-dir="/tmp/chrome_tmp"