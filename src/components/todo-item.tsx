export default function TodoItem(props: {
  done: boolean;
  name: string;
  onChecked: () => void;
}) {
  return (
    <div
      className={
        `flex items-center gap-2 p-3 border rounded-md ` +
        `${props.done ? "bg-green-400 line-through" : ""}`
      }
    >
      {props.done ? "true" : "false"}
      <input type="checkbox" className="h-4 w-4" onChange={props.onChecked} />
      <p className="text-md">{props.name}</p>
    </div>
  )
}
