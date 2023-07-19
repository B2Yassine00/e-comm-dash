"use client";

import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

const setupPage = () => {
    return (
      <div className="p-4">
        <Modal title="Test" description="test Description" isOpen onClose={()=>{}}>
          Children
        </Modal>
      </div>
        )
  }

export default setupPage;