import yargs from 'yargs';
import {localization} from './weather_app'

yargs.command({
    command: 'localization',
    describe: ' ',
    builder: {
      name: {
        describe: 'place',
        demandOption: true,
        type: 'string',
      },
      index: {
        describe: 'index',
        demandOption: false, 
        type: 'string',
      },
    },  

    handler: function(argv){
      localization(argv);
    }
  });

  yargs.parse();

