#!/usr/bin/env node

import { intro, game } from '../games/brain-games';
import calcTurn from '../games/brain-calc';

const TITLE = 'What is the result of the expression?\n';

intro(TITLE);
game(calcTurn);
