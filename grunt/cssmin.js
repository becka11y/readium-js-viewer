//  Copyright (c) 2014 Readium Foundation and/or its licensees. All rights reserved.
//  
//  Redistribution and use in source and binary forms, with or without modification, 
//  are permitted provided that the following conditions are met:
//  1. Redistributions of source code must retain the above copyright notice, this 
//  list of conditions and the following disclaimer.
//  2. Redistributions in binary form must reproduce the above copyright notice, 
//  this list of conditions and the following disclaimer in the documentation and/or 
//  other materials provided with the distribution.
//  3. Neither the name of the organization nor the names of its contributors may be 
//  used to endorse or promote products derived from this software without specific 
//  prior written permission.

'use strict';

module.exports = function(grunt) {

    return {
        chromeApp: {
            files: {
                'build/chrome-app/css/readium-all.css': ['css/sourcesanspro.css', 'css/bootstrap.css', 'css/bootstrap-accessibility.css', 'css/readium_js.css', 'css/viewer.css', 'css/viewer_audio.css', 'css/settings.css', 'css/library.css']
            }
        },
        cloudReader: {
            files: {
                'build/cloud-reader/css/readium-all.css': ['css/sourcesanspro.css', 'css/bootstrap.css', 'css/bootstrap-accessibility.css', 'css/readium_js.css', 'css/viewer.css', 'css/viewer_audio.css', 'css/settings.css', 'css/library.css']
            }
        },
        cloudReaderLite: {
            files: {
                'build/cloud-reader-lite/css/readium-all.css': ['css/sourcesanspro.css', 'css/bootstrap.css', 'css/bootstrap-accessibility.css', 'css/readium_js.css', 'css/viewer.css', 'css/viewer_audio.css', 'css/settings.css']
            }
        }
    };
};
