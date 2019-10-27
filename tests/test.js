const { expect, assert } = require("chai");
const config = require("../config");
const knex = require("knex")(config.db);
const models = require("../models")(knex);

const forcePromiseReject = () => {
  throw new Error("This promise should have failed");
};

describe("restaurants", () => {
  describe("setup", () => {
    it("able to connect to database", () =>
      knex
        .raw("select 1+1 as result")
        .catch(() => assert.fail("unable to connect")));
    it("has run the initial migrations", () =>
      knex("restaurants")
        .select()
        .catch(() => assert.fail("restaurant table is not exist")));
  });

  describe("#add", () => {
    let params = {
      name: "",
      category: "",
      url: "",
      address: "",
      tel: "",
      opentime: "",
      budget: "",
      lunch: ""
    };

    it("refused", () =>
      models.restaurants
        .add(params)
        .then(forcePromiseReject)
        .catch(err =>
          expect(err.message).to.equal("Input the correct params")
        ));
    context("when good params are given", () => {
      before(() => {
        params.name = "test";
        params.category = "test";
        params.url = "test";
        params.address = "test";
        params.tel = "test";
        params.opentime = "test";
        params.budget = 123;
        params.lunch = 123;
      });
      afterEach(() => knex("restaurants").del());

      it("add a restaurant", () =>
        models.restaurants.add(params).then(restaurant => {
          console.log(restaurant[0]);
          expect(restaurant[0]["name"]).to.equal(params.name);
          expect(restaurant[0]["id"]).to.be.a("number");
        }));
    });
  });
});
