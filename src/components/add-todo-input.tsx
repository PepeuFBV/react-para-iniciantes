export default function AddTodoInput(props: { onChange: (text: string) => void }) {
  return (
    <input
      className="px-4 py-2 border rounded-md w-full"
      placeholder="Arrumar a casa"
      onChange={(e) => props.onChange(e.target.value)}
    />
  )
}
