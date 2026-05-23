ServerEvents.tags("item", (e) => {
  //Add
  e.add("c:flours/wheat", ["bountifulfares:flour"]);
  e.add("c:foods/cooked_egg", ["bountifulfares:cooked_egg"]);
  e.add("science_is_future:enables_jade", ["create:goggles", "minecraft:spyglass"]);
  e.add("curios:trinket", ["handheldmoon:moonlight_lamp", "the_beyond:magnet", "minecraft:spyglass", "supplementaries:quiver", "travelertoolbelt:belt", "travelertoolbelt:copper_belt", "travelertoolbelt:iron_belt", "travelertoolbelt:gold_belt", "travelertoolbelt:diamond_belt", "travelertoolbelt:netherite_belt"]);
  e.add("curios:key_item", ["reliable_gliders:glider", "minecraft:totem_of_undying"]);
  e.add("science_is_future:electron_tubes", ["create:electron_tube", "immersiveengineering:electron_tube"]);
  e.add("c:plastics", "immersiveengineering:plate_duroplast");
  //Remove
  e.remove("curios:belt", ["minecraft:spyglass", "supplementaries:quiver", "travelertoolbelt:belt", "travelertoolbelt:copper_belt", "travelertoolbelt:iron_belt", "travelertoolbelt:gold_belt", "travelertoolbelt:diamond_belt", "travelertoolbelt:netherite_belt"]);
  e.remove("curios:back", ["reliable_gliders:glider"]);
  e.remove("curios:charm", ["minecraft:totem_of_undying"]);
})