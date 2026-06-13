ServerEvents.recipes((e) => {

  const colors = [
    "white",
    "orange",
    "magenta",
    "light_blue",
    "yellow",
    "lime",
    "pink",
    "gray",
    "light_gray",
    "cyan",
    "purple",
    "blue",
    "brown",
    "green",
    "red",
    "black"
  ];
  colors.forEach((recipe) => {
    e.shaped(
      `minecraft:${recipe}_bed`, 
      [
        "WWW",
        "TTT",
        "PPP"
      ],{
        T: "science_is_future:tanned_leather",
        W: `minecraft:${recipe}_wool`,
        P: "#minecraft:planks",
      },
    ).id(`science_is_future:minecraft/crafting_table/${recipe}_bed`);
    e.remove({ id: `minecraft:${recipe}_bed` })
  });
});
