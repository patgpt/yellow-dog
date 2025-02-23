import * as migration_20250223_213549_initial from './20250223_213549_initial';

export const migrations = [
  {
    up: migration_20250223_213549_initial.up,
    down: migration_20250223_213549_initial.down,
    name: '20250223_213549_initial'
  },
];
