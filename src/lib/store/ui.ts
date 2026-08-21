import { create } from "zustand";

/**
 * Global UI state (Zustand). Keeps cross-component toggles — like the chat
 * assistant panel — in one lightweight store instead of prop-drilling or
 * duplicating local state.
 */
type UIState = {
  chatOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
  toggleChat: () => void;
};

export const useUIStore = create<UIState>((set) => ({
  chatOpen: false,
  openChat: () => set({ chatOpen: true }),
  closeChat: () => set({ chatOpen: false }),
  toggleChat: () => set((s) => ({ chatOpen: !s.chatOpen })),
}));
