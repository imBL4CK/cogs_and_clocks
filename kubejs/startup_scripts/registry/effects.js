StartupEvents.registry("mob_effect", (e) => {
  
  global.gloomEffectTick = (entity, level) => {
    if (entity.tickCount % 60 == 0) {
      entity.damage(level + (level + 1))
    }
  };

  global.delightfulEffectTick = (entity, level) => {
    if (!entity.isPlayer()) return;
    const FoodLevel = entity.getFoodLevel();

    if (FoodLevel == 20 && entity.tickCount % 100 == 0) {
      entity.addFood(level, (level / 2));
    } 
    else if (FoodLevel < 20 && entity.tickCount % 100 == 0) {
      entity.addFood((level + 1), 0);
    }
  }

  //Gloom
  e.create("science_is_future:gloom")
    .color("#000000")
    .harmful()
    .modifyAttribute("minecraft:generic.attack_damage", "identifier", -0.25, "add_multiplied_base")
    .modifyAttribute("minecraft:generic.movement_speed", "identifier", -0.25, "add_multiplied_base")
    .effectTick((entity, level) => global.gloomEffectTick(entity, level));

  //Delightful
  e.create("science_is_future:delightful")
    .color("#fb2419")
    .beneficial()
    .effectTick((entity, level) => global.delightfulEffectTick(entity, level));
});