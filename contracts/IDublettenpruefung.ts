import {IDublette} from './IDublette';

export interface IDublettenpruefung {
  Sammle_Kandidaten(pfad: string): Enumerator<IDublette>;
  Sammle_Kandidaten(pfad: string, Vergleichmodi: Enumerator<IDublette>);  
}