var vnResearch = {};

(function () {
    
    vnResearch.addResearchs = function () {
        //Add Auto Advance
        GDT.addResearchItem(
            {
                id: "vnMod/Auto Advance",
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
                id: "vnMod/Auto Saving",
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
                id: "vnMod/Image Gallery",
                name: "Image Gallery".localize(),
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
                id: "vnMod/Fast Skip",
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
                id: "vnMod/Multi Character",
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
                id: "vnMod/Music Gallery",
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
                id: "vnMod/NVL Mode",
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
                id: "vnMod/Quick Saving",
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
                id: "vnMod/Scenes Gallery",
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
                id: "vnMod/Screenshots Support",
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
                id: "vnMod/Skip",
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
                id: "vnMod/Translations",
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
                id: "vnMod/Video Gallery",
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
