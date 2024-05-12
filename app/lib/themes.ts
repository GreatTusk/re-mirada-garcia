import { CustomFlowbiteTheme } from "flowbite-react";

export const navbar_theme: CustomFlowbiteTheme["navbar"] = {
  root: {
    base: "bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4 fixed top-0 z-50 w-full",
    rounded: {
      on: "rounded",
      off: "",
    },
    bordered: {
      on: "border",
      off: "",
    },
    inner: {
      base: "mx-auto flex flex-wrap items-center justify-between",
      fluid: {
        on: "",
        off: "container",
      },
    },
  },
  brand: {
    base: "flex items-center",
  },
  collapse: {
    base: "w-full lg2:block lg2:w-auto",
    list: "mt-4 flex flex-col lg2:mt-0 lg2:flex-row lg2:space-x-8 lg2:text-sm lg2:font-medium",
    hidden: {
      on: "hidden",
      off: "",
    },
  },
  link: {
    base: "block py-2 pl-3 pr-4 lg2:p-0",
    active: {
      on: "bg-cyan-700 text-white dark:text-white lg2:bg-transparent lg2:text-cyan-700",
      off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg2:border-0 lg2:hover:bg-transparent lg2:hover:text-cyan-700 lg2:dark:hover:bg-transparent lg2:dark:hover:text-white",
    },
    disabled: {
      on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      off: "",
    },
  },
  toggle: {
    base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg2:hidden",
    icon: "h-6 w-6 shrink-0",
  },
};

export const footerTheme: CustomFlowbiteTheme["footer"] = {
  root: {
    base: "w-full bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
    container: "w-full p-6",
    bgDark: "bg-gray-800",
  },
  groupLink: {
    base: "flex flex-wrap text-sm text-gray-500 dark:text-white",
    link: {
      base: "me-4 last:mr-0 md:mr-6",
      href: "hover:underline",
    },
    col: "flex-col space-y-4",
  },
  icon: {
    base: "text-gray-500 dark:hover:text-white",
    size: "h-5 w-5 rounded-full",
  },
  title: {
    base: "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white",
  },
  divider: {
    base: "my-6 w-full border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8",
  },
  copyright: {
    base: "text-sm text-gray-500 dark:text-gray-400 sm:text-center",
    href: "ml-1 hover:underline",
    span: "ml-1",
  },
  brand: {
    base: "mb-4 flex items-center sm:mb-0",
    img: "mr-3 h-8 rounded-full",
    span: "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white",
  },
};
