import create from "zustand";
import { devtools } from "zustand/middleware";

const useModvarStore = create(
  devtools((set) => ({
    greeting: "Welcome to the demo!",
    setModvar: (tag, value) => set({ [tag]: value }),
  }))
);

export default useModvarStore;
