// app/recoilContextProvider.tsx
"use client";
import { RecoilRoot, atom } from "recoil";
export const cardsDataState  = atom({
  key: "cardsDataState",
  default: [],
});

export default function RecoidContextProvider({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}