## Modals with three dots 

```
<i className="bi bi-three-dots" onClick={onOpen}>
                                {isOpen && (
                                    <Modal isOpen={isOpen} onClose={onClose}>
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalHeader>Your post</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                <p>{content}</p>
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button
                                                    colorScheme="blue"
                                                    mr={3}
                                                    onClick={onClose}
                                                >
                                                    Edit
                                                </Button>
                                                <Button variant="ghost">
                                                    Delete
                                                </Button>
                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                )}
                            </i>
```

```
<i className="bi bi-three-dots" onClick={onOpen}>
                                {isOpen && (
                                    <Modal isOpen={isOpen} onClose={onClose}>
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalHeader>Your post</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                <p>{content}</p>
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button
                                                    colorScheme="blue"
                                                    mr={3}
                                                    onClick={onClose}
                                                >
                                                    Edit
                                                </Button>
                                                <Button variant="ghost">
                                                    Delete
                                                </Button>
                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                )}
                            </i>
```

Conditional rendering of ... dots based on three dots 

```
 {username !== loggedUserName ? null : (
                                <>
                                    <Menu>
                                        <MenuButton>
                                            <i
                                                className="bi bi-three-dots"
                                                onClick={onOpen}
                                            >
                                                {' '}
                                            </i>
                                        </MenuButton>
                                        <MenuList>
                                            <MenuItem onClick={handleEditClick}>
                                                Edit
                                            </MenuItem>
                                            <MenuItem
                                                onClick={() =>
                                                    deletePostHandler(_id)
                                                }
                                            >
                                                Delete{' '}
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>

                                    <Modal
                                        isOpen={isModalOpen}
                                        onClose={handleCloseModal}
                                    >
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalHeader>Your post</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                <p>{content}</p>
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button
                                                    colorScheme="blue"
                                                    mr={3}
                                                    onClick={onClose}
                                                >
                                                    Edit
                                                </Button>
                                                {/* <Button variant="ghost">Delete</Button> */}
                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                </>
                            )}
```

