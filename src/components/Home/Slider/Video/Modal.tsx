import { AnimatePresence, motion } from 'framer-motion';

import { Dialog } from '@headlessui/react';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const Modal: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
      static
    >
      {({ open }) => (
        <AnimatePresence mode="popLayout">
          {open && (
            <>
              <div
                className="fixed inset-0 bg-neutral-900/50"
                aria-hidden="true"
              />
              <motion.div
                className="fixed inset-0 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0, transition: { duration: 0.2 } }}
              >
                <Dialog.Panel className="h-[80vh]">
                  {/* <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/EG4KHwZut0o?autoplay=1&loop=1&origin=https://ottoset.com&iv_load_policy=3&hl=pt&controls=2&color=white"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  /> */}
                  <video autoPlay loop className="w-full h-full">
                    <source src="/videos/ottoset.mp4" />
                  </video>
                </Dialog.Panel>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      )}
    </Dialog>
  );
};
