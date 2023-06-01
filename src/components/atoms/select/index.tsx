import React, { useState } from "react";

interface Option {
    value: string | number;
    label: string | number;
}

interface SelectProps {
    options: Option[];
    onSelect: (value: string) => void;
}

const AtomSelect: React.FC<SelectProps> = ({ options, onSelect }) => {
    const [selectedValue, setSelectedValue] = useState("");

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedValue(value);
        onSelect(value);
    };

    return (
        <select
            value={selectedValue}
            onChange={handleSelect}
            className="px-3 py-1 bg-white border border-slate-500"
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default AtomSelect;
