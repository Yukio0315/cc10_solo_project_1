module.exports = () => {
  return build => {
    build(`
      type Restaurant {
        id: Ind,
      }
      `);
  };
};
