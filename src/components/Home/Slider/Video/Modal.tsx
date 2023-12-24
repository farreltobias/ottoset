import { AnimatePresence, motion, Transition, Variants } from 'framer-motion';

import Close from '@public/icons/close.svg';

import { Dialog } from '@headlessui/react';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const Modal: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const transition: Transition = {
    type: 'spring',
    stiffness: 500,
    damping: 20,
  };

  const variants: Variants = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
    exit: {
      scale: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const buttonVariants: Variants = {
    initial: {
      opacity: 0,
      visibility: 'hidden',
    },
    animate: {
      opacity: 1,
      visibility: 'visible',
    },
    exit: {
      opacity: 0,
      visibility: 'hidden',
      transition: {
        duration: 0.2,
      },
    },
  };

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
                variants={variants}
                transition={transition}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className="relative h-fit">
                  <motion.button
                    variants={buttonVariants}
                    transition={{ delay: 1, ...transition }}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    aria-label="Fechar Modal"
                    className="absolute z-10 top-4 right-4 outline-none"
                    onClick={() => setIsOpen(false)}
                  >
                    <Close className="w-12 h-12 fill-neutral" />
                  </motion.button>
                  <Dialog.Panel className="h-[80vh]">
                    <video autoPlay loop className="w-full h-full">
                      <source src="/videos/ottoset.mp4" />
                    </video>
                  </Dialog.Panel>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      )}
    </Dialog>
  );
};
