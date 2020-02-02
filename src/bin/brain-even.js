#!/usr/bin/env node

import { intro, game } from '../games/brain-games';
import evenTurn from '../games/brain-even';

const TITLE = 'Welcome to Answer "yes" if number even otherwise answer "no".\n';

intro(TITLE);
game(evenTurn);
