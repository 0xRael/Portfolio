import { motion, AnimatePresence } from 'framer-motion';

export function Transition({ children }){
    return (
        <AnimatePresence>
            <motion.div
                initial = {{ opacity: 0, y: 50 }}
                animate = {{ opacity: 1, y: 0 }}
                exit = {{ opacity: 0, y: 50 }}
                className="flex flex-col gap-4 row-start-2 items-center sm:items-start size-auto"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}