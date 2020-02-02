#!/usr/bin/env node

import { intro, game } from '../games/brain-games';
import progressionTurn from '../games/brain-progression';

const TITLE = 'What number is missing in the progression?\n';

intro(TITLE);
game(progressionTurn);
