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
    },
    {
      "line": 1,
      "name": "@API"
    }
  ]
});
formatter.before({
  "duration": 126406,
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
  "duration": 2902683411,
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
  "duration": 1910303,
  "status": "passed"
});
formatter.match({
  "location": "WikipediaSearch.aUsershouldSeeTheResult()"
});
formatter.result({
  "duration": 111064,
  "status": "passed"
});
formatter.after({
  "duration": 14408,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "T002- Simple Search",
  "description": "",
  "id": "wikipedia-via-rest-assured;t002--simple-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User has access of wikipedia as a \"Normal User\" to search",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "he request with a search key \"\u003cSearchKey\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "he should see the results related with that search key",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "wikipedia-via-rest-assured;t002--simple-search;",
  "rows": [
    {
      "cells": [
        "SearchKey"
      ],
      "line": 19,
      "id": "wikipedia-via-rest-assured;t002--simple-search;;1"
    },
    {
      "cells": [
        "Earth"
      ],
      "line": 20,
      "id": "wikipedia-via-rest-assured;t002--simple-search;;2"
    },
    {
      "cells": [
        "Mars Planet"
      ],
      "line": 21,
      "id": "wikipedia-via-rest-assured;t002--simple-search;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 27292,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "T002- Simple Search",
  "description": "",
  "id": "wikipedia-via-rest-assured;t002--simple-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Positive"
    },
    {
      "line": 1,
      "name": "@API"
    },
    {
      "line": 1,
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User has access of wikipedia as a \"Normal User\" to search",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "he request with a search key \"Earth\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
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
  "duration": 706697881,
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
  "duration": 252560,
  "status": "passed"
});
formatter.match({
  "location": "WikipediaSearch.aUsershouldSeeTheResult()"
});
formatter.result({
  "duration": 70110,
  "status": "passed"
});
formatter.after({
  "duration": 9774,
  "status": "passed"
});
formatter.before({
  "duration": 25005,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "T002- Simple Search",
  "description": "",
  "id": "wikipedia-via-rest-assured;t002--simple-search;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Positive"
    },
    {
      "line": 1,
      "name": "@API"
    },
    {
      "line": 1,
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User has access of wikipedia as a \"Normal User\" to search",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "he request with a search key \"Mars Planet\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
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
  "duration": 794746367,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mars Planet",
      "offset": 30
    }
  ],
  "location": "WikipediaSearch.user_searchInWikipedia_withSearchKey(String)"
});
formatter.result({
  "duration": 345410,
  "status": "passed"
});
formatter.match({
  "location": "WikipediaSearch.aUsershouldSeeTheResult()"
});
formatter.result({
  "duration": 85889,
  "status": "passed"
});
formatter.after({
  "duration": 12835,
  "status": "passed"
});
});