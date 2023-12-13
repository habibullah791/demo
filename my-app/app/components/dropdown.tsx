// DropdownComponent.jsx

'use client';
import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

interface DropdownComponentProps {
    options: string[];
}

const DropdownComponent: React.FC<DropdownComponentProps> = ({ options }) => {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([options[0]]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    return (
        <Dropdown className="m-4 border-none">
            <DropdownTrigger
            style={{ 
                width: "100%", 
                border: "none",
                borderStyle: "none",
            }}
            >
                <Button
                    className="capitalize flex items-center space-x-1"
                >
                    {selectedValue}
                    <FiChevronDown
                        className="ml-2 text-primary-color"
                        size={23}
                    />
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                className="flex flex-col bg-primary-color text-white p-2 cursor-pointer text-sm"
                aria-label="Single selection example"
                style={{ 
                    // width: "100%", 
                    borderRadius: "0.375rem", 
                }}
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
            >
                {options.map((option) => (
                    <DropdownItem key={option}>{option}</DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};

export default DropdownComponent;
