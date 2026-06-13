const beds = [
    "minecraft:white_bed",
    "minecraft:orange_bed",
    "minecraft:magenta_bed",
    "minecraft:light_blue_bed",
    "minecraft:yellow_bed",
    "minecraft:lime_bed",
    "minecraft:pink_bed",
    "minecraft:gray_bed",
    "minecraft:light_gray_bed",
    "minecraft:cyan_bed",
    "minecraft:purple_bed",
    "minecraft:blue_bed",
    "minecraft:brown_bed",
    "minecraft:green_bed",
    "minecraft:red_bed",
    "minecraft:black_bed"
]

BlockEvents.rightClicked(beds, (e) => {
  if (e.player.hasEffect("science_is_future:gloom")) {
    e.player.swing()
    e.server.runCommandSilent(`execute as @a at @s run title @s actionbar "Higher forces keep you awake...."`)
    e.cancal()
  } 
  else return;
})