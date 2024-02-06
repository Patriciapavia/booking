import type { ComponentPropsWithoutRef } from "react";

// Setting up InputProps that contain the default <input> props as well as some custom props (label, id)
type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<"input">;

export default function Input({ label, id, ...props }: InputProps) {
    return (
        <div className="mb-4">
            <label className="block text-xs font-bold mb-1 text-gray-400 uppercase" htmlFor={id}>{label}</label>
            <input className="outline-teal-500 w-full max-w-[35rem] font-inherit text-lg border border-gray-300 rounded-md p-2" id={id} {...props} />
        </div>
    );
}
