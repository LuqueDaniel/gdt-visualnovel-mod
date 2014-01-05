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
            //Mod API files
            'mods/gdt-modAPI/helpers/checks.js',
            'mods/gdt-modAPI/api/persistence.js',
            'mods/gdt-modAPI/api/events.js',
            'mods/gdt-modAPI/api/platforms.js',
            'mods/gdt-modAPI/api/topics.js',
            'mods/gdt-modAPI/api/research.js',
            'mods/gdt-modAPI/examples/examples.js',
            
            //Visual Novel Mod files
            'mods/visualnovel-mod/vnMod/vnTopics.js',
            'mods/visualnovel-mod/vnMod/vnResearchs.js'
        ], ready, error);
})();