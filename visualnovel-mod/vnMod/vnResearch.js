var vnResearch = {};

(function () {
    
    vnResearch.addResearch = function () {
        //Add Auto Save
        GDT.addResearchItem(
            {
                id: "Auto Save",
                name: "Auto Save".localize(),
                v: 2,
                canResearch: function (company) {
                    return LevelCalculator.getMissionLevel('Engine') > 2;
                },
                category: "Engine",
                categoryDisplayName: "Engine".localize()
            });
    };
    
})();