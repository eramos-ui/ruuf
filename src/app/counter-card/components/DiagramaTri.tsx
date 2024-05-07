'use client';
import { Stage, Layer, Rect } from 'react-konva';
interface Props {
    resultado: any;
    baseTecho: number;
    altoTecho: number;
    anchoPanel: number;
    altoPanel: number;    
}
export const DiagramTriPage = ( {baseTecho, altoTecho, anchoPanel, altoPanel, resultado}:Props) => {
    console.log('resultado',baseTecho, altoTecho,resultado,anchoPanel,altoPanel)
    console.log('window.innerWidth',window.innerWidth,window.innerHeight)
    const innerWidth=3000;
    const innerHeight=1500;
  return (
    <>
    <div className="mb-4 flex flex-col gap-6">
    <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-900 antialiased">
        El número de paneles es: {resultado.numeroDePaneles} en posición {resultado.opcionMaxima}
    </p>
    </div>
    </>
  );
}