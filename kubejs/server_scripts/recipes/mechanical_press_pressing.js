ServerEvents.recipes((e) => {

  const recipes = [
    //Reinforced Netherite Plating
    {
      id: "science_is_future/netherite_reinforced_plating",
      ingredients: [
        {
          "tag": "c:ingots/netherite",
        },
      ],
      results: [
        {
          "id": "science_is_future:netherite_reinforced_plating"
        },
      ],
    },
  ];
  recipes.forEach((recipe) => {
    e.custom({
      type: "create:pressing",
      ingredients: recipe.ingredients,
      results: recipe.results,
    }).id(`science_is_future:create/pressing/${recipe.id}`);
  });
})