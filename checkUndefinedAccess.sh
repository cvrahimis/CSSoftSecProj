#!/bin/bash
cd jalangi2
node src/js/commands/jalangi.js --inlineIID --inlineSource --analysis src/js/sample_analyses/ChainedAnalyses.js --analysis src/js/sample_analyses/dlint/Utils.js --analysis src/js/sample_analyses/dlint/UndefinedOffset.js ../test.js