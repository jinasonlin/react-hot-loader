import universal from 'react-universal-component';

export const Universal1 = universal(() => import('../Counter'));

export const Universal2 = universal(() => import('../Counter2'));
