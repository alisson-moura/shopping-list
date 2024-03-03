import { AvailableTagNames, StyleTags, Tag } from "./components/Tag";

export default function Home() {
  return (
    <main className="bg-gray-600 flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <label className="block text-sm font-light leading-6 text-gray-100">Categoria</label>
        <div className="relative mt-2">
          <button type="button" className="flex justify-start relative w-full cursor-default rounded-md bg-gray-300 px-4 pe-12 py-2 text-left text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
            <span>Selecione uma categoria</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <svg className="h-5 w-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd" />
              </svg>
            </span>
          </button>
          <ul className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" tabIndex={-1} role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">

            {Object.keys(AvailableTagNames).map((item, index) => (
              <li key={index} className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                <Tag tagName={AvailableTagNames[item]} />
              </li>
            ))}

          </ul>
        </div>
      </div>
    </main>
  );
}
