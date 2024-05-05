import { create } from 'zustand';

interface CardCreateModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useCardCreateModal = create<CardCreateModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}));

export default useCardCreateModal
