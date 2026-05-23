ServerEvents.recipes((e) => {

  const recipes = [
    //Sack
    {
      result: "supplementaries:sack",
      id: "supplementaries/sack_by_canvas",
      pattern: [
        "CRC",
        "C C",
        "CCC"
      ],
      keys: {
        C: "farmersdelight:canvas",
        R: "#c:ropes",
      },
    },
    {
      result: "supplementaries:sack",
      id: "supplementaries/sack_by_flax",
      pattern: [
        "FRF",
        "F F",
        "FFF"
      ],
      keys: {
        F: "supplementaries:flax",
        R: "#c:ropes",
      },
    },
    //Andesite Funnel
    {
      result: "4x create:andesite_funnel",
      id: "create/andesite_funnel",
      pattern: [
        "A",
        "I"
      ],
      keys: {
        A: "create:andesite_alloy",
        I: "#science_is_future:insulators"
      },
    },
    //Andesite Tunnel
    {
      result: "4x create:andesite_tunnel",
      id: "create/andesite_tunnel",
      pattern: [
        "AA",
        "II"
      ],
      keys: {
        A: "create:andesite_alloy",
        I: "#science_is_future:insulators"
      },
    },
    //Brass Funnel
    {
      result: "2x create:brass_funnel",
      id: "create/brass_funnel",
      pattern: [
        "E",
        "B",
        "I"
      ],
      keys: {
        E: "create:electron_tube",
        B: "#c:ingots/brass",
        I: "#science_is_future:insulators"
      },
    },
    //Brass Tunnel
    {
      result: "2x create:brass_tunnel",
      id: "create/brass_tunnel",
      pattern: [
        "E ",
        "BB",
        "II"
      ],
      keys: {
        E: "create:electron_tube",
        B: "#c:ingots/brass",
        I: "#science_is_future:insulators"
      },
    },
    //Mechanical Belt
    {
      result: "6x create:belt_connector",
      id: "create/mechanical_belt",
      pattern: [
        "III",
        "III",
      ],
      keys: {
        I: "#science_is_future:insulators"
      },
    },
    //Flint Hammer
    {
      result: "science_is_future:flint_hammer",
      id: "science_is_future/flint_hammer",
      pattern: [
        " FS",
        " SF",
        "S  "
      ],
      keys: {
        F: "minecraft:flint",
        S: "minecraft:stick"
      },
    },
    //Backpack
    {
      result: "reliable_backpacks:backpack",
      id: "reliable_backpacks/backpack",
      pattern: [
        "SSS",
        "RCR",
        "SSS"
      ],
      keys: {
        S: "science_is_future:tanned_leather",
        R: "#c:ropes",
        C: "#c:chests/wooden",
      },
    },
    //Copper Diving Helmet
    {
      result: "create:copper_diving_helmet",
      id: "create/copper_diving_helmet",
      pattern: [
        "CCC",
        "IGI",
        " I "
      ],
      keys: {
        C: "#c:ingots/copper",
        G: "#c:glass_blocks",
        I: "#science_is_future:insulators"
      },
    },
    //Copper Diving Helmet
    {
      result: "science_is_future:rubber_boots",
      id: "science_is_future/rubber_boots",
      pattern: [
        "R R",
        "R R"
      ],
      keys: {
        R: "science_is_future:rubber"
      },
    },
    //Insulated LV Wire Coil
    {
      result: "immersiveengineering:wirecoil_copper_ins",
      id: "immersiveengineering/insulated_lv_wire_coil",
      pattern: [
        "IWI",
        "WIW",
        "IWI",
      ],
      keys: {
        W: "immersiveengineering:wirecoil_copper",
        I: "#science_is_future:insulators"
      },
    },
    //Insulated MV Wire Coil
    {
      result: "immersiveengineering:wirecoil_electrum_ins",
      id: "immersiveengineering/insulated_mv_wire_coil",
      pattern: [
        "IWI",
        "WIW",
        "IWI",
      ],
      keys: {
        W: "immersiveengineering:wirecoil_electrum",
        I: "#science_is_future:insulators"
      },
    },
    //Engineer Suit
    {
      result: "science_is_future:engineer_suit",
      id: "science_is_future/engineer_suit",
      pattern: [
        "I I",
        "TIT",
        "TTT",
      ],
      keys: {
        I: "#science_is_future:insulators",
        T: "science_is_future:tanned_leather",
      },
    },
    //Engineer Suit
    {
      result: "science_is_future:engineer_leggings",
      id: "science_is_future/engineer_leggings",
      pattern: [
        "III",
        "T T",
        "T T",
      ],
      keys: {
        I: "#science_is_future:insulators",
        T: "science_is_future:tanned_leather",
      },
    },
    //Prismarine Flashlight
    {
      result: "handheldmoon:moonlight_lamp",
      id: "handheldmoon/prismarine_flashlight",
      pattern: [
        "LPL",
        " G ",
        " S ",
      ],
      keys: {
        L: "minecraft:lapis_lazuli",
        P: "minecraft:sea_lantern",
        G: "#c:plates/gold",
        S: "minecraft:prismarine_shard",
      },
    },
  ];
  recipes.forEach((recipe) => {
    e.shaped(recipe.result, recipe.pattern, recipe.keys).id(`science_is_future:minecraft/crafting_table/${recipe.id}`);
  });
});
