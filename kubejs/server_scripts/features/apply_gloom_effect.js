PlayerEvents.tick((e) => {
  if (e.server.tickCount % 200 != 0) return;
  if (!e.entity.isPlayer()) return;
  if (e.player.isCreative() || e.player.isSpectator()) return;
  if (e.player.block.canSeeSky) return;
  if (e.player.block.light > 5) return;

  if (!e.player.hasEffect("science_is_future:gloom")) {
    e.server.runCommandSilent(`execute as @a at @s run title @s actionbar "You begin to feel a strange presence..."`)
    e.server.runCommandSilent(`execute as @a at @s run playsound science_is_future:event.mob_effect.gloom player @s ~ ~ ~ 2 1 1`)
  }
  e.player.potionEffects.add("science_is_future:gloom", 300, 0, true, true)
  e.server.runCommandSilent(`execute as @a at @s run playsound science_is_future:event.mob_effect.gloom player @s ~ ~ ~ 2 1 1`)
})