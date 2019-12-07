"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Group",
    embedded: false
  },
  {
    name: "Meeting",
    embedded: false
  },
  {
    name: "Geometry",
    embedded: false
  },
  {
    name: "Weekday",
    embedded: false
  },
  {
    name: "meetingType",
    embedded: false
  },
  {
    name: "regionType",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
