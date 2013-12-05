var vnTopics = {};

(function () {
    
    //Add new topics
    vnTopics.addTopics = function () {
        GDT.addTopics([
            {
                id: "Drama",
                name: "Drama".localize("game topic"),
                genreWeightings: [0.8, 0.8, 0.8, 0.6, 0.6, 0.9],	
                audienceWeightings: [0.6, 0.9, 1]
            },
            
            {
                id: "Dating Sim",
                name: "Dating Sim".localize("game topic"),
                genreWeightings: [0.6, 0.7, 0.8, 1.0, 0.6, 0.9],	
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
                id: "Kinetic Novel",
                name: "Kinetic Novel".localize("game topic"),
                genreWeightings: [0.6, 0.9, 0.6, 0.6, 0.6, 0.8],	
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
                id: "Love",
                name: "Love".localize("game topic"),
                genreWeightings: [0.7, 0.8, 0.8, 0.8, 0.6, 0.9],	
                audienceWeightings: [0.6, 0.9, 1]
            }
        ]);
    };
    
})();