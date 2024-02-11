import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

type BaseProps = {
    children: ReactNode;
    textOnly?: boolean;
};

// Setting up Button / Link specific props
// The `to` prop will be used to determine if a <button> or <Link> should be rendered
type ButtonProps = ComponentPropsWithoutRef<"button"> &
    BaseProps & { to?: never };
type ButtonLinkProps = LinkProps & BaseProps & { to: string };

// Using a type guard with a type predicate to determine if the received props are for a <button> or <Link>
function isRouterLink(
    props: ButtonProps | ButtonLinkProps,
): props is ButtonLinkProps {
    return "to" in props;
}

export default function Button(props: ButtonProps | ButtonLinkProps) {
    if (isRouterLink(props)) {
        // Destructuring inside the `if` statement to ensure TypeScript "understands" that `props` is of type `ButtonLinkProps` and `otherProps` will therefore only contain props that work on <Link>
        const { children, textOnly, ...otherProps } = props;
        return (
            <Link
                className={`bg-teal-400 text-white border-none rounded-md py-2 px-6 cursor-pointer no-underline  hover:bg-teal-600 active:bg-teal-800 ${textOnly ? "button--text-only" : "bg-transparent  hover:bg-transparent hover:text-teal-500 active:bg-transparent active:text-teal-700"}`}
                {...otherProps}
            >
                {children}
            </Link>
        );
    }

    // Destructuring after the `if` statement to ensure TypeScript "understands" that `props` is of type `ButtonProps` and `otherProps` will therefore only contain props that work on <button>
    const { children, textOnly, ...otherProps } = props;

    return (
        <button
            className={`bg-teal-400 border-none text-white rounded-md py-2 px-6 cursor-pointer no-underline font-inherit hover:bg-teal-600 active:bg-teal-800 ${textOnly ?
                "bg-transparent  hover:bg-transparent  active:bg-transparent active:text-teal-700" : ""}`}
            {...otherProps}
        >
            {children}
        </button>
    );
}
