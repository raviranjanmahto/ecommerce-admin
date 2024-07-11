"use client";

import { Modal } from "@/components/ui/modal";

const Home = () => {
  return (
    <div className='p-4'>
      <Modal title='Test' description='Test desc' isOpen onClose={() => {}}>
        Children
      </Modal>
    </div>
  );
};

export default Home;
