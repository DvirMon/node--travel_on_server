const cors = require("cors");
const express = require("express");
const helmet = require("helmet");

const middlewares = [helmet(), cors(), express.json()];

module.exports = middlewares;
