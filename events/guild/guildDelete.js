module.exports = async guild => {
    db.delete(`${guild.id}`)
    console.log(`[LEFT GUILD]: ${guild.name} | ${guild.id}`);
}