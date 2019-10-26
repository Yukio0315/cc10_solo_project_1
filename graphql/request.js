const { request } = require("graphql-request");

const query = `{
    Restaurant(){
        id: Int
    }
}`;

request(
  "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=db385bf86e2400674a4ea22b7d480d8a&latitude=35.658062&longitude=139.7275625&range=3",
  query
).then(data => console.log(data));
