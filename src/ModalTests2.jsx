import { Link } from 'react-router-dom'
import React, { useState } from 'react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

import { useDisclosure, Button } from '@chakra-ui/react'

export function ModalTests2({ onClose }) {
    const { isOpen, onOpen} = useDisclosure()

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Your post</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p>
                        {' '}
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ipsum voluptatum repellat optio distinctio, fugiat
                        dicta nemo reiciendis doloremque tempore adipisci,
                        veritatis voluptates similique! Tempore magnam, sit quod
                        temporibus veritatis corporis.{' '}
                    </p>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Edit
                    </Button>
                    <Button variant="ghost">Delete</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
