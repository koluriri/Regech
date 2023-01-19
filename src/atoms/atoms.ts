import { Post, User } from '@prisma/client';
import { atom } from 'jotai';

export const regexAtom = atom('');
export const resultsAtom = atom<string[]>([]);
export const postAtom = atom<(Post & { author: User }) | null>(null);
