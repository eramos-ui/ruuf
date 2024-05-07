'use client';
import { Stage, Layer, Rect } from 'react-konva';
interface Props {
    resultado: any;
    anchoTecho: number;//lado mayor
    altoTecho: number;
    anchoPanel: number;//lado mayor
    altoPanel: number;
    
}
export const DiagramRectPage = ( {anchoTecho, altoTecho, anchoPanel, altoPanel, resultado}:Props) => {
    //console.log('window.innerWidth',window.innerWidth,window.innerHeight)
    // const innerWidth=3000;
    // const innerHeight=1500;
    const parentX = 5;
    const parentY = 5;
    const orientation=resultado.opcionMaxima.toLowerCase();
    const nroPanelesSolar= resultado.numeroDePaneles;
    const childWidth = altoPanel;//1
    const childHeight = anchoPanel;//2
    const parentWidth = anchoTecho;//15
    const parentHeight = altoTecho;//3
    // console.log('parentWidth ,childHeight',parentWidth ,childHeight)
    // console.log('parentHeight, childWidth',parentHeight, childWidth)
    let numChildrenColumn= orientation === "horizontal" ? Math.floor(parentWidth / childHeight) : Math.floor(parentWidth / childWidth);//15
    let numChildrenRow = orientation === "horizontal" ? Math.floor(parentHeight / childWidth) : Math.floor(parentHeight / childHeight);//1
    // console.log('orientation,numChildrenPerRow',orientation,numChildrenRow)//3
    // console.log('numChildrenPerColumn',numChildrenColumn)//7
    // console.log('childWidth,childHeight,parentWidth,parentHeight',childWidth,childHeight,parentWidth,parentHeight)

    // const factorAmplif=30;
    // const children = [];
    // for (let i = 0; i < numChildrenRow; i++) {
    //   for (let j = 0; j < numChildrenColumn; j++) {
    //     console.log('coord fila,col',i,j, parentX + (j * childWidth)*factorAmplif,parentY + (i * childHeight)*factorAmplif)
    //     children.push(
    //       <Rect
    //         key={`${i}-${j}`}
    //         // x={orientation === "horizontal" ? parentX + i * childWidth : parentX + j * childWidth}
    //         // y={orientation === "horizontal" ? parentY + j * childHeight : parentY + i * childHeight}
    //         x={orientation === "horizontal" ? parentX + (j * childWidth)*factorAmplif : parentX +( j * childWidth)*factorAmplif}
    //         y={orientation === "horizontal" ? parentY + (i * childHeight)*factorAmplif : parentY + (i * childHeight)*factorAmplif}
            
    //         width={childHeight*factorAmplif}
    //         height={childWidth*factorAmplif}
    //         fill="lightblue"
    //         stroke="black"
    //         strokeWidth={1}
    //       />
    //     );
    //   }
    // }
    //console.log('children',children)


  return (
    <>
    <div className="mb-4 flex flex-col gap-6">
    <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-900 antialiased">
        El número de paneles es: {resultado.numeroDePaneles} en posición {resultado.opcionMaxima}, 
        organizados en {numChildrenRow} hileras de {numChildrenColumn } paneles c/u.
    </p>
    </div>
    {/* <div>
     <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect
          x={5}
          y={5}
          width={parentWidth*factorAmplif}
          height={parentHeight*factorAmplif}
          stroke="black"     // Color del borde
          strokeWidth={2}    // Ancho del borde
          fill="orange" //color de relleno
          //draggable
        />
      {children}
      </Layer>
     </Stage>
    </div> */}
    </>
  );
}