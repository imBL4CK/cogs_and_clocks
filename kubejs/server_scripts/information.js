RecipeViewerEvents.addInformation("item", (e) => {
  const information = [
    {
      item: "science_is_future:crude_oil_bucket",
      info: "Crude oil can be found in deserts and badlands, both on the surface and deep underground. It can be refined, generating byproducts that serve as fuel for diesel generator.",
    },
    {
      item: "science_is_future:light_fuel_bucket",
      info: "A byproduct of crude oil that can be blended with heavy oil to produce refined fuel. Light oil can be used in diesel generators, with a generation rate of 200 Flux.",
    },
    {
      item: "science_is_future:heavy_fuel_bucket",
      info: "A byproduct of crude oil that can be blended with light oil to produce refined fuel. Heavy oil can be used in diesel generators, with a generation rate of 200 Flux.",
    },
    {
      item: "science_is_future:refined_fuel_bucket",
      info: "The final product of crude oil processing. It is the best fuel for diesel generators, with a generation rate of 500 Flux.",
    },
    {
      item: ["cookscollection:salted_dripstone_block", "cookscollection:salt"],
      info: "Salt can be found in caves.",
    },
    {
      item: ["minecraft:crossbow", "minecraft:spyglass"],
      info: "Right-click on a crossbow while holding a spyglass with the mouse cursor to attach the spyglass to the crossbow.",
    },
  ];
  information.forEach((jei) => {
    e.add(jei.item, [jei.info]);
  });
});
