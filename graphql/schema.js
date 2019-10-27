module.exports = () => {
  return build => {
    build(`
      input Restaurant {
        id: Int,
        name: String,
        name_kana: String,
        category: String,
        tel: String,
        opentime: String,
        lunch: String,
        credit_cart: String,
        created_at: String,
        modified_at: String
      }

      type Mutation {
        createRestaurants(): [Restaurant]
      }
    `);
  };
};
