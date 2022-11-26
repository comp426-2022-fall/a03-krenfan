#!/usr/bin/env node

import minimist from 'minimist';
import { roll } from '../lib/roll.js';

const args = minimist(process.argv.slice(2));

console.log(JSON.stringify(roll(args.sides || 6, args.dice || 2, args.rolls || 1)));
