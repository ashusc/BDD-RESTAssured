$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("WikiSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Wikipedia via REST-Assured",
  "description": "In order to access the wikipedia search results\nAs normal users with a search key\nI should get all the search results for that search key",
  "id": "wikipedia-via-rest-assured",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test1"
    }
  ]
});
formatter.before({
  "duration": 143747,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "T001- Simple Search",
  "description": "",
  "id": "wikipedia-via-rest-assured;t001--simple-search",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Positive"
    },
    {
      "line": 7,
      "name": "@API"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User has access of wikipedia as a \"Normal User\" to search",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "he request with a search key \"Earth\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "he should see the results related with that search key",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Normal User",
      "offset": 35
    }
  ],
  "location": "WikipediaSearch.acccessTheWikipedia(String)"
});
formatter.result({
  "duration": 2945441359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Earth",
      "offset": 30
    }
  ],
  "location": "WikipediaSearch.user_searchInWikipedia_withSearchKey(String)"
});
formatter.result({
  "duration": 1428496,
  "status": "passed"
});
formatter.match({
  "location": "WikipediaSearch.aUsershouldSeeTheResult()"
});
formatter.result({
  "duration": 74168,
  "status": "passed"
});
formatter.after({
  "duration": 12953,
  "status": "passed"
});
});