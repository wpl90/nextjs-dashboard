import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

//================================================//
//スタート地点。引数無し。
// export default function AcmeLogo() {
//   return (
//     <div
//       className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
//     >
//       <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
//       <p className="text-[44px]">Acme</p>
//     </div>
//   );
// }

//================================================//
//色とフォントサイズを引数で指定するパターン。引数はstring型
// export default function AcmeLogo({ color = 'yellow', fontSize = '44px' }) {
//   return (
//     <div
//       className={`${lusitana.className} flex flex-row items-center leading-none`}
//       style={{ color: color }}
//     >
//       <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
//       <p style={{ fontSize: fontSize }}>Acme</p>
//     </div>
//   );
// }

//================================================//
//色はstring型、フォントサイズはnumber型で指定するパターン。引数はstring型とnumber型
// export default function AcmeLogo({ color = 'cyan', fontSize = 24 }) {
//   return (
//     <div
//       className={`${lusitana.className} flex flex-row items-center leading-none`}
//       style={{ color: color }}
//     >
//       <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
//       <p style={{ fontSize: `${fontSize}px` }}>Acme</p>
//     </div>
//   );
// }

//================================================//
//フォントサイズの下限10,上限100を設定するパターン。引数はstring型とnumber型
export default function AcmeLogo({ color = 'orange', fontSize = 24 }) {
  const size = Math.min(Math.max(fontSize, 20), 100);
  const iconSize = 12;
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none`}
      style={{ color: color }}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      {/* <GlobeAltIcon className="h-{iconSize} w-32 rotate-[15deg]" /> */}
      <GlobeAltIcon className={`h-${iconSize} w-${iconSize} rotate-[15deg]`} />
      <p style={{ fontSize: `${size}px` }}>Acme</p>
    </div>
  );
}


