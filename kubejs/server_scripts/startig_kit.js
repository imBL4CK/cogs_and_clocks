PlayerEvents.loggedIn((e) => {

  if (!e.player.stages.has("starting_kit")) {
    e.player.stages.add("starting_kit");
    e.player.give('modopedia:book[modopedia:book="science_is_future:survival_archives"]')
  }
});
