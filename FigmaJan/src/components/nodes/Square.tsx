import { NodeResizer } from "@reactflow/node-resizer";
import { NodeProps, Handle, Position } from "reactflow";

import '@reactflow/node-resizer/dist/style.css'

export function Square( { selected } : NodeProps) {
    return (
        <div className="bg-violet-500 rounded w-full h-full min-w-[100px] min-h-[100px] ">
            <NodeResizer
                minWidth={100}
                minHeight={100}
                isVisible={selected}
                lineClassName="border-blue-400"
                handleClassName="h-3 w-3 bg-white border-2 rouded border-blue-400"

            />

            <Handle
                type="source"
                id="right"
                position={Position.Right}
                className="-right-5 w-3 h-3 bg-blue-400/80"
            />

            <Handle
                type="source"
                id="left"
                position={Position.Left}
                className="-left-5 w-3 h-3 bg-blue-400/80"
            />
            <Handle
                type="source"
                id="top"
                position={Position.Top}
                className="-top-5 w-3 h-3 bg-blue-400/80"
            />
            <Handle
                type="source"
                id="bottom"
                position={Position.Bottom}
                className="-bottom-5 w-3 h-3 bg-blue-400/80"
            />


        </div>
    )
}