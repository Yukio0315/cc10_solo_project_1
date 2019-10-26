module.exports = buildSchema => {
  return {
    root: require("./root"),
    schema: require("./schema")(buildSchema)
  };
};
