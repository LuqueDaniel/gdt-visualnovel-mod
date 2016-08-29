var vnResearch = {};

(function () {

    vnResearch.addResearchs = function () {
        //Add 3D Characters
        GDT.addResearchItem(
            {
                id:"vnMod/3D Characters",
                name: "3D Characters".localize(),
                v: 8,
                canResearch: function (company) {
                    return LevelCalculator.getMissionLevel('Engine') >= 5 && company.currentLevel >= 2
                },
                category: "Engine",
                categoryDisplayName: "Engine".localize()
            });

        //Add 3D Backgrounds
        GDT.addResearchItem(
            {
                id:"vnMod/3D Backgrounds",
                name: "3D Backgrounds".localize(),
                v: 8,
                canResearch: function (company) {
                    return LevelCalculator.getMissionLevel('Engine') >= 5 && company.currentLevel >= 2
                },
                category: "Engine",
                categoryDisplayName: "Engine".localize()
            });

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
                    return LevelCalculator.getMissionLevel('Engine') >= 2;
                },
                category: "Engine",
                categoryDisplayName: "Engine".localize()
            });

        //Add Music Gallery
        GDT.addResearchItem(
            {
                id: "vnMod/Music Gallery",
                name: "Music Gallery".localize(),
                v: 2,
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
                v: 2,
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
                v: 4,
                canResearch: function (company) {
                    return LevelCalculator.getMissionLevel('Engine') >= 3;
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
                category: "Language/Localization",
                categoryDisplayName: "Language/Localization".localize()
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

        GDT.addResearchItem(
            {
                id: "vnMod/Animation Scenes",
                name: "Animation Scenes".localize(),
                v: 10,
                canResearch: function (company) {
                    return LevelCalculator.getMissionLevel('Graphic') >= 5 && company.currentLevel >= 3
                },
                category: "Graphic",
                categoryDisplayName: "Graphic".localize()
            });

        //Add VR Theater
        GDT.addResearchItem(
            {
                id: "vnMod/VR Theater",
                name: "VR Theater".localize(),
                v: 8,
                canResearch: function (company) {
                    return LevelCalculator.getMissionLevel('Engine') >= 6 && company.currentLevel >= 3
                },
                category: "Engine",
                categoryDisplayName: "Engine".localize()
            });

        //Add VR Interactive
        GDT.addResearchItem(
            {
                id: "vnMod/VR Interactive",
                name: "VR Interactive".localize(),
                v: 12,
                canResearch: function (company) {
                    return LevelCalculator.getMissionLevel('Engine') >= 7 && company.currentLevel >= 3
                },
                category: "Engine",
                categoryDisplayName: "Engine".localize()
            });
    };

})();
