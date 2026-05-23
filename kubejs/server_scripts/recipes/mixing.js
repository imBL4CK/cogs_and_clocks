ServerEvents.recipes((e) => {

  const recipes = [
    //Tanned Leather
    {
      id: "minecraft/iron_ingot",
      heatRequirement: "heated",
      ingredients: [
        {
          "fluid": "minecraft:water",
          "type": "fluid_stack",
          "amount": 250
        },
        {
          "item": "minecraft:leather"
        },
        {
          "item": "farmersdelight:tree_bark"
        },
        {
          "item": "cookscollection:salt"
        },
      ],
      results: [
        {
          "id": "science_is_future:tanned_leather",
        }
      ],
    },
    //Bronze Ingot
    {
      id: "alloyed/bronze_ingot",
      heatRequirement: "heated",
      ingredients: [
        {
          "tag": "c:ingots/copper",
        },
        {
          "tag": "c:ingots/copper",
        },
        {
          "tag": "c:ingots/copper",
        },
        {
          "tag": "c:ingots/zinc",
        },
        {
          "item": "create:cinder_flour",
        },
        {
          "item": "create:cinder_flour",
        },
        {
          "item": "create:cinder_flour",
        },
        {
          "item": "create:cinder_flour",
        },
      ],
      results: [
        {
          "id": "alloyed:bronze_ingot",
          "count": 4
        }
      ],
    },
    //Crude Oil
    {
      id: "science_is_future/crude_oil",
      heatRequirement: "superheated",
      ingredients: [
        {
          "fluid": "science_is_future:crude_oil",
          "type": "fluid_stack",
          "amount": 1000
        },
      ],
      results: [
        {
          "id": "science_is_future:heavy_fuel",
          "amount": 500
        },
        {
          "id": "science_is_future:light_fuel",
          "amount": 500
        },
      ],
    },
    //Molten Plastic
    {
      id: "science_is_future/molten_plastic",
      heatRequirement: "heated",
      ingredients: [
        {
          "fluid": "science_is_future:crude_oil",
          "type": "fluid_stack",
          "amount": 100
        },
        {
          "fluid": "science_is_future:refined_fuel",
          "type": "fluid_stack",
          "amount": 10
        },
        {
          "item": "minecraft:coal",
          "count": 2
        },
      ],
      results: [
        {
          "id": "science_is_future:plastic_sheet",
          "count": 2
        },
      ],
    },
  ];
  recipes.forEach((recipe) => {
    if (recipe.heatRequirement) {
      e.custom({
        type: "create:mixing",
        ingredients: recipe.ingredients,
        results: recipe.results,
        heat_requirement: recipe.heatRequirement,
      }).id(`science_is_future:create/mixing/${recipe.id}`);
    } else {
      e.custom({
        type: "create:mixing",
        ingredients: recipe.ingredients,
        results: recipe.results,
      }).id(`science_is_future:create/mixing/${recipe.id}`);
    }
  });
})