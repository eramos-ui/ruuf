'use client';
import { CardCounterRectPage } from "@/app/counter-card/components/CardCounterRect";


export default function CounterPageRect() {
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center">
        <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Dimensiones de una superficie rectangular
          </h4>
            <div className="mb-4 flex flex-col gap-6">
              <CardCounterRectPage />
            </div>
        </div>
      </div>
    </div>
  );
}