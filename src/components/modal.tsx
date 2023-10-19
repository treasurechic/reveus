"use client";

import { Button, Modal } from "flowbite-react";
import { ReactNode } from "react";

export default function DefaultModal({
  openModal,
  setOpenModal,
  title,
  footer,
  children,
}: {
  openModal: boolean;
  setOpenModal: (str: boolean) => void;
  title?: string;
  footer?: boolean;
  children: ReactNode;
}) {
  return (
    <>
      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        position={'center'}
        className="modal-wrapper"
      >
        {title && <Modal.Header className="text-white">{title}</Modal.Header>}
        <hr className="h-[0.1rem] bg-gray-300 opacity-[0.4]"></hr>
        <Modal.Body>{children}</Modal.Body>
        {footer && (
          <Modal.Footer>
            <Button onClick={() => setOpenModal(false)}>I accept</Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Decline
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
}
