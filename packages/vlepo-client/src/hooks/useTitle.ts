import { useContext } from 'react';
import { TitleContext } from 'src/pages/_app';

export const useTitle = () => useContext(TitleContext);
