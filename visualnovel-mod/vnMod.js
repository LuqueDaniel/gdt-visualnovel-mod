(function () {
    var ready = function () {
        //Adds topics
        vnTopics.addTopics();

        //Adds researchs
        vnResearch.addResearchs();
    };

    var error = function () {
    };

    GDT.loadJs(
        [
            //Visual Novel Mod files
            'vnMod/vnTopics.js',
            'vnMod/vnResearchs.js'
        ], ready, error);
})();
