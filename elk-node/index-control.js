const elasticsearch = require("elasticsearch");

const client = new elasticsearch.Client({
    host: "http://localhost:9200",
    log: "error"
  });

// 검색 실행
const search = (index, body) => {
    return client.search({ index: index, body: body });
  };

exports.searchContents = (index, fields, searchWord) => {
    let body = {
        size: 10,
        from: 0,
        query: {
        multi_match: {
            query: `${searchWord}`,
            fields: fields,
            operator: "and",
            //  analyzer: "my_analyzer",
            fuzziness: 1
        }
        }
    };

    search(index, body)
        .then((results) => {
        console.log(
            `found ${results.hits.total.value} items in ${results.took}ms`
        );
        var hitsPretty = JSON.stringify(results);
        console.log(hitsPretty);
        if (results.hits.total.value > 0) {
            console.log(`returned data:`);
            results.hits.hits.forEach((hit, index) =>
            console.log(index, hit._id, hit._score, hit._source)
            );
            return results.hits;
        } else {
            console.log(`returned data: 0`);

            return {};
        }
        })
        .catch((err) => {
        console.error(err.message);
        return err;
    });
};