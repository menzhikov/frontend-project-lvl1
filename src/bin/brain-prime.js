#!/usr/bin/env node

import { intro, game } from '../games/brain-games';
import primeTurn from '../games/brain-prime';

const TITLE = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

intro(TITLE);
game(primeTurn);
