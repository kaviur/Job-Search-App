
export default function NavFilters() {
  return (
    <nav className="flex flex-row content-center w-full p-2 mx-auto font-semibold bg-zinc-900 text-white dark:text-stone-50 justify-evenly">
      <ul>
        <li className="inline p-2 hover:border-t-2">
            categorias
        </li>
        <li className="inline p-2 hover:border-t-2">
          modalidad
        </li>
        <li className="inline p-2 hover:border-t-2">
          ciudad
        </li>
        <li className="inline p-2 hover:border-t-2">
          ingles
        </li>
        <li className="inline p-2 hover:border-t-2">
          lenguaje
        </li>
      </ul>
    </nav>
  );
}