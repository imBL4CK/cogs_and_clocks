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
          "amount": 90
        },
        {
          "fluid": "science_is_future:refined_fuel",
          "type": "fluid_stack",
          "amount": 10
        },
        {
          "item": "minecraft:coal"
        },
        {
          "item": "minecraft:coal"
        },
      ],
      results: [
        {
          "id": "science_is_future:molten_plastic",
          "amount": 100
        },
      ],
    },
    //Resin Oil
    {
      id: "nomansland/resin_oil",
      heatRequirement: "heated",
      ingredients: [
        {
          "item": "minecraft:honeycomb"
        },
        {
          "item": "nomansland:resin"
        },
        {
          "item": "nomansland:resin"
        },
        {
          "item": "nomansland:resin"
        },
        {
          "item": "nomansland:resin"
        },
        {
          "item": "nomansland:resin"
        },
        {
          "item": "nomansland:resin"
        },
        {
          "item": "nomansland:resin"
        },
        {
          "item": "nomansland:resin"
        },
        {
          "item": "nomansland:resin"
        }
      ],
      results: [
        {
          "id": "nomansland:resin_oil",
          "amount": 1000
        },
      ],
    },
    //Molten Rubber
    {
      id: "science_is_future/molten_rubber_by_honey",
      heatRequirement: "heated",
      ingredients: [
        {
          "fluid": "create:honey",
          "type": "fluid_stack",
          "amount": 100
        },
      ],
      results: [
        {
          "id": "science_is_future:molten_rubber",
          "amount": 50
        },
      ],
    },
    {
      id: "science_is_future/molten_rubber_by_resin_oil",
      heatRequirement: "heated",
      ingredients: [
        {
          "fluid": "nomansland:resin_oil",
          "type": "fluid_stack",
          "amount": 100
        },
      ],
      results: [
        {
          "id": "science_is_future:molten_rubber",
          "amount": 100
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