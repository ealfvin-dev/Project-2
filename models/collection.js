module.exports = function(sequelize, DataTypes) {
    var Collection = sequelize.define("Collection", {
        picture: DataTypes.STRING,
        title: DataTypes.STRING,
        artist: DataTypes.STRING,
        date: DataTypes.STRING
    })
    return Collection;
}