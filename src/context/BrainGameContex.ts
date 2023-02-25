import { createContext } from 'react';
import { BrainGameContexInterface } from './BrainGameContex.interface';


export const BrainGameContex = createContext<BrainGameContexInterface>({} as BrainGameContexInterface);