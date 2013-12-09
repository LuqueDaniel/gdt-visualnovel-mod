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
                    return LevelCalculator.getMissionLevel('Engine') >= 3;
                },
                category: "Engine",
                categoryDisplayName: "Engine".localize()
            });
        
        //Add CG Gallery
        GDT.addResearchItem(
            {
                id: "CG Gallery",
                name: "CG Gallery".localize(),
                v: 4,
                canResearch: function (company) {
                    return LevelCalculator.getMissionLevel('Engine') >= 3;
                },
                category: "Engine",
                categoryDisplayName: "Engine".localize()
            });
        
        //Add Music Gallery
        GDT.addResearchItem(
            {
                id: "Music Gallery",
                name: "Music Gallery".localize(),
                v: 4,
                canResearch: function (company) {
                    return LevelCalculator.getMissionLevel('Engine') >= 3;
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
                    return LevelCalculator.getMissionLevel('Engine') >= 4;
                },
                category: "Engine",
                categoryDisplayName: "Engine".localize()
            });
        
        //Add Scenes Gallery
        GDT.addResearchItem(
            {
                id: "Scenes Gallery",
                name: "Scenes Gallery".localize(),
                v: 4,
                canResearch: function (company) {
                    return LevelCalculator.getMissionLevel('Engine') >= 3;
                },
                category: "Engine",
                categoryDisplayName: "Engine".localize(),
                
            });
        
        //Add Translations
        GDT.addResearchItem(
            {
                id: "Translations",
                name: "Translations".localize(),
                v: 6,
                canResearch: function (company) {
                    return company.currentLevel >= 2;
                },
                category: "Language",
                categoryDisplayName: "Language".localize()
            });
    };
    
})();