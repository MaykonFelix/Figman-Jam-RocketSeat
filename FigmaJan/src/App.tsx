import { useCallback } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  ConnectionMode,
  Controls,
  useEdgesState
} from 'reactflow';
import 'reactflow/dist/style.css';
import { zinc } from 'tailwindcss/colors'
import { Square } from './components/nodes/Square'


const NODE_TYPES = {
  square: Square,
}

const INITIAL_NODES = [
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 200,
      y: 200,
    },
    data: {},
  },
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 600,
      y: 400,
    },
    data: {},
  }
]satisfies Node[]

function App() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  const onConnect = useCallback((connection: Connection) => {
    return setEdges(edges => addEdge(connection, edges))
  }, [])

  return (
    <div className='w-screen h-screen'>
      <ReactFlow
        nodeTypes={NODE_TYPES}
        nodes={INITIAL_NODES}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionMode={ConnectionMode.Loose}
      >
        <Background
          gap={12}
          size={2}
          color={zinc[200]}
        />
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default App