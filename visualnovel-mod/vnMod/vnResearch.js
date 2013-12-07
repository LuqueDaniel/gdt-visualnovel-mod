var vnResearch = {};

(function () {
    
    vnResearch.addResearch = function () {
        //Add Auto Save
        GDT.addResearchItem(
            {
                id: "Auto Saving",
                name: "Auto Saving".localize(),
                v: 2,
                canResearch: function (company) {
                    return LevelCalculator.getMissionLevel('Engine') > 3;
                },
                category: "Engine",
                categoryDisplayName: "Engine".localize()
            });
        
        //Add Quick Saving
        GDT.addResearchItem(
            {
                id: "Quick Saving",
                name: "Quick Saving".localize(),
                v: 4,
                canResearch: function (company) {
                    return LevelCalculator.getMissionLevel('Engine') > 4;
                },
                category: "Engine",
                categoryDisplayName: "Engine".localize()
            });
    };
    
})();