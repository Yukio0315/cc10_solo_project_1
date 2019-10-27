module.exports = (buildSchema, models) => {
  console.log(buildSchema);
  return {
    root: require("./root")(models),
    schema: require("./schema")(buildSchema)
  };
};
