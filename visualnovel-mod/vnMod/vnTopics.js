var vnTopics = {};

(function () {
  //Add new topics
  vnTopics.addTopics = function () {
    GDT.addTopics([
      {
        id: "vnMod/Drama",
        name: "Drama".localize("game topic"),
        genreWeightings: [0.8, 0.8, 0.8, 0.6, 0.6, 0.9],
        audienceWeightings: [0.6, 0.9, 1]
      },
      {
        id: "vnMod/Dating Sim",
        name: "Dating Sim".localize("game topic"),
        genreWeightings: [0.6, 0.7, 0.8, 1.0, 0.6, 0.8],
        audienceWeightings: [0.6, 0.8, 0.9],
        missionOverrides: [
            [0.7, 0.8, 1, 1, 0.8, 0.7, 0.9, 1, 0.8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0.8, 0.9, 1, 1, 0.8, 0.8, 0.9, 1, 0.8],
            [0.8, 0.9, 1, 1, 0.9, 0.8, 1, 0.9, 0.8],
            [0.6, 0.9, 1, 1, 0.8, 0.6, 0.9, 1, 0.8]]
      },
      {
        id: "vnMod/Erogame",
        name: "Erogame".localize("game topic"),
        genreWeightings: [0.6, 0.8, 0.8, 0.8, 0.6, 0.6],
        audienceWeightings: [0.6, 0.6, 1]
      },
      {
        id: "vnMod/Friendship",
        name: "Friendship".localize("game topic"),
        genreWeightings: [0.7, 0.8, 0.9, 0.6, 0.6, 0.9],
        audienceWeightings: [0.8, 0.9, 1]
      },
      {
        id: "vnMod/Gore",
        name: "Gore".localize("game topic"),
        genreWeightings: [1.0, 0.8, 0.8, 0.6, 0.6, 0.7],
        audienceWeightings: [0.6, 0.6, 1]
      },
      {
        id: "vnMod/Kinetic Novel",
        name: "Kinetic Novel".localize("game topic"),
        genreWeightings: [0.6, 0.8, 0.6, 0.6, 0.6, 0.9],
        audienceWeightings: [0.6, 0.8, 0.9],
        missionOverrides: [
            [0.6, 0.6, 1, 1, 0.8, 0.6, 0.9, 1, 0.8],
            [0.6, 0.6, 1, 1, 0.8, 0.6, 0.9, 1, 0.8],
            [0.6, 0.6, 1, 1, 0.8, 0.6, 0.9, 1, 0.8],
            [0.6, 0.6, 1, 1, 0.8, 0.6, 0.9, 1, 0.8],
            [0.6, 0.6, 1, 1, 0.8, 0.6, 0.9, 1, 0.8],
            [0.6, 0.6, 1, 1, 0.8, 0.6, 0.9, 1, 0.8]]
      },
      {
        id: "vnMod/Love",
        name: "Love".localize("game topic"),
        genreWeightings: [0.7, 0.8, 0.8, 0.8, 0.6, 0.9],
        audienceWeightings: [0.6, 0.9, 1]
      },
      {
        id: "vnMod/Magic",
        name: "Magic".localize("game topic"),
        genreWeightings: [1, 1, 1, 0.7, 0.7, 0.9],
        audienceWeightings: [0.8, 0.9, 0.9]
      },
      {
        id: "vnMod/Romantic Comedy",
        name: "Romantic Comedy".localize("game topic"),
        genreWeightings: [0.7, 0.8, 0.7, 0.7, 0.6, 0.9],
        audienceWeightings: [0.6, 0.9, 1]
      },
      {
        id: "vnMod/Survival",
        name: "Survival".localize("game topic"),
        genreWeightings: [0.9, 1, 0.9, 0.7, 0.8, 0.8],
        audienceWeightings: [0.8, 1, 1]
      },
      {
        id: "vnMod/Science",
        name: "Science".localize("game topic"),
        genreWeightings: [0.7, 0.8, 0.8, 0.8, 0.8, 0.8],
        audienceWeightings: [0.7, 0.8, 1]
      }
    ]);
  };
})();
