#!/usr/bin/env node

import { intro, game } from '../games/brain-games';
import gcdTurn from '../games/brain-gcd';

const TITLE = 'Find the greatest common divisor of given numbers.\n';

intro(TITLE);
game(gcdTurn);
