ServerEvents.recipes((e) => {
  const recipes = [
    //Steam Engine
    {
      result: {
        "id": "create:electron_tube",
        "count": 2
      },
      id: "create/electron_tube",
      ingredients: [
        {"item": "create:polished_rose_quartz"},
        {"tag": "c:plates/steel"},
        {"tag": "c:nuggets/copper"},
      ],
    },
    //Steam Pipe
    {
      result: {
        "id": "create:fluid_pipe",
        "count": 4
      },
      id: "create/fluid_pipe_by_kelps",
      ingredients: [
        {"tag": "c:plates/copper"},
        {"tag": "c:ingots/copper"},
        {"tag": "c:plates/copper"},
      ],
    },
    //Reinforced Iron Plate
    {
      result: {
        "id": "science_is_future:iron_reinforced_plating"
      },
      id: "science_is_future/iron_reinforced_plating",
      ingredients: [
        {"tag": "c:plates/iron"},
        {"tag": "c:plates/iron"},
      ],
    },
    //Reinforced Iron Plate
    {
      result: {
        "id": "science_is_future:wrought_iron_ingot",
        "count": 2
      },
      id: "science_is_future/wrought_iron_ingot_by_cinder_flour",
      ingredients: [
        {"tag": "c:ingots/iron"},
        {"tag": "c:ingots/iron"},
        {"item": "create:cinder_flour"},
      ],
    },
    {
      result: {
        "id": "science_is_future:wrought_iron_ingot",
        "count": 2
      },
      id: "science_is_future/wrought_iron_ingot_by_slags",
      ingredients: [
        {"tag": "c:ingots/iron"},
        {"tag": "c:ingots/iron"},
        {"item": "immersiveengineering:slag"},
      ],
    },
    //Reinforced Diamond Plate
    {
      result: {
        "id": "science_is_future:diamond_reinforced_plating"
      },
      id: "science_is_future/diamond_reinforced_plating",
      ingredients: [
        {"tag": "c:gems/diamond"},
        {"tag": "c:gems/diamond"},
      ],
    },
  ];
  recipes.forEach((recipe) => {
    e.custom({
      type: "alloyed:forging",
      ingredients: recipe.ingredients,
      result: recipe.result,
    }).id(`science_is_future:alloyed/forging_shapeless/${recipe.id}`);
  });
});
