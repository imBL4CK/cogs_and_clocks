ServerEvents.recipes((e) => {
  const recipes = [
    //Steam Engine
    {
      result: {
        "id": "minecraft:cake"
      },
      id: "minecraft/cake",
      cookingtime: 200,
      ingredients: [
        {
            "tag": "c:drinks/milk"
        },
        {
            "tag": "c:drinks/milk"
        },
        {
            "tag": "c:drinks/milk"
        },
        {
            "item": "minecraft:sugar"
        },
        {
            "item": "minecraft:sugar"
        },
        {
            "tag": "c:eggs"
        },
        {
            "tag": "c:foods/dough"
        },
        {
            "tag": "c:foods/dough"
        },
        {
            "tag": "c:foods/dough"
        }
      ],
    },
  ];
  recipes.forEach((recipe) => {
    e.custom({
      type: "cookscollection:baking",
      cookingtime: recipe.cookingtime,
      ingredients: recipe.ingredients,
      result: recipe.result,
    }).id(`science_is_future:cookscollection/baking/${recipe.id}`);
  });
});
