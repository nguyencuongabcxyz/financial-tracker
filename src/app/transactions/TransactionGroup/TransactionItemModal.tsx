import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { Transaction } from "./TransactionItem";
import Image from "next/image";

interface TransactionItemModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  transaction: Transaction;
}

const TransactionItemModal: React.FC<TransactionItemModalProps> = ({
  isOpen,
  onOpenChange,
  transaction,
}) => {
  const { title, description, descriptionImage } = transaction;

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>
              <p>{description}</p>
              {descriptionImage && (
                <Image
                  width={150}
                  height={150}
                  className="self-center"
                  src={descriptionImage}
                  alt="transactionIcon"
                />
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default TransactionItemModal;
