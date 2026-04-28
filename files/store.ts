import { create } from "zustand";
import { SignatureData, DEFAULT_SIGNATURE } from "./types";

interface SignatureStore {
  data: SignatureData;
  setField: <K extends keyof SignatureData>(key: K, value: SignatureData[K]) => void;
  setFields: (fields: Partial<SignatureData>) => void;
  reset: () => void;
}

export const useSignatureStore = create<SignatureStore>((set) => ({
  data: { ...DEFAULT_SIGNATURE },

  setField: (key, value) =>
    set((state) => ({ data: { ...state.data, [key]: value } })),

  setFields: (fields) =>
    set((state) => ({ data: { ...state.data, ...fields } })),

  reset: () => set({ data: { ...DEFAULT_SIGNATURE } }),
}));
