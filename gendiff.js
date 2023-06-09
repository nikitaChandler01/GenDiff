#!/usr/bin/env node

import { program } from 'commander';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0');

program.command('help')
  .option('-V', '--version', 'output the version number')
  .option('-h', '--help', 'output usage information')
  .action((options) => {
    console.log(options.version);
    console.log(options.help);
  });

program.parse();
