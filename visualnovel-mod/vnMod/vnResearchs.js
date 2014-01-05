var vnResearch = {};

(function () {
    
    vnResearch.addResearchs = function () {
        //Add Auto Advance
        GDT.addResearchItem(
            {
                id: "Auto Advance",
                name: "Auto Advance".localize(),
                v: 2,
                canResearch: function (company) {
                    return LevelCalculator.getMissionLevel('Engine') >= 2;
                },
                category: "Engine",
                categoryDisplayName: "Engine".localize()
            });
        
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
        
        //Add Fast Skip
        GDT.addResearchItem(
            {
                id: "Fast Skip",
                name: "Fast Skip".localize(),
                v: 2,
                canResearch: function (company) {
                    return LevelCalculator.getMissionLevel('Engine') >= 3;
                },
                category: "Engine",
                categoryDisplayName: "Engine".localize()
            });
        
        //Add Multi Character
        GDT.addResearchItem(
            {
                id: "Multi Character",
                name: "Multi Character".localize(),
                v: 2,
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
        
        //Add NVL Mode
        GDT.addResearchItem(
            {
                id: "NVL Mode",
                name: "NVL Mode".localize(),
                v: 2,
                canResearch: function (company) {
                    return LevelCalculator.getMissionLevel('Engine') >= 2;
                },
                category: "Engine",
                categoryDisplayName: "Engine".localize()
            });
        
        //Add Quick Saving
        GDT.addResearchItem(
            {
                id: "Quick Saving",
                name: "Quick Saving".localize(),
                v: 2,
                canResearch: function (company) {
                    return LevelCalculator.getMissionLevel('Engine') >= 3;
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
                categoryDisplayName: "Engine".localize()  
            });

        //Add Screenshots Support
        GDT.addResearchItem(
            {
                id: "Screenshots Support",
                name: "Screenshots Support".localize(),
                v: 2,
                canResearch: function (company) {
                    return LevelCalculator.getMissionLevel('Engine') >= 2;
                },
                category: "Engine",
                categoryDisplayName: "Engine".localize()
            });
        
        //Add Skip
        GDT.addResearchItem(
            {
                id: "Skip",
                name: "Skip".localize(),
                v: 2,
                canResearch: function (company) {
                    return LevelCalculator.getMissionLevel('Engine') >= 2;
                },
                category: "Engine",
                categoryDisplayName: "Engine".localize()
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
        
        //Add Video Gallery
        GDT.addResearchItem(
            {
                id: "Video Gallery",
                name: "Video Gallery".localize(),
                v: 4,
                canResearch: function (company) {
                    return LevelCalculator.getMissionLevel('Engine') >= 3;
                },
                category: "Engine",
                categoryDisplayName: "Engine".localize()
            });
    };
    
})();
