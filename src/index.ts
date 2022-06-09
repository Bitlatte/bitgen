import { program } from 'commander';
import { name, version, description } from '../package.json';

program
  .name(name)
  .version(version)
  .description(description)

program
  .option('-r, --react', 'Create A New React App')
  .option('-s, --svelte', 'Create A New Svelte App')
  .option('-v, --vue', 'Create A New Vue App')
  .option('-a, --api', 'Create A New REST API')
  .argument('<name>', 'New Project Name')

program.parse();