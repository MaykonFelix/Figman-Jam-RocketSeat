import { NodeProps, Handle, Position } from "reactflow";

export function Square(props: NodeProps) {
    return (
        <div className="bg-violet-500 rounded w-[200px] h-[200px] ">
            <Handle type="source" id="right" position={Position.Right} />
            <Handle type="source" id="left" position={Position.Left} />
        </div>
    )
}