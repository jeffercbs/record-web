import { createStore } from "zustand";

interface RecordState {
  audio: boolean;
  webcamp: boolean;
  screen: boolean;
  updatePreference: (key: string, value: boolean) => void;
}

const DEFAULT_PREFERENCES: any = localStorage.getItem("preferences") || {
  audio: false,
  webcamp: false,
  screen: false,
};

export const useRecordStore = createStore<RecordState>((set) => ({
  ...DEFAULT_PREFERENCES,
  updatePreference: (key, value) =>
    set((state) => {
      const newState = { ...state, [key]: value };
      localStorage.setItem("preferences", JSON.stringify(newState));

      return newState;
    }),
}));
