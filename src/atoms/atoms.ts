import { Post, User as PrismaUser } from '@prisma/client';
import { atom } from 'jotai';
import { User } from 'firebase/auth';

export const regexAtom = atom('');
export const resultsAtom = atom<string[]>([]);
export const postAtom = atom<(Post & { author: PrismaUser }) | null>(null);
export const userAtom = atom<(User & { username: string | null }) | null>(null);
