import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { GSelectInputController } from "./Controls/gSelectInputControl";

const GSelectInput: React.FC<{
  label: string;
  control: GSelectInputController;
}> = ({ label, control }) => {
  if (control.value) {
    control.setHasBeenTouched(true);
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="pb-5 pt-8">
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white p-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {label}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {control.possibleValues.map((v: string) =>
            control.selectedValues.includes(v) ? (
              <div key={v}>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm bg-gray-100 text-gray-400 outline-none cursor-default"
                  >
                    {v}
                  </a>
                </MenuItem>
              </div>
            ) : (
              <MenuItem key={v}>
                <a
                  href="#"
                  onClick={() => {
                    control.setSelectedValues([...control.selectedValues, v]);
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                  {v}
                </a>
              </MenuItem>
            )
          )}
        </div>
      </MenuItems>
    </Menu>
  );
};

export default GSelectInput;
