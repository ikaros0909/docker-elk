const express = require("express");
const elasticsearch = require("elasticsearch");
const app = express();

const {
    searchContents
  } = require("./index-control");

const port = 3000

const result = searchContents("detailability-index", ["content", "content2"], "수학");