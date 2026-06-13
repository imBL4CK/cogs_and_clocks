ServerEvents.recipes((e) => {

  const recipes = [
    //Template
    {
      result: "immersiveengineering:ingot_hop_graphite",
      id: "immersiveengineering/ingot_hop_graphite",
      ingredients: "immersiveengineering:dust_hop_graphite",
      experience: 0.3,
    },
  ];
  recipes.forEach((recipe) => {
    e.smelting(recipe.result, recipe.ingredients).xp(recipe.experience).id(`science_is_future:smelting/${recipe.id}`);
  });
});
