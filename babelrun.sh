#!/bin/bash

echo starting Babel
babel . --out-dir compiled --watch --presets=es2015,react --ignore=node_modules,compiled --source-maps inline
