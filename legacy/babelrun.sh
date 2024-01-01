#!/bin/bash

echo starting Babel
babel . --out-dir Compiled --watch --presets=es2015,react --ignore=node_modules,Compiled --source-maps inline
