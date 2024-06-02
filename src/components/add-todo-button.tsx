export default function AddTodoButton(props: { onClick: () => void }) {
  return (
    <button
      className="bg-green-500 px-4 py-2 rounded-md text-white"
      onClick={props.onClick}
    >
      Adicionar
    </button>
  )
}
