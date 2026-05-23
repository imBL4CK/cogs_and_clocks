ServerEvents.recipes((e) => {
  let remove_recipes = [
    "supplementaries:sack",
    "supplementaries:sack_3",
    "create:crafting/kinetics/steam_engine",
    "create:crafting/kinetics/steam_whistle",
    "create:crafting/logistics/brass_funnel",
    "create:crafting/logistics/brass_tunnel",
    "create:crafting/materials/electron_tube",
    "create:milling/granite",
    "create:crushing/diorite",
    "create:crushing/diorite_recycling",
    "create:milling/andesite",
    "create:crafting/kinetics/fluid_pipe_vertical",
    "create:crafting/kinetics/fluid_pipe",
    "farmersdelight:crafting/wheat_dough_from_water",
    "reliable_backpacks:backpack_from_rope",
    "create:crafting/appliances/copper_diving_helmet",
    "minecraft:iron_helmet",
    "minecraft:iron_chestplate",
    "minecraft:iron_leggings",
    "minecraft:iron_boots",
    "minecraft:diamond_helmet",
    "minecraft:diamond_chestplate",
    "minecraft:diamond_leggings",
    "minecraft:diamond_boots",
    "create:sequenced_assembly/precision_mechanism",
    "immersiveengineering:blueprint/electron_tube",
    "immersiveengineering:crafting/component_iron",
    "immersiveengineering:crafting/component_steel",
    "immersiveengineering:blueprint/circuit_board",
    "immersiveengineering:alloysmelter/insulating_glass",
    "alloyed:forging/bronze_ingot_from_create",
    "alloyed:mixing/bronze_ingot_x3",
    "immersiveengineering:crafting/gunpart_barrel",
    "alloyed:forging/steel_ingot",
    "alloyed:mixing/steel_ingot",
    "minecraft:netherite_ingot",
    "minecraft:spyglass",
    "quark:tweaks/crafting/utility/bent/bread",
    "minecraft:bread",
    "farmersdelight:bread_from_wheat"
  ];
  let materials = [
    "iron",
    "gold",
    "copper",
    "zinc",
    "silver",
    "lead",
    "aluminum",
    "nickel",
    "uranium"
  ]
  remove_recipes.forEach((recipeID) => {
    e.remove({ id: recipeID });
  });
  materials.forEach((material) => {
    e.remove({ type: "minecraft:smelting", input: `#c:raw_materials/${material}`, output: `#c:ingots/${material}`});
    e.remove({ type: "minecraft:blasting", input: `#c:raw_materials/${material}`, output: `#c:ingots/${material}`});
  });
  
  e.remove({ type: "bountifulfares:milling" });
});
