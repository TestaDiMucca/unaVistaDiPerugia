import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalProps as DefaultModalProps,
  Button,
} from '@chakra-ui/react';

export type ModalProps = DefaultModalProps & {
  cancelLabel?: string;
  onCancel?: () => void;
  confirmLabel?: string;
  onConfirm: () => void;
  isOpen: boolean;
  onClose: () => void;
  title: string;
};

export default function BasicModal({
  children,
  onClose,
  onCancel,
  isOpen,
  onConfirm,
  cancelLabel = 'Cancel',
  confirmLabel = 'Confirm',
  title,
}: ModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        {title && <ModalHeader>{title}</ModalHeader>}
        {!onCancel && <ModalCloseButton />}
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          {onCancel && (
            <Button colorScheme="blue" mr={3} onClick={onCancel}>
              {cancelLabel}
            </Button>
          )}
          <Button variant="ghost" onClick={onConfirm}>
            {confirmLabel}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
