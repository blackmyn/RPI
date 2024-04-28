module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define("bookstable", {
    title: {
      type: Sequelize.STRING
    },
    author: {
      type: Sequelize.STRING
    },
    pages: {
      type: Sequelize.INTEGER
    }
  });

  return Book;
};