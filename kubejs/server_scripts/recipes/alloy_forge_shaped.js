ServerEvents.recipes((e) => {
  const recipes = [
    //Steam Engine
    {
      result: {
        "id": "create:steam_engine"
      },
      id: "create/steam_engine",
      pattern: [
        " S ",
        "SAS",
        " C "
      ],
      key: {
        S: {
          tag: "c:plates/bronze"
        },
        A: {
          item: "create:andesite_alloy"
        },
        C: {
          tag: "c:storage_blocks/copper"
        }
      },
    },
    //Steam Whistle
    {
      result: {
        id: "create:steam_whistle"
      },
      id: "create/steam_whistle",
      pattern: [
        " S ",
        " C ",
        "   "
      ],
      key: {
        S: {
          tag: "c:ingots/bronze"
        },
        C: {
          tag: "c:ingots/copper"
        }
      },
    },
    //Bronze Hammer
    {
      result: {
        id: "science_is_future:bronze_hammer"
      },
      id: "science_is_future/bronze_hammer",
      pattern: [
        " IS",
        " SI",
        "S  "
      ],
      key: {
        S: {
          item: "minecraft:stick"
        },
        I: {
          tag: "c:ingots/bronze"
        }
      },
    },
    //Steel Hammer
    {
      result: {
        id: "science_is_future:steel_hammer"
      },
      id: "science_is_future/steel_hammer",
      pattern: [
        " IS",
        " SI",
        "S  "
      ],
      key: {
        S: {
          item: "minecraft:stick"
        },
        I: {
          tag: "c:ingots/steel"
        }
      },
    },
    //Iron Helmet
    {
      result: {
        id: "minecraft:iron_helmet"
      },
      id: "minecraft/iron_helmet",
      pattern: [
        "PIP",
        "I I",
        "   "
      ],
      key: {
        P: {
          item: "science_is_future:iron_reinforced_plating"
        },
        I: {
          tag: "c:ingots/iron"
        }
      },
    },
    //Iron Chestplate
    {
      result: {
        id: "minecraft:iron_chestplate"
      },
      id: "minecraft/iron_chestplate",
      pattern: [
        "I I",
        "PIP",
        "PIP"
      ],
      key: {
        P: {
          item: "science_is_future:iron_reinforced_plating"
        },
        I: {
          tag: "c:ingots/iron"
        }
      },
    },
    //Iron Leggings
    {
      result: {
        id: "minecraft:iron_leggings"
      },
      id: "minecraft/iron_leggings",
      pattern: [
        "PPP",
        "I I",
        "I I"
      ],
      key: {
        P: {
          item: "science_is_future:iron_reinforced_plating"
        },
        I: {
          tag: "c:ingots/iron"
        }
      },
    },
    //Iron Boots
    {
      result: {
        id: "minecraft:iron_boots"
      },
      id: "minecraft/iron_boots",
      pattern: [
        "P P",
        "I I",
        "   "
      ],
      key: {
        P: {
          item: "science_is_future:iron_reinforced_plating"
        },
        I: {
          tag: "c:ingots/iron"
        }
      },
    },
    //Revolver Barrel
    {
      result: {
        id: "immersiveengineering:gunpart_barrel"
      },
      id: "immersiveengineering/revolver_barrel",
      pattern: [
        "   ",
        " R ",
        "P  "
      ],
      key: {
        R: {
          tag: "c:rods/steel"
        },
        P: {
          tag: "c:plates/steel"
        }
      },
    },
    //Spyglass
    {
      result: {
        id: "minecraft:spyglass"
      },
      id: "minecraft/spyglass",
      pattern: [
        " A ",
        " G ",
        " C "
      ],
      key: {
        A: {
          tag: "c:gems/amethyst"
        },
        G: {
          tag: "c:ingots/gold"
        },
        C: {
          tag: "c:ingots/copper"
        }
      },
    },
    
    //diamond Helmet
    {
      result: {
        id: "minecraft:diamond_helmet"
      },
      id: "minecraft/diamond_helmet",
      pattern: [
        "PIP",
        "I I",
        "   "
      ],
      key: {
        P: {
          item: "science_is_future:diamond_reinforced_plating"
        },
        I: {
          tag: "c:gems/diamond"
        }
      },
    },
    //diamond Chestplate
    {
      result: {
        id: "minecraft:diamond_chestplate"
      },
      id: "minecraft/diamond_chestplate",
      pattern: [
        "I I",
        "PIP",
        "PIP"
      ],
      key: {
        P: {
          item: "science_is_future:diamond_reinforced_plating"
        },
        I: {
          tag: "c:gems/diamond"
        }
      },
    },
    //diamond Leggings
    {
      result: {
        id: "minecraft:diamond_leggings"
      },
      id: "minecraft/diamond_leggings",
      pattern: [
        "PPP",
        "I I",
        "I I"
      ],
      key: {
        P: {
          item: "science_is_future:diamond_reinforced_plating"
        },
        I: {
          tag: "c:gems/diamond"
        }
      },
    },
    //diamond Boots
    {
      result: {
        id: "minecraft:diamond_boots"
      },
      id: "minecraft/diamond_boots",
      pattern: [
        "P P",
        "I I",
        "   "
      ],
      key: {
        P: {
          item: "science_is_future:diamond_reinforced_plating"
        },
        I: {
          tag: "c:gems/diamond"
        }
      },
    },
  ];
  recipes.forEach((recipe) => {
    e.custom({
      type: "alloyed:forging_shaped",
      pattern: recipe.pattern,
      key: recipe.key,
      result: recipe.result,
    }).id(`science_is_future:alloyed/forging_shaped/${recipe.id}`);
  });
});
